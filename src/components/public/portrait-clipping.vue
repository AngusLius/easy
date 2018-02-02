<template>
  <div class="portrait-clipping-module">
    <div class="portrait-clipping" title="">
      <img :src="portraitUrl"/>
      <form ref="portrait-form">
        <input type="file" accept="image/png,image/jpeg" ref="image-selector"/>
      </form>
    </div>
    <div class="person-tag" v-if="user.name">
      <div class="person-name">{{user.name}}</div>
      <div class="person-tip">入职第{{workDays}}天，快三年了哦~~</div>
    </div>
    <transition name="fade">
      <div v-show="modify" class="mask-bg" ref="mask-bg" @mouseup="captureMode=''" @mouseleave="captureMode=''" @mousemove="capture($event)">
        <div class="operating-panel">
          <div class="operating-header">上传头像
            <span class="modal-close" @click="modify = false" title="取消上传">
              <Icon type="ios-close-empty"></Icon>
            </span>
          </div>
          <div class="operating-content">
            <canvas width="80" height="80" class="output-canvas" ref="paint-canvas"></canvas>
            <img src="" ref="blur-img" class="blur"/>
            <img src="" ref="thumb-img"/>
            <div class="shade-resize" ref="shade-resize"></div>
            <div class="shade-resize-front" ref="shade-resize-front" @mousedown.self="setCaptureMode('move', $event)">
              <div class="diagonal-resize top-left" @mousedown.self="setCaptureMode('resize', $event, 'top-left')"></div>
              <div class="diagonal-resize top-right" @mousedown.self="setCaptureMode('resize', $event, 'top-right')"></div>
              <div class="diagonal-resize bottom-left" @mousedown.self="setCaptureMode('resize', $event, 'bottom-left')"></div>
              <div class="diagonal-resize bottom-right" @mousedown.self="setCaptureMode('resize', $event, 'bottom-right')"></div>
            </div>
          </div>
          <div class="operating-footer">
            <button @click="captureToCanvas">确定</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'portrait-clipping',
  props: ['user'],
  data () {
    return {
      modify: false,
      base64: '',
      minLeft: 0,
      left: 0,
      cLeft: 0,
      minTop: 0,
      top: 0,
      cTop: 0,
      maxDiameter: 0, // 最大直径
      diameter: 0,
      cDiameter: 0,
      circle: {},
      captureMode: '', // move || resize
      resize: '',
      clientX: 0,
      clientY: 0
    }
  },
  watch: {
    base64 (val) {
      console.log(val)
    },
    modify (val) {
      if (val === false) {
        // 清空file input的内容，防止再次选择同一张图片时不响应
        this.$refs['portrait-form'].reset()
      }
    }
  },
  computed: {
    ...mapGetters([
      'portraitUrl',
      'workDays'
    ])
  },
  mounted () {
    let $fileInput = this.$refs['image-selector']
    let $thumbImg = this.$refs['thumb-img']
    $thumbImg.onload = () => {
      let maxSize = this.getMaxImageSize($thumbImg)
      $thumbImg.width = maxSize.width
      $thumbImg.height = maxSize.height
      this.setCaptureSize(maxSize)
      this.modify = true
    }
    // 文件改变时触发画布重新加载图片
    $fileInput.onchange = () => {
      let file = $fileInput.files && $fileInput.files[0]
      // 文件类型或文件名长度不符
      if (!file || !/^image\/(png|jpeg)$/.test(file.type.toLowerCase())) {
        this.$Message.error('请选择png或者jpg格式的图片文件')
        return false
      }
      let reader = new FileReader()
      reader.onloadend = e => {
        let base64 = e.target.result
        $thumbImg.src = base64
        this.$refs['blur-img'].src = base64
      }
      reader.readAsDataURL(file)
    }
  },
  methods: {
    ...mapActions(['uploadPortrait']),
    /**
     * 设置剪切时的各种尺寸参数
     * @param size 根据同比缩放计算出的最大图片大小
     */
    setCaptureSize (size) {
      this.cDiameter = Math.floor(Math.min(size.width, size.height))
      this.maxDiameter = Math.floor(Math.min(size.width, size.height))
      this.minLeft = Math.floor((300 - size.width) / 2)
      this.minTop = Math.floor((200 - size.height) / 2)
      this.setCapturePosition({
        left: Math.floor((300 - this.cDiameter) / 2),
        top: Math.floor((200 - this.cDiameter) / 2)
      })
    },
    /**
     * 设置剪切直径
     * @param diameter 直径
     */
    setCaptureDiameter (diameter) {
      if (diameter > 0 && diameter <= this.maxDiameter) {
        this.cDiameter = diameter
      }
    },
    /**
     * 设置剪切位置
     * @param p 相对位置
     */
    setCapturePosition (p) {
      let left = 0
      let top = 0
      if (p.left >= this.minLeft && p.left <= 300 - this.minLeft - this.cDiameter) {
        left = p.left
      } else if (p.left < this.minLeft) {
        left = this.minLeft
      } else {
        left = 300 - this.minLeft - this.cDiameter
      }
      if (p.top >= this.minTop && p.top <= 200 - this.minTop - this.cDiameter) {
        top = p.top
      } else if (p.top < this.minTop) {
        top = this.minTop
      } else {
        top = 200 - this.minTop - this.cDiameter
      }
      this.cLeft = left
      this.cTop = top
      let pointX = Math.floor(left - this.minLeft + this.cDiameter / 2)
      let pointY = Math.floor(top - this.minTop + this.cDiameter / 2)
      let $thumbImg = this.$refs['thumb-img']
      let $shadeResize = this.$refs['shade-resize']
      let $shadeResizeFront = this.$refs['shade-resize-front']
      this.circle = {
        x: pointX,
        y: pointY,
        radius: this.cDiameter / 2
      }
      $thumbImg.style = `clip-path: circle(${this.cDiameter / 2}px at ${pointX}px ${pointY}px);`
      $shadeResize.style = `width: ${this.cDiameter + 6}px; height: ${this.cDiameter + 6}px; left: ${left - 3}px; top: ${top - 3}px;`
      $shadeResizeFront.style = `width: ${this.cDiameter}px; height: ${this.cDiameter}px; left: ${left}px; top: ${top}px;`
    },
    /**
     * 抓取模式
     * @param mode 模式
     * @param event 事件
     * @param resize resize方向
     */
    setCaptureMode (mode, event, resize = '') {
      this.captureMode = mode
      this.resize = resize
      this.clientX = event.clientX
      this.clientY = event.clientY
      this.left = this.cLeft
      this.top = this.cTop
      this.diameter = this.cDiameter
    },
    /**
     * 剪切
     * @param event 事件
     */
    capture (event) {
      if (this.captureMode === 'move') {
        this.captureMove(event)
      } else if (this.captureMode) {
        this.captureResize(event)
      }
    },
    /**
     * 移动位置剪切
     * @param event 事件
     */
    captureMove (event) {
      let left = this.left + event.clientX - this.clientX
      let top = this.top + event.clientY - this.clientY
      this.setCapturePosition({
        left: left,
        top: top
      })
    },
    /**
     * 改变大小剪切
     * @param event
     */
    captureResize (event) {
      let left = this.left
      let top = this.top
      let diffX = event.clientX - this.clientX
      let diffY = event.clientY - this.clientY
      let diameter = this.diameter
      let diffDiameter = Math.min(Math.abs(diffX), Math.abs(diffY))
      if ((this.resize === 'top-left' && diffX < 0 && diffY < 0) || (this.resize === 'top-right' && diffX > 0 && diffY < 0) ||
        (this.resize === 'bottom-left' && diffX < 0 && diffY > 0) || (this.resize === 'bottom-right' && diffX > 0 && diffY > 0)) {
        diffDiameter = 0 + diffDiameter
      } else if ((this.resize === 'top-left' && diffX > 0 && diffY > 0) || (this.resize === 'top-right' && diffX < 0 && diffY > 0) ||
        (this.resize === 'bottom-left' && diffX > 0 && diffY < 0) || (this.resize === 'bottom-right' && diffX < 0 && diffY < 0)) {
        diffDiameter = 0 - diffDiameter
      } else {
        diffDiameter = 0
      }
      diameter += diffDiameter
      if (diameter <= this.maxDiameter && diameter > 20 && diffDiameter !== 0) {
        if (this.resize === 'top-left') {
          left -= diffDiameter
          top -= diffDiameter
        } else if (this.resize === 'top-right') {
          top -= diffDiameter
        } else if (this.resize === 'bottom-left') {
          left -= diffDiameter
        }
        this.cDiameter = diameter
        this.setCapturePosition({
          left: left,
          top: top
        })
      }
    },
    /**
     * 根据剪切的相对位置区域绘制canvas并转换成base64提交到后台
     */
    captureToCanvas () {
      let left = this.circle.x - this.circle.radius
      let top = this.circle.y - this.circle.radius
      let $thumbImg = this.$refs['thumb-img']
      let canvas = this.$refs['paint-canvas']
      let ctx = canvas.getContext('2d')
      let multiple = $thumbImg.naturalWidth / $thumbImg.width
      ctx.drawImage($thumbImg, left * multiple, top * multiple, this.cDiameter * multiple, this.cDiameter * multiple, 0, 0, 80, 80)
      this.uploadPortrait(canvas.toDataURL().replace(/^data:(image\/(png|jpeg);base64)?,/, '')).then(d => {
        this.$Message.success('修改成功')
      }).catch(e => function () {
        this.$Message.error('美照上传失败，请重新上传')
      }).finally(() => {
        this.modify = false
      })
    },
    /**
     * 获取同比缩放后最大可显示图片尺寸
     * @param img
     * @return {Object}
     */
    getMaxImageSize (img) {
      let w = 300
      let h = 200
      let iW = img.naturalWidth
      let iH = img.naturalHeight
      let size = {}
      if (w / h === iW / iH) {
        size.width = w
        size.height = h
      } else if (w / h > iW / iH) {
        size.width = Math.round(iW / (iH / h))
        size.height = h
      } else {
        size.width = w
        size.height = Math.round(iH / (iW / w))
      }
      return size
    }
  }
}
</script>

<style lang="scss">
@import "../../scss/variable";

$diagonal-resize: -3px;

.portrait-clipping-module {
  .portrait-clipping {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin: 0 auto;
    cursor: pointer;
    overflow: hidden;
    input[type=file] {
      position: absolute;
      top: 0;
      right: 0;
      min-width: 100%;
      min-height: 100%;
      opacity: 0;
      filter: alpha(opacity=0);
      background: none;
      cursor: inherit;
      display: block;
      z-index: 150;
    }

    &:hover:after {
      color: #ffffff;
      font-size: 12px;
      content: '上传头像';
      display: block;
      width: 80px;
      height: 80px;
      padding-top: 50px;
      border-radius: 40px;
      background: url("../../images/personal-info/icon_photo.png") no-repeat center 20px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
    }
    img {
      max-width: 80px;
      max-height: 80px;
      border: none;
      display: inline-block;
    }
  }
  .person-tag {
    margin-top: 6px;
    @include user-select-none;
    .person-name {
      font-size: 16px;
      line-height: 22px;
    }
    .person-tip {
      font-size: 12px;
      color: #999999;
      line-height: 18px;
    }
  }
  .mask-bg {
    background-color: rgba(0, 0, 0, .4);
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 180;
    @include user-select-none;

    .operating-panel {
      width: 400px;
      height: 345px;
      background-color: #ffffff;
      border-radius: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .operating-header {
        height: 65px;
        line-height: 65px;
        position: relative;
        .modal-close {
          position: absolute;
          padding: 0 5px;
          font-size: 36px;
          line-height: 36px;
          cursor: pointer;
          right: 15px;
          top: 10px;
        }
      }
      .operating-content {
        border: 1px solid #e2e2e2;
        background-color: #f0f0f0;
        width: 302px;
        height: 202px;
        margin: 0 auto;
        position: relative;
        img {
          position: absolute;
          max-height: 200px;
          max-width: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 300;
          &.blur {
            @include filter-blur;
            z-index: 200;
          }
        }
        canvas {
          margin: 0 auto;
          opacity: 0;
        }
        .shade-resize {
          position: absolute;
          background-color: rgba(0, 0, 0, .5);
          z-index: 250;
        }
        .shade-resize-front {
          position: absolute;
          cursor: move;
          border: 1px dashed #ffffff;
          z-index: 350;
          .diagonal-resize {
            position: absolute;
            width: 8px;
            height: 8px;
            border: 1px solid #ffffff;
            background-color: #666666;
            z-index: 400;
            &.top-left {
              top: $diagonal-resize;
              left: $diagonal-resize;
              cursor: nw-resize;
            }
            &.top-right {
              top: $diagonal-resize;
              right: $diagonal-resize;
              cursor: ne-resize;
            }
            &.bottom-left {
              bottom: $diagonal-resize;
              left: $diagonal-resize;
              cursor: ne-resize;
            }
            &.bottom-right {
              bottom: $diagonal-resize;
              right: $diagonal-resize;
              cursor: nw-resize;
            }
          }
        }
      }
      .operating-footer {
        margin-top: 18px;
        button {
          width: 88px;
          height: 30px;
          line-height: 28px;
          background-color: $red-color;
          color: #ffffff;
          border: none;
          outline: none;
          border-radius: 4px;
          cursor: pointer;

          &:hover {
            background-color: #c9242a;
          }

          &:active {
            background-color: #b02024;
          }
        }
      }
    }
  }
}
</style>

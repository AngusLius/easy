<template>
  <footer>
    <div class="f-c">
      <div class="c-1">
        <div class="lt">
          <div class="j-1">最新职位：</div>
          <div class="j-2">
            <div class="job">考拉-Java专家/高级前端开发</div>
            <div class="job">考拉-Java专家/高级前端开发</div>
            <div class="job">考拉-Java专家/高级前端开发</div>
            <div class="job">考拉-Java专家/高级前端开发</div>
            <div class="job">考拉-Java专家/高级前端开发</div>
            <div class="job">考拉-Java专家/高级前端开发</div>
            <div class="job">考拉-Java专家/高级前端开发</div>
            <div class="job">考拉-Java专家/高级前端开发</div>
          </div>
        </div>
        <div class="rt">
          <div class="s-1">给内网的建议：</div>
          <div class="s-2">泡泡群：112334</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="c-2">
        Powered by 网易信息平台 © {{ new Date().getFullYear() }} 网易集团 版权所有
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style lang="scss">
footer {
  background-color: #262626;
  height: 133px;
  font-size: 12px;
  color: #ffffff;
  width: 100%;
  position: absolute;
  bottom: 0;
  .f-c {
    width: 1190px;
    margin: auto;
    .c-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 95px;
      .lt {
        .j-1 {
          opacity: 0.8;
        }
        .j-2 {
          display: flex;
          flex-wrap: wrap;
          width: 1025px;
          .job {
            opacity: 0.4;
            margin-right: 100px;
          }
        }
      }
      .rt {
        .s-1 {
          opacity: 0.8;
        }
        .s-2 {
          opacity: 0.4;
        }
      }
    }
    .line {
      border: 1px solid #ffffff;
      width: 1190px;
      height: 1px;
      opacity: 0.1;
    }
    .c-2 {
      display: flex;
      height: 35px;
      justify-content: center;
      align-items: center;
      opacity: 0.4;
    }
  }
}
</style>

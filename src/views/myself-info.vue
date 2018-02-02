<template>
  <div class="myself-info">
    <div class="main-container">
      <div class="my-portrait">
        <portrait-clipping :user="loginUser"/>
      </div>
      <personal-info class="my-personal-info"/>
    </div>
  </div>
</template>

<script>
import portraitClipping from '../components/public/portrait-clipping'
import personalInfo from '../components/personal-info'
import {mapGetters} from 'vuex'

export default {
  components: {
    portraitClipping,
    personalInfo
  },
  name: 'myself-info',
  computed: {
    ...mapGetters(['loginUser'])
  }
}
</script>

<style lang="scss">
.myself-info {
  .main-container {
    width: 1190px;
    margin: 20px auto 0;
    overflow: hidden;
    .my-portrait {
      width: 310px;
      height: 210px;
      background-color: #ffffff;
      float: left;
      padding: 40px;
      text-align: center;
    }
    .my-personal-info {
      margin-left: 320px;
    }
    &:after {
      display: block;
      content: ' ';
      clear: both;
    }
  }
}
</style>

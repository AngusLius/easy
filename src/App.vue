<template>
  <div id="app" class="full-page">
    <app-header/>
    <router-view/>
    <app-footer/>
    <client-service/>
    <BackTop class="custom-back-top" :bottom="160"/>
  </div>
</template>

<script>
import appHeader from './components/public/app-header'
import appFooter from './components/public/app-footer'
import clientService from './components/public/client-service'
import {mapActions} from 'vuex'

export default {
  components: {
    appHeader,
    appFooter,
    clientService
  },
  name: 'App',
  methods: {
    ...mapActions(['fetchLoginUser'])
  },
  mounted () {
    this.fetchLoginUser()
  }
}
</script>

<style lang="scss">
.full-page {
  min-height: 100%;
  height: auto;
  background-color: #f0f0f0;
  position: relative;
  padding-bottom: 153px;
  .custom-back-top {
    width: 40px;
    height: 40px;
    .ivu-back-top-inner {
      background-color: #ffffff;
      box-shadow: none;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      text-align: center;

      .ivu-icon-chevron-up {
        font-size: 20px;
        color: #999999;
        padding: 8px 0;
      }
    }

    &:hover {
      .ivu-back-top-inner {
        background-color: #f1f1f1;

        .ivu-icon-chevron-up {
          color: #808080;
        }
      }
    }

    &:active {
      .ivu-back-top-inner {
        background-color: #dcdcdc;

        .ivu-icon-chevron-up {
          color: #666666;
        }
      }
    }

  }
}
</style>

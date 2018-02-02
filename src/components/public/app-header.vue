<template>
  <header>
    <div class="nav">
      <router-link :to="{path: '/'}" class="lt">
        <i class="logo"></i>
        <div class="name">
          <p class="n-1">网易内网</p>
          <p class="n-2">it.netease.com</p>
        </div>
      </router-link>
      <div class="rt">
        <div class="col" v-show="!inputShow"></div>
        <div class="bl" v-show="!inputShow" @click="searchInput">
          <i class="search"></i>
        </div>
        <div class="input-search" v-show="inputShow">
          <input :autofocus="true" placeholder="搜索"/>
          <i class="search-input-i"></i>
        </div>
        <div class="col" v-show="!inputShow"></div>
        <div class="bl">
          <i class="notice"></i>
        </div>
        <div @click="logout">
          <a class="signout">退出</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      inputShow: false
    }
  },
  methods: {
    searchInput () {
      this.inputShow = true
    },
    logout () {
      this.$util.get('logout.du').finally(d => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss">
header {
  background-color: #fff;
  box-shadow: 0 1px 6px 0 rgba(204, 204, 204, 0.5);
  @keyframes input-show {
    from {
      width: 80px;
    }
    to {
      width: 223px;
    }
  }
  .nav {
    width: 1190px;
    height: 60px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .lt {
      display: flex;
      align-items: center;
      .logo {
        background: url("../../images/logo.png") no-repeat;
        display: inline-block;
        width: 30px;
        height: 40px;
        margin-right: 10px;
      }
      .name {
        .n-1 {
          font-size: 20px;
          line-height: 22px;
        }
        .n-2 {
          font-size: 12px;
        }
      }
    }
    .rt {
      display: flex;
      align-items: center;
      .bl {
        display: flex;
        justify-content: center;
        width: 58px;
      }
      .input-search {
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        display: flex;
        align-items: center;
        width: 223px;
        height: 30px;
        padding: 0 10px;
        animation: input-show 500ms;
        input {
          outline: none;
          height: 28px;
          width: 188px;
          border: none;
          &::placeholder {
            font-size: 12px;
            color: #CCCCCC;
          }
        }
        .search-input-i {
          background: url("../../images/header-footer/search-input.png") no-repeat;
          width: 16px;
          height: 16px;
          display: inline-block;
          margin-left: 10px;
        }
      }
      .col {
        border: 0.5px solid #d9d9d9;
        width: 1px;
        height: 19px;
      }
      .notice {
        background: url("../../images/header-footer/notice_red.png") no-repeat;
        cursor: pointer;
        width: 20px;
        height: 24px;
        display: inline-block;
      }
      .search {
        background: url("../../images/header-footer/search.png") no-repeat;
        width: 21px;
        height: 21px;
        display: inline-block;
      }
      .signout {
        font-size: 14px;
        color: #999999;
        line-height: 58px;
      }
    }
  }
}
</style>

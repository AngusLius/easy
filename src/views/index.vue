<template>
  <div class="home-page-container">
    <div class="main-content">
      <!-- 申请和个人信息 -->
      <section class="cnt-1">
        <!-- 轮播 -->
        <div class="pg-lt">
          <div class="main-top">
            <Carousel
              v-model="carouselSet.value"
              :autoplay="carouselSet.autoplay"
              :loop="carouselSet.loop"
              :arrow="carouselSet.arrow"
              :radius-dot="carouselSet.radius"
              :trigger="carouselSet.trigger">
              <CarouselItem>
                <i class="test-carousel"></i>
              </CarouselItem>
              <CarouselItem>
                <i class="test-carousel"></i>
              </CarouselItem>
              <CarouselItem>
                <i class="test-carousel"></i>
              </CarouselItem>
              <CarouselItem>
                <i class="test-carousel"></i>
              </CarouselItem>
            </Carousel>
          </div>
          <!-- 流程申请 -->
          <div class="main-bottom">
            <div class="apply-items">
              <router-link :to="{path: 'self'}" class="apply">
                <i class="leave"></i>
                <div class="t">请假申请</div>
              </router-link>
              <router-link :to="{path: 'self'}" class="apply">
                <i class="retroactive"></i>
                <div class="t">补签卡申请</div>
              </router-link>
              <router-link :to="{path: 'self'}" class="apply">
                <i class="interview"></i>
                <div class="t">申请入职申请</div>
              </router-link>
              <router-link :to="{path: 'self'}" class="apply">
                <i class="income"></i>
                <div class="t">收入证明</div>
              </router-link>
              <router-link :to="{path: 'self'}" class="apply">
                <i class="vpn"></i>
                <div class="t">VPN申请</div>
              </router-link>
              <router-link :to="{path: 'self'}" class="apply">
                <i class="asset"></i>
                <div class="t">资产申请</div>
              </router-link>
            </div>
            <router-link :to="{path: 'self'}" class="apply-more">
              <div class="t">更</div>
              <div class="t">多</div>
              <i class="more"></i>
            </router-link>
          </div>
        </div>
        <!-- 个人信息和待办事宜 -->
        <div class="pg-rt">
          <div class="info-top">
            <router-link title="个人信息" :to="{path: 'self'}" class="person">
              <div class="user-portrait">
                <img :src="portraitUrl"/>
              </div>
              <div class="name">{{ loginUser.name }}</div>
              <div class="signature">入职第{{ workDays }}天，快三年了哦~~</div>
            </router-link>
            <div class="matters">
              <router-link title="待办事宜" :to="{path: 'self'}" class="item">
                <!-- 备注：超过99需要显示99+ -->
                <div class="num">8</div>
                <div class="m">待办事宜</div>
              </router-link>
              <div class="col"></div>
              <router-link title="已办事宜" :to="{path: 'self'}" class="item">
                <div class="num">6</div>
                <div class="m">已办事宜</div>
              </router-link>
              <div class="col"></div>
              <router-link title="办结事宜" :to="{path: 'self'}" class="item">
                <div class="num">2</div>
                <div class="m">办结事宜</div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <!-- 论坛和热门文章 -->
      <section class="cnt-2">
        <!-- 论坛 -->
        <div class="pg-lt">
          <div class="fm-top">
            <div class="f-l">
              <i class="forum-i"></i>
              <div class="t">论坛</div>
            </div>
            <router-link :to="{path: 'self'}" class="more-arrow">
              <div class="m">更多</div>
              <i class="right-arrow"></i>
            </router-link>
          </div>
          <div class="fm-cnt">
            <div class="f-l">
              <div class="post">
                <div class="p-l">
                  <router-link title="看《芳华》有感，到底什么样的脸叫电影脸？" :to="{path: 'self'}" class="p-t">看《芳华》有感，到底什么样的脸叫电影脸？</router-link>
                  <div class="p-i">
                    <div class="p-m">
                      <div class="por"></div>
                      <div class="m-n">黄小琳</div>
                    </div>
                    <div class="com">200评论</div>
                  </div>
                </div>
                <div class="p-r">
                  <i class="ill-1"></i>
                </div>
              </div>
              <div class="post">
                <div class="p-l">
                  <router-link title="2017护肤彩妆精选 | 所有的新欢都在这里了" :to="{path: 'self'}" class="p-t">2017护肤彩妆精选 | 所有的新欢都在这里了</router-link>
                  <div class="p-i">
                    <div class="p-m">
                      <div class="por"></div>
                      <div class="m-n">李洋</div>
                    </div>
                    <div class="com">164评论</div>
                  </div>
                </div>
                <div class="p-r">
                  <i class="ill-2"></i>
                </div>
              </div>
              <div class="post">
                <div class="p-l">
                  <router-link title="有谁注意过《摔跤吧！爸爸》中，不吃鸡肉的小细节？" :to="{path: 'self'}" class="p-t">有谁注意过《摔跤吧！爸爸》中，不吃鸡肉的小细节？</router-link>
                  <div class="p-i">
                    <div class="p-m">
                      <div class="por"></div>
                      <div class="m-n">大王</div>
                    </div>
                    <div class="com">240评论</div>
                  </div>
                </div>
                <div class="p-r">
                  <i class="ill-3"></i>
                </div>
              </div>
            </div>
            <div class="lines">
              <div class="l"></div>
              <div class="l"></div>
              <div class="l"></div>
            </div>
            <div class="f-l">
              <div class="post">
                <div class="p-l">
                  <router-link :to="{path: 'self'}" class="p-t">一篇可能好玩的霓虹国旅行指南—东京篇</router-link>
                  <div class="p-i">
                    <div class="p-m">
                      <div class="por"></div>
                      <div class="m-n">黄小琳</div>
                    </div>
                    <div class="com">200评论</div>
                  </div>
                </div>
                <div class="p-r">
                  <i class="ill-4"></i>
                </div>
              </div>
              <div class="post">
                <div class="p-l">
                  <router-link :to="{path: 'self'}" class="p-t">下一位走向世界的澳洲超模就是她？！华裔粉发少女</router-link>
                  <div class="p-i">
                    <div class="p-m">
                      <div class="por"></div>
                      <div class="m-n">黄小琳</div>
                    </div>
                    <div class="com">200评论</div>
                  </div>
                </div>
                <div class="p-r">
                  <i class="ill-5"></i>
                </div>
              </div>
              <div class="post">
                <div class="p-l">
                  <router-link :to="{path: 'self'}" class="p-t">回到唐朝需要准备几件衣服？—唐代日常男装的层次与礼仪这是一个美好又是一个时代阿凡达面对魔界的</router-link>
                  <div class="p-i">
                    <div class="p-m">
                      <div class="por"></div>
                      <div class="m-n">黄小琳</div>
                    </div>
                    <div class="com">200评论</div>
                  </div>
                </div>
                <div class="p-r">
                  <i class="ill-6"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 文章 -->
        <div class="pg-rt">
          <div class="atc-top">
            <div class="rt">
              <i class="hot-title"></i>
              <p>热门文章</p>
            </div>
            <a href="http://ks.netease.com/index" target="_blank" class="more-arrow">
              <div class="m">更多</div>
              <i class="right-arrow"></i>
            </a>
          </div>
          <div class="atc-cnt">
            <div class="article">
              <router-link :to="{path: 'self'}" title="网易严选后端大促架构设计" class="name">网易严选后端大促架构设计</router-link>
              <div class="from">
                <i class="list-dot"></i>
                <p>王余松 服务端架构设计</p>
              </div>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="海底捞的危机公关并不是一个好案例！" class="name">海底捞的危机公关并不是一个好案例！</router-link>
              <div class="from">
                <i class="list-dot"></i>
                <p>殷浩然 网易营销人</p>
              </div>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="教育产品通用化架构实践之路" class="name">教育产品通用化架构实践之路</router-link>
              <div class="from">
                <i class="list-dot"></i>
                <p>蔡剑飞 WEB前端技术</p>
              </div>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="桌面研究：如何快速分析功能和产品" class="name">桌面研究：如何快速分析功能和产品</router-link>
              <div class="from">
                <i class="list-dot"></i>
                <p>黄媛 网易美学</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 制度、培训、导航 -->
      <section class="cnt-3">
        <!-- 制度 -->
        <div class="pg-lt">
          <div class="sys-top">
            <div class="rt">
              <i class="sys-search"></i>
              <p>制度查询</p>
            </div>
            <router-link :to="{path: 'self'}" class="more-arrow">
              <div class="m">更多</div>
              <i class="right-arrow"></i>
            </router-link>
          </div>
          <div class="sys-cnt">
            <div class="article">
              <router-link :to="{path: 'self'}" title="[行政] 信用贷款合作方案" class="title">[行政] 信用贷款合作方案</router-link>
              <p class="date">2018.01.08</p>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="[HR] 2017年杭州市公共租赁房流程指引方针" class="title">[HR] 2017年杭州市公共租赁房流程指引方针</router-link>
              <p class="date">2018.01.07</p>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="[HR] 2017年度员工健康体检通知-杭州上海爱康国宾" class="title">[HR] 2017年度员工健康体检通知-杭州上海爱康国宾</router-link>
              <p class="date">2018.01.05</p>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="[行政] 健康福利、免费提供挂号就医绿色通道" class="title">[行政] 健康福利、免费提供挂号就医绿色通道</router-link>
              <p class="date">2018.12.30</p>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="[IT] 2017年度资产审查确认" class="title">[IT] 2017年度资产审查确认</router-link>
              <p class="date">2018.12.28</p>
            </div>
          </div>
        </div>
        <!-- 培训 -->
        <div class="pg-md">
          <div class="train-top">
            <div class="rt">
              <i class="train-hot"></i>
              <p>热门培训</p>
            </div>
            <a href="http://salon.netease.com/index.html" target="_blank" class="more-arrow">
              <div class="m">更多</div>
              <i class="right-arrow"></i>
            </a>
          </div>
          <div class="atc-cnt">
            <div class="article">
              <router-link :to="{path: 'self'}" title="问题分析与解决201801A" class="name">问题分析与解决201801A</router-link>
              <div class="date">
                <i class="list-dot"></i>
                <p>2018/01/09 13:00—17:00</p>
              </div>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="[邮料课堂]近一点聊品牌201712A" class="name">[邮料课堂]近一点聊品牌201712A</router-link>
              <div class="date">
                <i class="list-dot"></i>
                <p>2018/01/08 19:00—20:00</p>
              </div>
            </div>
            <div class="article">
              <router-link :to="{path: 'self'}" title="Ambaria大数据平台快速搭建201801A" class="name">Ambaria大数据平台快速搭建201801A</router-link>
              <div class="date">
                <i class="list-dot"></i>
                <p>2018/01/07 19:00—20:00</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 平台导航 -->
        <div class="pg-rt">
          <div class="nav-top">
            <div class="rt">
              <i class="plat-nav"></i>
              <p>平台导航</p>
            </div>
            <router-link :to="{path: 'self'}" class="more-arrow">
              <div class="m">更多</div>
              <i class="right-arrow"></i>
            </router-link>
          </div>
          <div class="nav-tabs">
            <Tabs value="HR">
              <TabPane label="HR服务" name="HR">
                <router-link :to="{path: 'self'}" class="item">
                  <i class="list-dot"></i>
                  <span class="list">OKR</span>
                </router-link>
                <router-link :to="{path: 'self'}" class="item">
                  <i class="list-dot"></i>
                  <span class="list">沙龙学习</span>
                </router-link>
                <router-link :to="{path: 'self'}" class="item">
                  <i class="list-dot"></i>
                  <span class="list">DAHR</span>
                </router-link>
                <router-link :to="{path: 'self'}" class="item">
                  <i class="list-dot"></i>
                  <span class="list">任职资格</span>
                </router-link>
                <router-link :to="{path: 'self'}" class="item">
                  <i class="list-dot"></i>
                  <span class="list">实践者社区</span>
                </router-link>
                <router-link :to="{path: 'self'}" class="item">
                  <i class="list-dot"></i>
                  <span class="list">绩效管理</span>
                </router-link>
              </TabPane>
              <TabPane label="行政服务" name="administration">行政服务</TabPane>
              <TabPane label="IT服务" name="IT">IT服务</TabPane>
              <TabPane label="协同" name="coordination">协同</TabPane>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'index',
  data () {
    return {
      carouselSet: {
        value: 0,
        autoplay: true,
        loop: true,
        arrow: 'hover',
        radius: true,
        trigger: 'hover'
      }
    }
  },
  computed: {
    ...mapGetters([
      'loginUser',
      'portraitUrl',
      'workDays'
    ])
  }
}
</script>

<style lang="scss">
.home-page-container {
  background-color: #f0f0f0;
  .main-content {
    width: 1190px;
    margin: 20px auto 0;
    .cnt-1,
    .cnt-2,
    .cnt-3 {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .pg-lt,
    .pg-rt,
    .pg-md {
      background-color: #ffffff;
    }
    // 以下公用部分样式
    .more-arrow {
      .m {
        font-size: 12px;
        color: #999999;
        display: inline-block;
        margin-right: 5px;
      }
      .right-arrow {
        background: url("../images/home/right-arrow.png") no-repeat;
        width: 6px;
        height: 11px;
        display: inline-block;
      }
    }
    .list-dot {
      background: url("../images/home/list-dot.png") no-repeat;
      width: 4px;
      height: 4px;
      display: inline-block;
      margin-right: 4px;
    }
    //淡入
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    //文章active
    $link-active: #E3282D;

    //申请和个人信息
    .cnt-1 {
      //轮播和申请
      .pg-lt {
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 870px;
        animation: fade-in 1s;
        .main-top {
          height: 204px;
          width: 870px;
          background-color: #fff;
          box-shadow: 0 2px 8px 0 rgba(225, 225, 225, 0.5);
          .ivu-carousel-dots {
            .ivu-carousel-active {
              button {
                background: #E3282D;
                border-radius: 8px;
                width: 12px;
                height: 4px;
              }
            }
            .radius {
              width: 4px;
              height: 4px;
            }
          }
          //测试图片
          .test-carousel {
            background: url("../images/test-carousel.png") no-repeat;
            cursor: pointer;
            width: 870px;
            height: 204px;
            display: inline-block;
          }
        }
        // 申请
        .main-bottom {
          height: 88px;
          display: flex;
          align-items: center;
          width: 870px;
          background-color: #fff;
          box-shadow: 0 2px 8px 0 rgba(225, 225, 225, 0.5);
          .apply-items {
            display: flex;
            justify-content: space-around;
            width: 846px;
            .apply {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              width: 142px;
              height: 88px;
              transition: all 0.4s;
              flex-direction: column;
              &:hover {
                background-color: #F5F5F5;
              }
              .leave {
                background: url("../images/home/leave.png") no-repeat;
                width: 46px;
                height: 46px;
                display: inline-block;
              }
              .income {
                background: url("../images/home/income.png") no-repeat;
                width: 46px;
                height: 46px;
                display: inline-block;
              }
              .interview {
                background: url("../images/home/interview.png") no-repeat;
                width: 46px;
                height: 46px;
                display: inline-block;
              }
              .asset {
                background: url("../images/home/asset.png") no-repeat;
                width: 46px;
                height: 46px;
                display: inline-block;
              }
              .retroactive {
                background: url("../images/home/retroactive.png") no-repeat;
                width: 46px;
                height: 46px;
                display: inline-block;
              }
              .vpn {
                background: url("../images/home/vpn.png") no-repeat;
                width: 46px;
                height: 46px;
                display: inline-block;
              }
              .leave {
                background: url("../images/home/leave.png") no-repeat;
                width: 46px;
                height: 46px;
                display: inline-block;
              }
              .t {
                font-size: 12px;
                color: #333333;
                margin-top: 6px;
              }
            }
          }
          .apply-more {
            background: #fafafa;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 88px;
            &:hover {
              background-color: #F5F5F5;
            }
            .more {
              background: url("../images/home/apply-more.png") no-repeat;
              width: 13px;
              height: 13px;
              display: inline-block;
            }
            .t {
              font-size: 12px;
              color: #999999;
            }
          }
        }
      }
      //个人头像和待办事宜
      .pg-rt {
        height: 302px;
        width: 310px;
        animation: fade-in 1s;
        // 个人
        .person {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 214px;
          .user-portrait {
            width: 80px;
            height: 80px;
            line-height: 80px;
            border-radius: 40px;
            overflow: hidden;
            text-align: center;
            img {
              max-width: 80px;
              max-height: 80px;
              display: inline-block;
              vertical-align: middle;
            }
          }

          .name {
            font-size: 16px;
            color: #333333;
            margin-top: 9px;
          }
          .signature {
            font-size: 12px;
            color: #999999;
          }
        }
        // 事宜
        .matters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fafafa;
          height: 88px;
          .item {
            transition: all 0.4s;
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100px;
            &:hover {
              .num {
                color: $link-active;
              }
            }
            .num {
              font-size: 24px;
              color: #333333;
              line-height: 28px;
            }
            .m {
              font-size: 12px;
              color: #999999;
            }
          }
          .col {
            border: 0.5px solid #d9d9d9;
            width: 1px;
            height: 39px;
          }
        }
      }
    }
    //论坛和热门文章
    .cnt-2 {
      //论坛
      .pg-lt {
        height: 252px;
        width: 870px;
        box-shadow: 0 2px 8px 0 rgba(225, 225, 225, 0.5);
        padding: 12px 20px;
        animation: fade-in 2s;
        .fm-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          .f-l {
            display: flex;
            align-items: center;
            .forum-i {
              background: url("../images/home/forum.png") no-repeat;
              width: 16px;
              height: 17px;
              display: inline-block;
            }
            .t {
              font-size: 16px;
              color: #333333;
              display: inline-block;
              margin-left: 5px;
            }
          }
        }
        // 论坛帖子
        .fm-cnt {
          display: flex;
          flex-direction: column;
          .f-l {
            display: flex;
            justify-content: space-between;
            .post {
              display: flex;
              justify-content: space-around;
              width: 264px;
              .p-l {
                width: 191px;
                height: 60px;
                .p-t {
                  font-size: 14px;
                  color: #333333;
                  text-align: justify;
                  line-height: 18px;
                  height: 36px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  &:hover {
                    color: $link-active;
                  }
                }
                .p-i {
                  display: flex;
                  justify-content: space-between;
                  margin-top: 8px;
                  .p-m {
                    display: flex;
                    align-items: center;
                    .por {
                      background: url("../images/home/test-p-1.png") no-repeat;
                      width: 16px;
                      height: 16px;
                    }
                    .m-n {
                      font-size: 12px;
                      color: #999999;
                      margin-left: 5px;
                    }
                  }
                  .com {
                    font-size: 12px;
                    color: #999999;
                  }
                }
              }
              .p-r {
                .ill-1 {
                  background: url("../images/home/test-post-1.png") no-repeat;
                  width: 60px;
                  height: 60px;
                  display: inline-block;
                }
                .ill-2 {
                  background: url("../images/home/test-post-2.png") no-repeat;
                  width: 60px;
                  height: 60px;
                  display: inline-block;
                }
                .ill-3 {
                  background: url("../images/home/test-post-3.png") no-repeat;
                  width: 60px;
                  height: 60px;
                  display: inline-block;
                }
                .ill-4 {
                  background: url("../images/home/test-post-4.png") no-repeat;
                  width: 60px;
                  height: 60px;
                  display: inline-block;
                }
                .ill-5 {
                  background: url("../images/home/test-post-5.png") no-repeat;
                  width: 60px;
                  height: 60px;
                  display: inline-block;
                }
                .ill-6 {
                  background: url("../images/home/test-post-6.png") no-repeat;
                  width: 60px;
                  height: 60px;
                  display: inline-block;
                }
              }
            }
          }
          .lines {
            display: flex;
            justify-content: space-between;
            .l {
              opacity: 0.5;
              border: 1px solid #dedede;
              height: 1px;
              margin: 20px 0;
              width: 263px;
            }
          }
        }
      }
      //热门文章
      .pg-rt {
        box-shadow: 0 2px 8px 0 rgba(225, 225, 225, 0.5);
        width: 310px;
        flex-direction: column;
        padding: 18px 20px;
        height: 252px;
        animation: fade-in 2s;
        .atc-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .rt {
            display: flex;
            align-items: center;
            .hot-title {
              background: url("../images/home/hotpaper.png") no-repeat;
              width: 20px;
              height: 20px;
              display: inline-block;
            }
            p {
              font-size: 16px;
              color: #333333;
              display: inline-block;
              margin-left: 5px;
            }
          }
        }
        .atc-cnt {
          .article {
            margin-bottom: 12px;
            .name {
              color: #333333;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              &:hover {
                color: $link-active;
              }
            }
            .from {
              display: flex;
              align-items: center;
              p {
                font-size: 12px;
                color: #999999;
                display: inline-block;
              }
            }
          }
        }
      }
    }
    //制度查询和平台导航
    .cnt-3 {
      height: 220px;
      justify-content: space-between;
      margin-bottom: 0;
      //制度
      .pg-lt {
        width: 550px;
        padding: 18px 20px;
        animation: fade-in 3s;
        .sys-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .rt {
            display: flex;
            align-items: center;
            .sys-search {
              background: url("../images/home/system.png") no-repeat;
              width: 20px;
              height: 20px;
              display: inline-block;
            }
            p {
              font-size: 16px;
              color: #333333;
              display: inline-block;
              margin-left: 5px;
            }
          }
        }
        .sys-cnt {
          .article {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            .title {
              font-size: 14px;
              color: #333333;
              width: 420px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &:hover {
                color: $link-active;
              }
            }
            .date {
              font-size: 12px;
              color: #999999;
            }
          }
        }
      }
      //培训
      .pg-md {
        width: 310px;
        padding: 18px 20px;
        animation: fade-in 3.5s;
        .train-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .rt {
            display: flex;
            align-items: center;
            .train-hot {
              background: url("../images/home/train.png") no-repeat;
              width: 20px;
              height: 20px;
              display: inline-block;
            }
            p {
              font-size: 16px;
              color: #333333;
              display: inline-block;
              margin-left: 5px;
            }
          }
        }
        .atc-cnt {
          .article {
            margin-bottom: 17px;
            .name {
              color: #333333;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              &:hover {
                color: $link-active;
              }
            }
            .date {
              display: flex;
              align-items: center;
              p {
                font-size: 12px;
                color: #999999;
                display: inline-block;
              }
            }
          }
        }
      }
      //导航
      .pg-rt {
        width: 310px;
        padding: 18px 20px;
        animation: fade-in 4s;
        .nav-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .rt {
            display: flex;
            align-items: center;
            .plat-nav {
              background: url("../images/home/navigation.png") no-repeat;
              width: 20px;
              height: 20px;
              display: inline-block;
            }
            p {
              font-size: 16px;
              color: #333333;
              display: inline-block;
              margin-left: 5px;
            }
          }
        }
        .nav-tabs {
          .ivu-tabs {
            // 左右prev,next
            .ivu-tabs-nav-prev,
            .ivu-tabs-nav-next {
              display: none;
              margin-bottom: 30px;
            }
            // Tab bar
            .ivu-tabs-bar {
              border: none;
              //tabs的nav
              .ivu-tabs-nav-wrap {
                padding: 0;
              }
              // 红色下栏线
              .ivu-tabs-ink-bar {
                color: #E3282D;
                top: 31px;
                width: 48px !important;
                height: 2px;
              }
              // Tab页的每栏
              .ivu-tabs-tab {
                width: 56px;
                padding: 9px 6px 8px 0px;
                text-align: center;
                &:hover {
                  color: #333333;
                }
              }
              .ivu-tabs-tab-active {
                color: #333333;
              }
            }
          }
        }
        //标签页内容
        .ivu-tabs-tabpane {
          display: flex;
          flex-wrap: wrap;
          .item {
            display: flex;
            align-items: center;
            margin: 13px 12px 0 0;
            width: 76px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333333;
            .list {
              font-size: 12px;
            }
            &:hover {
              color: $link-active !important;
            }
          }
        }
      }
    }
  }
}
</style>

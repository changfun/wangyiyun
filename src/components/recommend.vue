<template>
  <div class="content">
    <el-header class="recommend-header" style="height:286px">
      <div class="blur-container">
        <img
          v-if="bannerImgList[bannerIndex]"
          :src="bannerImgList[bannerIndex].pic"
          alt=""
        />
      </div>
      <el-carousel
        class="slider drag"
        :interval="4000"
        arrow="always"
        @change="change"
        trigger="click"
      >
        <el-carousel-item v-for="item in bannerImgList" :key="item.targetId">
          <img :src="item.pic" />
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <el-main class="recommend-main">
      <div class="content">
        <div class="left">
          <div class="hot-recommend">
            <div class="nav">
              <div class="tit">
                <span class="roundDot"><span class="dot"></span></span>热门推荐
              </div>
              <ul>
                <li><a href="#">华语</a></li>
                <li>|</li>
                <li><a href="#">流行</a></li>
                <li>|</li>
                <li><a href="#">摇滚</a></li>
                <li>|</li>
                <li><a href="#">民谣</a></li>
                <li>|</li>
                <li><a href="#">电子</a></li>
              </ul>
              <div class="more"><a href="#">更多</a></div>
            </div>
          </div>
          <div class="album-content">
            <ul>
              <li v-for="(item, index) in recommentSongSheet" :key="index">
                <div class="album-cover">
                  <a href="#"></a>
                  <img :src="item.picUrl" alt="" />
                  <div class="album-player">
                    <span class="erji-text"
                      ><span class="iconfont icon-erji"></span>22万</span
                    ><span class="iconfont icon-bofang"><a href="#"></a></span>
                  </div>
                </div>
                <a href="#" class="album-name">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div class="login">
            <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <div class="login-btn"><a href="#">用户登录</a></div>
          </div>
          <div class="singer-content">
            <div class="tit">
              <span>入驻歌手</span>
              <span class="more-singers"><a href="#">查看全部></a></span>
            </div>
            <div class="singer-list">
              <ul>
                <li>
                  <a href="">
                    <div class="singer-item-left"><img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="" /></div>
                    <div class="singer-item-right">
                      <p class="singer-name">张惠妹aMEI</p>
                      <p class="singer-desc">台湾歌手张惠妹</p>
                    </div></a
                  >
                </li>
                <li>
                  <a href="">
                    <div class="singer-item-left"><img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="" /></div>
                    <div class="singer-item-right">
                      <p class="singer-name">张惠妹aMEI</p>
                      <p class="singer-desc">台湾歌手张惠妹</p>
                    </div></a
                  >
                </li>
                <li>
                  <a href="">
                    <div class="singer-item-left"><img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="" /></div>
                    <div class="singer-item-right">
                      <p class="singer-name">张惠妹aMEI</p>
                      <p class="singer-desc">台湾歌手张惠妹</p>
                    </div></a
                  >
                </li>
                <li>
                  <a href="">
                    <div class="singer-item-left"><img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="" /></div>
                    <div class="singer-item-right">
                      <p class="singer-name">张惠妹aMEI</p>
                      <p class="singer-desc">台湾歌手张惠妹</p>
                    </div></a
                  >
                </li>
                <li>
                  <a href="">
                    <div class="singer-item-left"><img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt="" /></div>
                    <div class="singer-item-right">
                      <p class="singer-name">张惠妹aMEI</p>
                      <p class="singer-desc">台湾歌手张惠妹</p>
                    </div></a
                  >
                </li>
              </ul>
            </div>
            <div class="tobe-singer-btn"><a href="https://music.163.com/nmusician/web/index#/" target="_blank">申请成为网易音乐人</a></div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImgList: [],
      recommentSongSheet: [],
      bannerIndex: 0,
    };
  },
  methods: {
    change(index) {
      this.bannerIndex = index;
    },
  },
  created() {

      //获取首页banner轮播图
    this.$axios
      .get(`https://autumnfish.cn/banner?type=1`, { withCredentials: true })
      .then((res) => {
        this.bannerImgList = res.data.banners;
      });
      //获取首页推荐歌单
    this.$axios
      .get(`https://autumnfish.cn/personalized`, { withCredentials: true })
      .then((res) => {
        this.recommentSongSheet = res.data.result;
      });
      //获取入驻歌手信息
      this.$axios
      .get(`https://autumnfish.cn/toplist/detail`, { withCredentials: true })
      .then((res) => {
        // this.recommentSongSheet = res.data.result;
        console.log(res);
        
      });
  },
};
</script>

<style lang="less">
.content {
  .el-header.recommend-header {
    position: relative;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 1;

    .blur-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(1.2);
      filter: blur(90px);
      box-sizing: border-box;
      z-index: 2;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .slider {
      position: absolute;
      width: 980px;
      height: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 11;
      .el-carousel__container {
        height: 286px;
        .el-carousel__item img {
          width: 100%;
          height: 100%;
        }
        .el-carousel__arrow {
          position: fixed;
          width: 36px;
          height: 64px;
          border-radius: 0;
          background: none;
          &:hover {
            background-color: rgba(0, 0, 0, 0.4);
          }
          i {
            font-size: 40px;
          }
        }
      }
      .el-carousel__indicator.el-carousel__indicator--horizontal {
        padding: 8px;
        &.is-active button {
          background-color: #da0000;
        }
        &:hover button {
          background-color: #da0000;
        }
        button {
          width: 6px;
          height: 6px;
          border-radius: 3px;
        }
      }
    }
  }
  .el-main.recommend-main {
    .content {
      display: flex;
      margin: 0 auto;
      width: 980px;

      .left {
        width: 729px;
        height: 100%;
        border-left: 1px solid #d3d3d3;
        box-sizing: border-box;

        .hot-recommend {
          padding: 20px 20px 0 20px;
          width: 100%;
          box-sizing: border-box;
          .nav {
            display: flex;
            align-items: center;
            border-bottom: 2px solid #d70000;
            width: 100%;
            height: 40px;
            .tit {
              display: flex;
              margin-right: 10px;
              align-items: center;
              font-size: 18px;
              .roundDot {
                display: flex;
                margin: 10px;
                align-items: center;
                justify-content: center;
                width: 14px;
                height: 14px;
                border-radius: 7px;
                background-color: #d70000;
                .dot {
                  display: block;
                  width: 6px;
                  height: 6px;
                  border-radius: 3px;
                  background-color: #fff;
                }
              }
            }
            ul {
              display: flex;
              li {
                font-size: 12px;
                font-weight: bold;
                color: #ccc;
                a {
                  padding: 12px 14px;
                  font-size: 12px;
                  font-weight: normal;
                  color: #666;
                }
              }
            }
            .more {
              margin-left: 240px;
              a {
                font-size: 12px;
                color: #555;
              }
            }
          }
        }
        .album-content {
          padding-top: 20px;
          width: 100%;
          ul {
            display: flex;
            flex-flow: row wrap;
            li {
              margin: 0 20px 20px;
              width: 142px;
              height: 210px;

              .album-cover {
                position: relative;
                width: 100%;
                height: 142px;
                border: 1px solid #ccc;
                box-sizing: border-box;
                a {
                  position: absolute;
                  width: 140px;
                  height: 114px;
                }

                img {
                  width: 140px;
                  height: 140px;
                }
                .album-player {
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 28px;
                  background-color: rgba(0, 0, 0, 0.5);
                  border-top: 1px solid #444;
                  border-bottom: 1px solid #444;
                  box-sizing: border-box;
                  span {
                    color: #ccc;
                    font-size: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                  }
                  .erji-text {
                    position: absolute;
                    left: 10px;
                    .icon-erji {
                      font-size: 14px;
                      margin-right: 4px;
                    }
                  }
                  .icon-bofang {
                    position: absolute;
                    right: 10px;
                    font-size: 16px;
                    a {
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      left: 0;
                      top: 0;
                    }
                  }
                }
              }

              .album-name {
                width: 142px;
                color: #000;
                font-size: 14px;
              }
            }
          }
        }
      }
      .right {
        width: 251px;
        border: 1px solid #ccc;
        border-top: none;
        box-sizing: border-box;
        .login {
          padding: 20px;
          padding-bottom: 0px;
          width: 100%;
          height: 122px;
          background-color: #fcfcfc;
          box-sizing: border-box;
          box-shadow: 0px -20px 30px 20px #e5e5e5 inset;
          p {
            width: 100%;
            color: #666;
            font-size: 12px;
          }
          .login-btn {
            margin: 20px auto;
            width: 102px;
            height: 32px;
            background-color: #d80000;
            border-radius: 5px;
            border: 1px solid #b00000;
            box-shadow: 0px 0px 10px #d00000 inset;
            &:hover {
              background-color: #ff000d;
              box-shadow: 0px 0px 5px #d00000 inset;
            }
            a {
              display: block;
              width: 100%;
              height: 100%;
              text-align: center;
              line-height: 32px;
              color: #fff;
              font-size: 12px;
            }
          }
        }
        .singer-content {
            position: relative;
          width: 100%;
          height: 486px;
          .tit {
            margin: 8px auto 22px;
            width: 210px;
            height: 30px;
            line-height: 30px;
            color: #333;
            font-size: 12px;
            font-weight: bold;
            border-bottom: 1px solid #ccc;
            .more-singers {
              margin-left: 104px;
              a {
                color: #555;
                font-weight: normal;
              }
            }
          }
          .singer-list {
            margin: 0 auto;
            width: 210px;
            li {
                margin-top: 14px;
              width: 100%;
              height: 62px;
              a {
                display: flex;
                width: 100%;
                height: 100%;
                .singer-item-left {
                  width: 64px;
                  height: 100%;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .singer-item-right {
                  padding: 5px 0px 5px 10px;
                  width: 146px;
                  height: 100%;
                  border: 1px solid #ccc;
                  border-left: none;
                  box-sizing: border-box;

                  p {
                    width: 100%;
                    height: 24px;
                    line-height: 24px;
                    &.singer-name {
                      color: #333;
                      font-size: 14px;
                      font-weight: bold;
                    }
                    &.singer-desc {
                      color: #555;
                      font-size: 12px;
                    }
                  }
                }
              }
            }
          }
          .tobe-singer-btn {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 22px;
            width: 210px;
            height: 30px;
            line-height: 30px;
            text-align: center;
             
            background-color: #f6f6f6;
            font-size: 12px;
            font-weight: bold;
            border-radius: 5px;
            border: 1px solid #bbbbbb;
            a {
                display: block;
                width: 100%;
                height: 100%;
                color: #333;
            }
          }
        }
      }
    }
  }
}
</style>

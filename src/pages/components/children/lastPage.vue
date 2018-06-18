<template>
<div class="basement">
    <div class="lastTitle">联系方式/社交账号</div>
    <ul class="content" ref="textContent">
      <li><p class="ptext">邮箱:cymdidi@sina.com</p></li>
      <li><p class="ptext">QQ: 583602732</p></li>
      <li><p class="ptext">手机:18523482459</p></li>
      <li class="socialmedia">
        <a href="https://github.com/Ekida1"  target="_blank"><img class="socialmediaicon github" v-show="turnOnLastAnimation" key="github" src="/api/call_github_27ab678.png" alt=""></a>
        <a href="https://www.zhihu.com/people/chang-yi-ming-18/activities" target="_blank"><img class="socialmediaicon zhihu" v-show="turnOnLastAnimation"  key="zhihu" src="/api/call_zhihu_4567c70.png" alt=""></a>
        <a href="https://weibo.com/coolhi/" target="_blank"><img class="socialmediaicon weibo" v-show="turnOnLastAnimation" key="weibo" src="/api/call_weibo_53e7ffa.png" alt=""></a>
        <img class="socialmediaicon wechat" @click="wechatDialogVisible = true" v-show="turnOnLastAnimation" key="wechat" src="/api/call_wx_ac6ac72.png" alt="">
      </li>
      <li class="footBtnContainer">
        <a href="/api/EkidaResume.docx" download="EkidaResume" class="fotBtn downlodaResume" v-show="turnOnLastAnimation">
       <i class="el-icon-download"></i>下载简历
        </a>
        <div class="fotBtn phoneCheck" @click="phoneCheckDialogVisible = true" v-show="turnOnLastAnimation"><i class="el-icon-mobile-phone"></i>手机查看</div>
      </li>
    </ul>
    <img class="resumeFooter" src="/api/bluefooter.png" alt="">
    <!-- <div class="resumeFooter"></div> -->
        <el-dialog :visible.sync="wechatDialogVisible" width="60%" lock-scroll append-to-body>
      <span slot="title" class="dialog-title">{{wechatdialogTitle}}</span>
      <div class="dialogContent">
        <img class="wechatQRcode" src="/api/wechatfriend.jpg" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="wechatDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>


        <el-dialog :visible.sync="phoneCheckDialogVisible" width="60%" lock-scroll append-to-body>
      <span slot="title" class="dialog-title">{{wechatdialogTitle}}</span>
      <div class="dialogContent">
        <img class="phoneQRcode" src="/api/wechatfriend.jpg" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="phoneCheckDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
</div>
</template>
<script>
export default {
  name: "LastPage",
  props: {
    turnOnLastAnimation: Boolean
  },
  data() {
    return {
      wechatdialogTitle: "扫一扫加好友",
      wechatDialogVisible: false,
      wechatdialogTitle: "扫一扫手机查看",
      phoneCheckDialogVisible: false
    };
  }
};
</script>
<style lang="stylus" scoped>
.basement {
  width: 100%;
  height: 100vh;
  padding: 50px;
  overflow: hidden;
  box-sizing: border-box;

  .lastTitle {
    position: absolute;
    top: 120px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }

  .content {
    position: absolute;
    top: 200px;
    right: 0;
    left: 0;
    margin: 0 auto;
    padding: 0 12px;
    text-align: center;
    max-width: 580px;
    min-width: 300px;
    color: #fff;

    .ptext {
      // position: relative;
      // left: 140px;
      font-size: 20px;
      height: 40px;
      line-height: 40px;
    }

    .socialmedia {
      height: 74px;

      .socialmediaicon {
        width: 9%;
        padding: 10px 10px;
        animation: bounceUp 700ms linear;
        -webkit-animation: bounceY 700ms linear;

        @keyframes bounceY {
          0% {
            transform: translateY(0);
          }

          15% {
            transform: translateY(-20px);
          }

          30% {
            transform: translateY(0);
          }

          45% {
            transform: translateY(7px);
          }

          60% {
            transform: translateY(0);
          }

          75% {
            transform: translateY(2px);
          }

          100% {
            transform: translateY(0);
          }
        }
      }

      .zhihu {
        animation-delay: 500ms;
        -webkit-animation-delay: 500ms;
      }

      .weibo {
        animation-delay: 1000ms;
        -webkit-animation-delay: 1000ms;
      }

      .wechat {
        cursor: pointer;
        animation-delay: 1500ms;
        -webkit-animation-delay: 1500ms;
      }
    }

    .footBtnContainer {
      position: relative;
      left: 23%;
      margin-top: 10px;

      .fotBtn {
        float: left;
        width: 120px;
        height: 35px;
        line-height: 35px;
        font-size: 15px;
        color: #fff;
        border-radius: 3px;
        padding: 0 10px;
        margin: 0 10px;
        cursor: pointer;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
      }

      .fotBtn:hover {
        opacity: 0.8;
      }

      .downlodaResume {
        background: #0f7C9D;
        animation: bounceUp 700ms linear 2000ms;
        -webkit-animation: bounceX 700ms linear 2000ms;
      }

      .phoneCheck {
        background: #009688;
        animation: bounceUp 700ms linear 2500ms;
        -webkit-animation: bounceX 700ms linear 2500ms;
      }

      @keyframes bounceX {
        0% {
          transform: translateX(-20PX);
        }

        25% {
          transform: translateX(20px);
        }

        50% {
          transform: translateX(10px);
        }

        75% {
          transform: translateX(10x);
        }

        100% {
          transform: translateX(0);
        }
      }
    }
  }

  .resumeFooter {
    position: absolute;
    bottom: 8%;
    left: 0;
    right: 0;
    width: 100%;
    height: 10%;
    // background: url('/api/bluefooter.png') repeat-x 0 0;
    animation: Xscroll 10000ms linear infinite alternate;
    -webkit-animation: Xscroll 10000ms linear infinite alternate;

    @keyframes Xscroll {
      0% {
        transform: translateX(-50px);
      }

      100% {
        transform: translateX(100px);
      }
    }
  }
}

.dialogContent {
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;

  .wechatQRcode {
    width: 50%;
  }

  .phoneQRcode {
    width: 50%;
  }
}
</style>


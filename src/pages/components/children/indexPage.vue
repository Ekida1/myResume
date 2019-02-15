<template>
  <div class="basement">
    <div class="profileContainer">
      <img class="profile" src="/static/profile.jpg" alt="">
    </div>
    <transition name="fadein" appear enter-active-class="animated fadeInDown" appear-active-class="animated fadeInDown">
      <div class="helloName" v-show="turnOnIndexAnimation">Aloha!我叫常益铭</div>
    </transition>
    <transition-group name="fadeinup" appear enter-active-class="animated fadeInUp" appear-active-class="animated fadeInUp">
      <div class="helloSaying" key="helloSaying" v-show="turnOnIndexAnimation">一腔热血的激情 · 一个像素的执着</div>
      <div class="careePositon" key="careePositon" v-show="turnOnIndexAnimation">一个爱设计的前端工程师</div>
    </transition-group>
    <el-button type="text" class="readmeBtn" @click="dialogVisible = true"><span class="btnText">ReadMe.md</span></el-button>

    <el-dialog :visible.sync="dialogVisible" custom-class="fileModal" :lock-scroll="true" :modal-append-to-body="false">
      <span slot="title" class="dialog-title">基本资料</span>
      <div class="dialogContent">
        <swiper :options="swiperOption" ref="pageSwiper">
          <swiper-slide>
            <img class="cartoon" src="/static/cartoon.png" alt="">
            <p>姓名:&nbsp;常益铭</p>
            <p>年龄:&nbsp;23岁</p>
            <p>工作经验:&nbsp;半年</p>
            <p>毕业院校:&nbsp;重庆邮电大学</p>
            <p>学历:&nbsp;本科</p>
            <p>应聘职位:&nbsp;WEB前端工程师</p>
          </swiper-slide>
          <swiper-slide>
            <p>●主修技能：</p>
            <p>语言: html, css, less, javaScript(ES5, ES6)</p>
            <p>框架: jQuery, AngularJS（1.5版本）, Vue2.0 , 初学D3.js, E-chart，Bootstrap</p>
            <p>工具: VSCode, Git，Gulp等</p>
          </swiper-slide>
          <div class="swiper-button-prev" slot="pagination"></div>
          <div class="swiper-button-next" slot="pagination"></div>
        </swiper>

      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span> -->
    </el-dialog>

  </div>
</template>

<script>
import animate from "animate.css";
export default {
  name: "IndexPage",
  props: {
    turnOnIndexAnimation: Boolean
  },
  data() {
    return {
      dialogVisible: false,
      swiperOption: {
        // mousewheel: true,
        effect: "flip",
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.basement >>> .el-dialog__title {
  font-size: 25px;
}

.dialogContent >>> .swiper-button-prev {
  left: -50px;
}

.dialogContent >>> .swiper-button-next {
  right: -50px;
}

.basement >>> .fileModal {
  max-width: 90%;
  min-width: 40%;
  max-height: 60%;
}

.basement {
  width: 100%;
  height: 100vh;
  padding: 50px;
  overflow: hidden;
  box-sizing: border-box;

  .profileContainer {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    text-align: center;
    margin: 0 auto;

    .profile {
      width: 200px;
      height: 200px;
    }
  }

  .helloName {
    position: absolute;
    top: 300px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
    text-shadow: 1px 2px #7A378B, 2px 3px #0062B9;
  }

  .helloSaying {
    position: absolute;
    top: 350px;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 1.1em;
    margin: 0.5em 0 0.25em;
    color: #ADADAD;
  }

  .careePositon {
    position: absolute;
    top: 400px;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 22px;
    color: #fff;
  }

  .readmeBtn {
    position: absolute;
    top: 450px;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 150px;
    height: 40px;
    border-radius: 8px;
    line-height: 40px;
    text-align: center;
    background: #20B2AA;
    font-size: 0.4rem;
    letter-spacing: 0.5px;
    color: #fff;
    cursor: pointer;
    border: 1px solid #2b92d4;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    animation-timing-function: ease-in-out;
    animation-name: breathe;
    animation-duration: 2200ms;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-name: breathe;
    -webkit-animation-duration: 2200ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;

    @keyframes breathe {
      0% {
        opacity: 0.4;
        box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
      }

      100% {
        opacity: 1;
        border: 1px solid rgba(59, 235, 235, 1);
        box-shadow: 0 1px 30px rgba(59, 255, 255, 1);
      }
    }

    .btnText {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
  }
}

.dialog-title {
  font-size: 25px;
}

.dialogContent {
  margin: 0 50px;
  font-size: 15px;
  color: #0062B9;
  line-height: 55px;

  .cartoon {
    position: absolute;
    left: 75%;
    top: 0;
    margin-right: 30px;
    width: 120px;
    height: 120px;
  }
}

@media screen and (max-width: 720px) {
  .basement >>> .fileModal {
    width: 90%;
  }
}
</style>


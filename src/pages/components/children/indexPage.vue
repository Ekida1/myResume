<template>
  <div class="basement">
    <div class="profileContainer">
      <img class="profile" src="/static/profile.jpg" alt>
    </div>
    <transition
      name="fadein"
      appear
      enter-active-class="animated fadeInDown"
      appear-active-class="animated fadeInDown"
    >
      <div class="helloName" v-show="turnOnIndexAnimation">Aloha!我叫常益铭</div>
    </transition>
    <transition-group
      name="fadeinup"
      appear
      enter-active-class="animated fadeInUp"
      appear-active-class="animated fadeInUp"
    >
      <div class="helloSaying" key="helloSaying" v-show="turnOnIndexAnimation">一腔热血的激情 · 一个像素的执着</div>
      <div class="careePositon" key="careePositon" v-show="turnOnIndexAnimation">一个爱设计的前端工程师</div>
    </transition-group>
    <el-button type="text" class="readmeBtn" @click="handleCover">
      <span class="btnText">ReadMe.md</span>
    </el-button>
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
      swiperOption: {
        // mousewheel: true,
        effect: "flip",
        navigation: {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next"
        }
      }
    };
  },
  methods: {
    handleCover() {
      this.$emit("on-change-open");
    }
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

@media screen and (max-width: 720px) {
  .basement >>> .fileModal {
    width: 90%;
  }
}
</style>


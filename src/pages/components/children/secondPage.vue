<template>
  <div class="basement">
    <div class="secondTitle">技术专长</div>

    <ul class="labelGroups">
      <!-- <transition-group name="bounce" appear enter-active-class="animated fadeInDown" appear-active-class="animated fadeInDown"> -->
      <!-- v-show="turnOnSecondAnimation" -->
      <li
        class="skillLabel"
        :class="item.row"
        v-show="turnOnSecondAnimation"
        v-for="item in skillData"
        @click="showProgress(item.text,item.progress)"
        :key="item.key"
      >{{item.text}}</li>
    </ul>
    <transition
      name="flip"
      enter-active-class="animated flipInX"
      leave-active-class="animated flipOutX"
    >
      <section v-show="isProgressShow" class="progressSection">
        <div style="width:94px;position:relative;top:67px;font-size:25px">{{this.text}}</div>
        <el-progress type="circle" :width="168" :stroke-width="20" :percentage="this.percentage"></el-progress>
      </section>
    </transition>
    <img class="resumeFooter" src="/static/greenfooter.png" alt>
  </div>
</template>
<script>
// import animate from "animate.css";
export default {
  name: "SecondPage",
  props: {
    turnOnSecondAnimation: Boolean
  },
  data() {
    return {
      isProgressShow: false,
      percentage: 0, //进度条百分比
      text: "暂无",
      skillData: [
        {
          row: "sl1",
          key: "HTML",
          text: "HTML/HTML5",
          progress: "75"
        },
        {
          row: "sl1",
          key: "CSS",
          text: "CSS/CSS3",
          progress: "70"
        },
        {
          row: "sl1",
          key: "JavaScript",
          text: "JavaScript",
          progress: "80"
        },
        {
          row: "sl2",
          key: "AngularJs",
          text: "AngularJs",
          progress: "40"
        },
        {
          row: "sl2",
          key: "Vue",
          text: "VueJS",
          progress: "90"
        },
        {
          row: "sl2",
          key: "React",
          text: "React",
          progress: "30"
        },
        {
          row: "sl1",
          key: "Animate",
          text: "Animation",
          progress: "70"
        },
        {
          row: "sl1",
          key: "Github",
          text: "Git/Github",
          progress: "60"
        },
        {
          row: "sl2",
          key: "Gulp",
          text: "Gulp",
          progress: "30"
        },
        {
          row: "sl2",
          key: "Grunt",
          text: "Grunt",
          progress: "30"
        },
        {
          row: "sl1",
          key: "chart",
          text: "E-charts",
          progress: "90"
        }
      ]
    };
  },
  methods: {
    showProgress(text, progress) {
      this.isProgressShow = true;
      this.text = text;
      this.percentage = progress;
    }
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

  .secondTitle {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }

  .labelGroups {
    position: absolute;
    top: 150px;
    right: 0;
    left: 0;
    margin: 0 auto;
    padding: 0 20px;
    // width: 500px;
    max-width: 500px;
    min-width: 160px;

    .skillLabel {
      display: inline-block;
      width: auto;
      height: 40px;
      padding: 0 10px;
      margin: 5px;
      border-radius: 8px;
      line-height: 40px;
      text-align: center;
      background: #37DDC4;
      font-size: 0.4rem;
      letter-spacing: 0.5px;
      color: #fff;
      cursor: pointer;
      // border: 1px solid #2b92d4;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      animation: showIn 1700ms ease both, breathe 2200ms ease-in-out 1800ms infinite alternate;
      -webkit-animation: showIn 1700ms ease both, breathe 2200ms ease-in-out 1800ms infinite alternate;

      @keyframes showIn {
        0% {
          opacity: 0;
          transform: scale(0.6, 0.5);
        }

        100% {
          opacity: 1;
          transform: scale(1, 1);
        }
      }

      @keyframes breathe {
        0% {
          opacity: 1;
          box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
        }

        100% {
          opacity: 1;
          // border: 1px solid rgba(59, 235, 235, 1);
          box-shadow: 0 1px 30px rgba(59, 255, 255, 1);
        }
      }
    }

    .sl2 {
      background: #22C3AA;
      animation-delay: 800ms;
      -webkit-animation-delay: 800ms;
    }
  }

  .progressSection {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 390px;
    right: 0;
    left: 0;
    margin: 0 auto;
    // width: 500px;
    max-width: 500px;
    min-width: 160px;
  }

  .resumeFooter {
    position: absolute;
    bottom: 8%;
    left: 0;
    right: 0;
    width: 100%;
    height: 10%;
    // background: url('/static/bluefooter.png') repeat-x 0 0;
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
</style>


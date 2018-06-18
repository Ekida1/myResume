<template>
 <div class="basement">
    <div class="secondTitle">技术专长</div>

    <ul class="labelGroups">
      <!-- <transition-group name="bounce" appear enter-active-class="animated fadeInDown" appear-active-class="animated fadeInDown"> -->
        <!-- v-show="turnOnSecondAnimation" -->
        <li class="skillLabel sl1" v-show="turnOnSecondAnimation" key="HTML">HTML/HTML5</li>
        <li class="skillLabel sl1" v-show="turnOnSecondAnimation" key="CSS">CSS/CSS3</li>
        <li class="skillLabel sl1" v-show="turnOnSecondAnimation" key="JavaScript">JavaScript</li>
        <li class="skillLabel sl1" v-show="turnOnSecondAnimation" key="AngularJs">AngularJs</li>
        <li class="skillLabel sl1" v-show="turnOnSecondAnimation" key="Vue">Vue.js</li>
        <li class="skillLabel sl2" v-show="turnOnSecondAnimation" key="React">React</li>
        <li class="skillLabel sl1" v-show="turnOnSecondAnimation" key="Animate">Animate.css</li>
        <li class="skillLabel sl1" v-show="turnOnSecondAnimation" key="Github">Git/Github</li>
        <li class="skillLabel sl2" v-show="turnOnSecondAnimation" key="Gulp">Gulp</li>
        <li class="skillLabel sl2" v-show="turnOnSecondAnimation" key="Grunt">Grunt</li>
        <li class="skillLabel sl2" v-show="turnOnSecondAnimation" key="chart">E-chart</li>
        <li class="skillLabel sl2" v-show="turnOnSecondAnimation" key="D3">D3.js</li>
        <li class="skillLabel sl2" v-show="turnOnSecondAnimation" key="Visula">Visula Studio Code</li>
      <!-- </transition-group> -->
    </ul>
    <img class="resumeFooter" src="/api/greenfooter.png" alt="">
 </div>
</template>
<script>
// import animate from "animate.css";
export default {
  name: "SecondPage",
  props: {
    turnOnSecondAnimation: Boolean
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
    top: 120px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }

  .labelGroups {
    position: absolute;
    top: 200px;
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
</style>


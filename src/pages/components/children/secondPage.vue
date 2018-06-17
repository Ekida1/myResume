<template>
 <div class="basement">
    <div class="secondTitle">技术专长</div>

    <ul class="labelGroups">
      <!-- <transition-group name="bounce" appear enter-active-class="animated fadeInDown" appear-active-class="animated fadeInDown"> -->
        <!-- v-show="turnOnSecondAnimation" -->
        <li class="skillLabel" key="HTML" v-show="turnOnSecondAnimation">HTML/HTML5</li>
        <li class="skillLabel" key="CSS" v-show="turnOnSecondAnimation">CSS/CSS3</li>
        <li class="skillLabel" key="JavaScript" v-show="turnOnSecondAnimation">JavaScript</li>
        <li class="skillLabel" key="AngularJs" v-show="turnOnSecondAnimation">AngularJs</li>
        <li class="skillLabel" key="Vue" v-show="turnOnSecondAnimation">Vue.js</li>
        <li class="skillLabel" key="React" v-show="turnOnSecondAnimation">React</li>
        <li class="skillLabel" key="Animate" v-show="turnOnSecondAnimation">Animate.css</li>
        <li class="skillLabel" key="Github" v-show="turnOnSecondAnimation">Git/Github</li>
        <li class="skillLabel" key="Gulp" v-show="turnOnSecondAnimation">Gulp</li>
        <li class="skillLabel" key="Grunt" v-show="turnOnSecondAnimation">Grunt</li>
        <li class="skillLabel" key="chart" v-show="turnOnSecondAnimation">E-chart</li>
        <li class="skillLabel" key="D3" v-show="turnOnSecondAnimation">D3.js</li>
        <li class="skillLabel" key="Visula" v-show="turnOnSecondAnimation">Visula Studio Code</li>
      <!-- </transition-group> -->
    </ul>

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
    top: 170px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }

  .labelGroups {
    position: absolute;
    top: 250px;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 500px;

    .skillLabel {
      display: inline-block;
      width: auto;
      height: 40px;
      padding: 0 10px;
      margin: 5px;
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
      // animation: showIn 1700ms ease both;
      // -webkit-animation: showIn 1700ms ease both;

      // @keyframes showIn {
      // 0% {
      // height: 10px;
      // }

      // 100% {
      // height: 40px;
      // }
      // }
      animation-timing-function: ease-in-out;
      animation-name: breathe;
      animation-duration: 2200ms;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      // animation-delay: 1800ms;
      -webkit-animation-timing-function: ease-in-out;
      -webkit-animation-name: breathe;
      -webkit-animation-duration: 2200ms;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-direction: alternate;

      // -webkit-animation-delay: 1800ms;
      @keyframes breathe {
        0% {
          opacity: 0.3;
          box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
        }

        100% {
          opacity: 1;
          border: 1px solid rgba(59, 235, 235, 1);
          box-shadow: 0 1px 30px rgba(59, 255, 255, 1);
        }
      }
    }
  }
}
</style>


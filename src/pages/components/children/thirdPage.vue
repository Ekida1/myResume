<template>
  <div class="basement">
    <div class="thirdTitle">工作经验</div>
    <ul class="content">
      <li class="workItem yearItem">
        <span class="yearFlag">2017年</span>
        <i class="el-icon-time timeIcon"></i>
      </li>
      <li class="workItem monthIteam">
        <span class="monthFlag">06月</span>
        <i class="el-icon-location-outline circleIcon"></i>
        <!-- <transition name="bounce" appear enter-active-class="animated bounce" appear-active-class="animated bounce"> -->
        <div class="labelText lt1" v-show="turnOnThirdAnimation">拿到大学毕业证和工科学士学位证</div>
        <!-- </transition> -->
      </li>
      <li class="workItem monthIteam">
        <span class="monthFlag">10月</span>
        <i class="el-icon-location-outline circleIcon"></i>
        <!-- <transition name="bounce" appear enter-active-class="animated bounce" appear-active-class="animated bounce"> -->
        <div class="labelText lt2" key="2nd" v-show="turnOnThirdAnimation">进入第一家计算机产业公司(拓尔思成都研发中心)，接触AngularJS1版本技术</div>
        <!-- </transition> -->
      </li>
      <li class="workItem yearItem">
        <span class="yearFlag">2018年</span>
        <i class="el-icon-time timeIcon"></i>
      </li>
      <li class="workItem monthIteam">
        <span class="monthFlag">04月</span>
        <i class="el-icon-location-outline circleIcon"></i>
        <!-- <transition name="bounce" appear enter-active-class="animated bounce" appear-active-class="animated bounce"> -->
        <div class="labelText lt3" key="3rd" v-show="turnOnThirdAnimation">从拓尔思申请辞职，</div>
        <!-- </transition> -->
      </li>
      <li class="workItem monthIteam">
        <span class="monthFlag">07月</span>
        <i class="el-icon-location-outline circleIcon"></i>
        <!-- <transition name="bounce" appear enter-active-class="animated bounce" appear-active-class="animated bounce"> -->
        <div class="labelText lt4" key="4th" v-show="turnOnThirdAnimation">进入东方国信企业，正式成为一名Vue前端工程师</div>
        <!-- </transition> -->
      </li>
      <li class="workItem yearItem">
        <span class="yearFlag">2019年</span>
        <i class="el-icon-time timeIcon"></i>
      </li>
      <li class="workItem monthIteam">
        <span class="monthFlag">03月</span>
        <i class="el-icon-location-outline circleIcon"></i>
        <!-- <transition name="bounce" appear enter-active-class="animated bounce" appear-active-class="animated bounce"> -->
        <div class="labelText lt5" key="5th" v-show="turnOnThirdAnimation">现已离职</div>
        <!-- </transition> -->
      </li>
      <li class="workItem monthIteam lastli">
        <span class="monthFlag">04月</span>
        <i class="el-icon-location-outline circleIcon lastIcon"></i>
        <!-- <transition name="bounce" appear enter-active-class="animated bounce" appear-active-class="animated bounce"> -->
        <div class="labelText lt6" key="6th" v-show="turnOnThirdAnimation">自我巩固Vuejs技术+帮朋友接项目,并正在寻找合适的工作中...</div>
        <!-- </transition> -->
      </li>
      <li class="timeAxisBox"></li>
    </ul>
  </div>
</template>

<script>
import animate from "animate.css";
export default {
  name: "ThirdPage",
  props: {
    turnOnThirdAnimation: Boolean
  }
};
</script>

<style lang="stylus" scoped>
.basement {
  width: 100%;
  height: 100vh;
  padding: 50px;
  // overflow: hidden;
  box-sizing: border-box;

  .thirdTitle {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }

  .content {
    position: absolute;
    top: 150px;
    right: 0;
    left: 0;
    margin: 0 auto;
    padding: 0 0px;
    max-width: 600px;
    min-width: 300px;
    color: #fff;

    .timeAxisBox {
      content: '';
      height: 573px;
      width: 5px;
      border-radius: 8px;
      z-index: 0;
      background-color: #F59D43;
      position: absolute;
      left: 65px;
      top: -10px;
    }

    .workItem {
      width: auto;
      z-index: 2;

      .yearFlag {
        font-size: 16px;
      }

      .monthFlag {
        font-size: 14px;
      }

      .timeIcon {
        font-size: 25px;
      }

      .circleIcon {
        font-size: 16px;
      }

      .labelText {
        position: relative;
        left: 60px;
        bottom: 52px;
        min-width: 300px;
        max-width: 450px;
        min-height: 35px;
        line-height: 35px;
        border-radius: 4px;
        padding: 0 10px;
        overflow-x: visible;
        background-color: #ED9235;
        animation: bounceinR 0.8s ease both;
        -webkit-animation: bounceinR 0.8s ease both;
      }

      @keyframes bounceinR {
        0% {
          opacity: 0;
          width: 300px;
          transform: translateX(100px);
        }

        60% {
          opacity: 1;
          width: 500px;
          transform: translateX(-10px);
        }

        80% {
          width: 350px;
          transform: translateX(20px);
        }

        100% {
          width: 400px;
          transform: translateX(0);
        }
      }

      .lt1 {
        animation-delay: 0s;
        -webkit-animation-delay: 0s;
      }

      .lt2 {
        animation-delay: 400ms;
        -webkit-animation-delay: 400ms;
      }

      .lt3 {
        animation-delay: 800ms;
        -webkit-animation-delay: 800ms;
      }

      .lt4 {
        animation-delay: 1200ms;
        -webkit-animation-delay: 1200ms;
      }

      .lt5 {
        animation-delay: 1600ms;
        -webkit-animation-delay: 1600ms;
      }

      .lt6 {
        animation-delay: 2000ms;
        -webkit-animation-delay: 2000ms;
      }

      .labelText:before {
        content: '';
        position: absolute;
        left: -6px;
        top: 10px;
        width: 0px;
        height: 0px;
        border-top: 8px solid transparent;
        border-right: 6px solid #ED9235;
        border-bottom: 8px solid transparent;
      }
    }

    .monthIteam {
      position: relative;
      left: 27px;
      height: 85px;
      line-height: 66px;
    }

    .yearItem {
      position: relative;
    }
  }
}

@media screen and (max-width: 415px) {
  .timeAxisBox {
    left: 16.5%;
  }
}

@media screen and (max-width: 555px) {
  .labelText {
    min-width: 237px !important;
    max-width: 237px !important;
  }
}
</style>


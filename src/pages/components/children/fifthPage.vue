<template>
<div class="basement">
    <div class="fifthTitle">公司期望</div>
    <ul class="content">
      <transition-group name="fadeInRight" appear enter-active-class="animated fadeInRight" appear-active-class="animated fadeInRight">
      <li class="ptext location" key="location" v-show="turnOnFifthAnimation"><i class="el-icon-loading beforeicon"></i>期待工作地点:&nbsp;成都市环内</li>
      <li class="ptext type" key="type" v-show="turnOnFifthAnimation"><i class="el-icon-loading beforeicon"></i>公司行业：&nbsp;互联网/计算机企业</li>
      <li class="ptext salary"  key="salary" v-show="turnOnFifthAnimation"><i class="el-icon-loading beforeicon"></i>期待薪资：&nbsp;8k-10k可调整</li>
      <li class="ptext wish" key="wish" v-show="turnOnFifthAnimation"><i class="el-icon-loading beforeicon"></i>希望进入一个活跃,开放,自由,乐于分享,乐于创造的团队</li>
      </transition-group>
    </ul>
    <img class="resumeFooter" src="/static/heavygreenfooter.png" alt="">
</div>
</template>
<script>
export default {
  name: "FifthPage",
  props: {
    turnOnFifthAnimation: Boolean
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

  .fifthTitle {
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
    padding: 0 50px;
    max-width: 580px;
    min-width: 300px;
    color: #fff;

    .ptext {
      font-size: 20px;
      height: 50px;
      line-height: 50px;

      .beforeicon {
        margin-right: 5px;
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


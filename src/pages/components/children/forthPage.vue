<template>
  <div class="basement">
    <div class="forthTitle">个人项目/作品</div>
    <ul class="boxcontent">
      <li class="projectBox pb1" v-show="turnOnForthAnimation">
        <i class="el-icon-share litteicon"></i>
        <i class="el-icon-star-on staricon"></i>
        <div class="textBox">
        <span class="ptext">Ekida的个人网站</span>
        <br>
        <span class="ptext">我的个人网站。
              <br>
              <a href="">xxx</a>
            </span>
            </div>
      </li>
      <li class="projectBox pb2" v-show="turnOnForthAnimation">
        <i class="el-icon-share litteicon"></i>
        <i class="el-icon-star-on staricon"></i>
        <div class="textBox">
        <span class="ptext">旅游网前端app</span>
        <br>
        <span class="ptext">用Vue搭建的导航网。
              <br>
              <a href="">xxxbbb</a>
            </span>
        </div>
      </li>
      <li class="projectBox pb3" v-show="turnOnForthAnimation">
        <i class="el-icon-share litteicon"></i>
        <i class="el-icon-star-on staricon"></i>
        <div class="textBox">
        <span class="ptext">React音乐网站</span>
        <br>
        <span class="ptext">用React+jPlayer插件搭建的web音乐播放器。
                <br>
                <a href="">xxxccc</a>
              </span>
        </div>
      </li>
      <li class="projectBox pb4" v-show="turnOnForthAnimation">
        <i class="el-icon-share litteicon"></i>
        <i class="el-icon-star-on staricon"></i>
        <div class="textBox">
        <span class="ptext">更多关注Github</span>
        <br>
        <span class="ptext">在Github查看更多。
                <br>
                <a href="https://github.com/Ekida1">https://github.com/Ekida1</a>
              </span>
        </div>
      </li>
    </ul>
    <img class="resumeFooter" src="/api/pinkfooter.png" alt="">
    <!-- <div class="resumeFooter"></div> -->
  </div>
</template>

<script>
export default {
  name: "ForthPage",
  props: {
    turnOnForthAnimation: Boolean
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

  .forthTitle {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }

  .boxcontent {
    position: absolute;
    top: 150px;
    right: 0;
    left: 0;
    margin: 0 auto;
    padding: 0 5px;
    text-align: center;
    max-width: 750px;
    min-width: 350px;

    .projectBox {
      display: inline-block;
      min-width: 340px;
      height: 85px;
      border: 1px solid #fff;
      margin: 10px 8px;
      animation: bounceinDown 1.3s ease both;
      -webkit-animation: bounceinDown 1.3s ease both;

      @keyframes bounceinDown {
        0% {
          opacity: 0;
          transform: scale(0.5, 0.5);
        }

        100% {
          opacity: 1;
          transform: scale(1, 1);
        }
      }

      .litteicon {
        float: left;
        padding: 5px;
        font-size: 40px;
        color: #fff;
      }

      .staricon {
        float: right;
        font-size: 20px;
        padding: 5px;
        color: orange;
      }

      .textBox {
        position: relative;
        text-align: left;

        .ptext {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          color: #fff;
          clear: both;
        }
      }
    }

    .pb3 {
      animation-delay: 400ms;
      -webkit-animation-delay: 400ms;
    }

    .pb4 {
      animation-delay: 600ms;
      -webkit-animation-delay: 600ms;
    }
  }

  .resumeFooter {
    position: absolute;
    bottom: 8%;
    left: 0;
    right: 0;
    width: 100%;
    height: 10%;
    // background: url('/api/footer.png');
    animation: Xscroll 40000ms linear infinite alternate;
    -webkit-animation: Xscroll 40000ms linear infinite alternate;

    @keyframes Xscroll {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(600px);
      }
    }
  }
}
</style>


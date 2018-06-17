<template>
  <div class="basement">
    <!-- Optional controls -->
    <swiper :options="swiperOption" ref="bigSwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="spwier-item0">
          <index-page :turnOnIndexAnimation="turnOnIndexAnimation"></index-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item1">
          <second-page :turnOnSecondAnimation="turnOnSecondAnimation"></second-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item2">
          <third-page :turnOnThirdAnimation="turnOnThirdAnimation"></third-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item3">
          <forth-page :turnOnForthAnimation="turnOnForthAnimation"></forth-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item4">
          <fifth-page :turnOnFifthAnimation="turnOnFifthAnimation"></fifth-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item5">
          <last-page :turnOnLastAnimation="turnOnLastAnimation"></last-page>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import IndexPage from "./children/indexPage";
import SecondPage from "./children/secondPage";
import ThirdPage from "./children/thirdPage";
import ForthPage from "./children/forthPage";
import FifthPage from "./children/fifthPage";
import lastPage from "./children/lastPage";
export default {
  name: "HomeSwiper",
  components: {
    IndexPage,
    SecondPage,
    ThirdPage,
    ForthPage,
    FifthPage,
    lastPage
  },
  data() {
    return {
      turnOnIndexAnimation: true,
      turnOnSecondAnimation: false,
      turnOnThirdAnimation: false,
      turnOnForthAnimation: false,
      turnOnFifthAnimation: false,
      turnOnLastAnimation: false,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletElement: "li"
        },
        height: 800,
        mousewheel: true,
        direction: "vertical",
        effect: "fade",
        on: {
          slideChangeTransitionEnd: () => {
            if (this.swiper.activeIndex === 0) {
              this.turnOnIndexAnimation = true;
              this.turnOnSecondAnimation = false;
              this.turnOnThirdAnimation = false;
              this.turnOnForthAnimation = false;
              this.turnOnFifthAnimation = false;
              this.turnOnLastAnimation = false;
            } else if (this.swiper.activeIndex === 1) {
              this.turnOnIndexAnimation = false;
              this.turnOnSecondAnimation = true;
              this.turnOnThirdAnimation = false;
              this.turnOnForthAnimation = false;
              this.turnOnFifthAnimation = false;
              this.turnOnLastAnimation = false;
            } else if (this.swiper.activeIndex === 2) {
              this.turnOnIndexAnimation = false;
              this.turnOnSecondAnimation = false;
              this.turnOnThirdAnimation = true;
              this.turnOnForthAnimation = false;
              this.turnOnFifthAnimation = false;
              this.turnOnLastAnimation = false;
            } else if (this.swiper.activeIndex === 3) {
              this.turnOnIndexAnimation = false;
              this.turnOnSecondAnimation = false;
              this.turnOnThirdAnimation = false;
              this.turnOnForthAnimation = true;
              this.turnOnFifthAnimation = false;
              this.turnOnLastAnimation = false;
            } else if (this.swiper.activeIndex === 4) {
              this.turnOnIndexAnimation = false;
              this.turnOnSecondAnimation = false;
              this.turnOnThirdAnimation = false;
              this.turnOnForthAnimation = false;
              this.turnOnFifthAnimation = true;
              this.turnOnLastAnimation = false;
            } else if (this.swiper.activeIndex === 5) {
              this.turnOnIndexAnimation = false;
              this.turnOnSecondAnimation = false;
              this.turnOnThirdAnimation = false;
              this.turnOnForthAnimation = false;
              this.turnOnFifthAnimation = false;
              this.turnOnLastAnimation = true;
            }
          }
        },
        observer: true,
        observeParents: true
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.bigSwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
  }
};
</script>

<style lang="stylus" scoped>
.basement >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.basement >>> .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin-top: 10px;
}

.basement {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .swiper-pagination {
    position: fixed;
    top: 45%;
    left: 94%;
  }

  .spwier-item0 {
    // height: 100vh;
    background: #0062B9;
  }

  .spwier-item1 {
    // height: 100vh;
    background: #22C3AA;
  }

  .spwier-item2 {
    // height: 100vh;
    background: #EEB422;
  }

  .spwier-item3 {
    // height: 100vh;
    background: #FB6D7E;
  }

  .spwier-item4 {
    // height: 100vh;
    background: #149B70;
  }

  .spwier-item5 {
    // height: 100vh;
    background: #19B1E0;
  }
}
</style>

<template>
  <div class="basement">
    <!-- Optional controls -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="spwier-item0">
          <index-page></index-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item1">
          <second-page></second-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item2">
          <third-page></third-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item3">
          <forth-page></forth-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item4">
          <fifth-page></fifth-page>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="spwier-item5">
          <last-page></last-page>
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
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletElement: "li"
        },
        mousewheel: true,
        direction: "vertical",
        effect: "fade",
        on: {
          slideChangeTransitionEnd: () => {}
        },
        observer: true,
        observeParents: true
      }
    };
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
  // height: 100vh;
  overflow: hidden;

  .swiper-pagination {
    position: fixed;
    top: 45%;
    left: 94%;
  }

  .spwier-item0 {
    height: 100vh;
    background: #0062B9;
  }

  .spwier-item1 {
    height: 100vh;
    background: #22C3AA;
  }

  .spwier-item2 {
    height: 100vh;
    background: #EEB422;
  }

  .spwier-item3 {
    height: 100vh;
    background: #FB6D7E;
  }

  .spwier-item4 {
    height: 100vh;
    background: #149B70;
  }

  .spwier-item5 {
    height: 100vh;
    background: #19B1E0;
  }
}
</style>

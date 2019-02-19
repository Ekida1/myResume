<template>
  <section class="coverCurtains">
    <img class="closeCoverBtn" src="/static/close.png" alt @click="handleCover">

    <div class="-contain">
      <div class="-skill-circle">
        <ul class="-outCircle">
          <li
            class="-out"
            @mouseover="handleMouseOver"
            :style="{backgroundColor:item.color}"
            v-for="(item,index) in skill.outCircleList"
            :key="index"
          >{{item.name}}</li>
        </ul>
        <ul class="-innerCircle">
          <li
            class="-inner"
            :style="{backgroundColor:item.color}"
            v-for="(item,index) in skill.innerCircleList"
            :key="index"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "coverCurtains",
  data() {
    return {
      skill: {
        title: "技能栈",
        outCircleList: [
          {
            color: "rgba(121,100,102,0.8)",
            name: "gulp"
          },
          {
            color: "rgba(49,65,82,0.8)",
            name: "angular"
          },
          {
            color: "rgba(76,157,160,0.8)",
            name: "webpack"
          },
          {
            color: "rgba(66,66,66,0.8)",
            name: "less"
          },
          {
            color: "rgba(193,131,106,0.8)",
            name: "git"
          },
          {
            color: "rgba(117,148,179,0.8)",
            name: "nodejs"
          },
          {
            color: "rgba(71,83,94,0.8)",
            name: "cordova"
          },
          {
            color: "rgba(147,147,189,0.8)",
            name: "react"
          }
        ],
        innerCircleList: [
          {
            color: "rgba(179,164,140,0.8)",
            name: "es6"
          },
          {
            color: "rgba(171,209,220,0.8)",
            name: "vue"
          },
          {
            color: "rgba(238,215,163,0.8)",
            name: "ng2"
          },
          {
            color: "rgba(207,184,178,0.8)",
            name: "fp"
          }
        ],
        desList: [
          "熟练使用angularJs1.x及各种类库的指令封装",
          "常驻PC/APP/微信三平台前端研发",
          "擅长组件/插件开发，能脱离库书写JS代码",
          "编码常思其健壮性，扩展性，维护性"
        ]
      }
    };
  },
  methods: {
    handleCover() {
      this.$emit("on-change-close");
    },
    handleMouseOver() {}
  }
};
</script>

<style lang="stylus" scoped>
.coverCurtains {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #945c4c;
  animation-duration: 1000ms;
  z-index: 8;

  // animation-fill-mode: forwards; // 动画结束时，将保留状态不变
  .closeCoverBtn {
    width: 60px;
    cursor: pointer;
  }

  .closeCoverBtn:hover {
    animation: rotateIcon 2s infinite;
  }

  @keyframes rotateIcon {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .-contain {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    min-width: 750px;

    .-skill-circle {
      padding: 5px;
      position: relative;
      font-size: 12px;
      width: 300px;
      color: #FFF;

      .-outCircle {
        width: 242px;
        height: 242px;
        border: 4px dashed #999;
        border-radius: 50%;
        position: relative;
        margin: 0 auto;

        .-out {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: absolute;
          text-align: center;
          line-height: 50px;
          cursor: pointer;
          -webkit-backface-visibility: hidden; // 优化android卡顿
        }

        .-out:hover {
          background-color: red !important;
          -webkit-animation-play-state: paused;
          animation-play-state: paused;
        }

        .-out:nth-child(1) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
        }

        .-out:nth-child(2) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) -2s infinite alternate;
        }

        .-out:nth-child(3) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate;
        }

        .-out:nth-child(4) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -10s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) -6s infinite alternate;
        }

        .-out:nth-child(5) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate;
        }

        .-out:nth-child(6) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -14s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) -10s infinite alternate;
        }

        .-out:nth-child(7) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
        }

        .-out:nth-child(8) {
          animation: outX 8s cubic-bezier(0.36, 0, 0.64, 1) -18s infinite alternate, outY 8s cubic-bezier(0.36, 0, 0.64, 1) -14s infinite alternate;
        }
      }

      .-innerCircle {
        width: 142px;
        height: 142px;
        border: 4px dashed #999;
        border-radius: 50%;
        position: absolute;
        text-align: center;
        line-height: 50px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        .-inner {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          text-align: center;
          line-height: 40px;
          -webkit-backface-visibility: hidden; // 优化android卡顿
        }

        .-inner:nth-child(1) {
          animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate, innerY 8s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
        }

        .-inner:nth-child(2) {
          animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate, innerY 8s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate;
        }

        .-inner:nth-child(3) {
          animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate, innerY 8s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate;
        }

        .-inner:nth-child(4) {
          animation: innerX 8s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate, innerY 8s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
        }
      }
    }

    .-des {
      text-align: center;
      color: #FFF;
      line-height: 24px;
      font-size: 18px;
    }
  }

  .-contain-en {
    max-width: 1200px;
  }

  @keyframes outX {
    0% {
      left: -27px;
    }

    100% {
      left: 217px;
    }
  }

  @keyframes outY {
    0% {
      top: -27px;
    }

    100% {
      top: 217px;
    }
  }

  @keyframes innerX {
    0% {
      left: -22px;
    }

    100% {
      left: 122px;
    }
  }

  @keyframes innerY {
    0% {
      top: 122px;
    }

    100% {
      top: -22px;
    }
  }
}
</style>

<template>
 <div class="basement">
    <div class="secondTitle">技术专长</div>
    <ul class="labelGroups">
      <li class="skillLabel">HTML/HTML5</li>
      <li class="skillLabel">CSS/CSS3</li>
      <li class="skillLabel">JavaScript</li>
      <li class="skillLabel">AngularJs</li>
      <li class="skillLabel">Vue.js</li>
      <li class="skillLabel">React</li>
      <li class="skillLabel">Bootstrap</li>
      <li class="skillLabel">Git/Github</li>
      <li class="skillLabel">Gulp</li>
      <li class="skillLabel">Grunt</li>
      <li class="skillLabel">E-chart</li>
      <li class="skillLabel">D3.js</li>
      <li class="skillLabel">Visula Studio Code</li>
    </ul>
 </div>
</template>
<script>
export default {
  name: "SecondPage"
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
      animation-timing-function: ease-in-out;
      animation-name: breathe;
      animation-duration: 2700ms;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      -webkit-animation-timing-function: ease-in-out;
      -webkit-animation-name: breathe;
      -webkit-animation-duration: 2000ms;
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
    }
  }
}
</style>


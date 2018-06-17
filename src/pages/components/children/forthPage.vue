<template>
<div class="basement">
    <div class="forthTitle">个人项目/作品</div>
    <div>

    </div>
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
    top: 170px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }
}
</style>


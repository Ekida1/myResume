<template>
<div class="basement">
    <div class="lastTitle">联系方式/社交账号</div>
    <div>

    </div>
</div>
</template>
<script>
export default {
  name: "LastPage",
  props: {
    turnOnLastAnimation: Boolean
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

  .lastTitle {
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


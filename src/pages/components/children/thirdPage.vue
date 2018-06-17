<template>
<div class="basement">
    <div class="thirdTitle">工作经验</div>
    <div class="timeAxisBox">

    </div>
</div>
</template>
<script>
export default {
  name: "ThirdPage"
};
</script>
<style lang="stylus" scoped>
.basement {
  width: 100%;
  height: 100vh;
  padding: 50px;
  overflow: hidden;
  box-sizing: border-box;

  .thirdTitle {
    position: absolute;
    top: 170px;
    right: 0;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: 32px;
    letter-spacing: 2px;
  }

  .timeAxisBox {
    position: absolute;
    top: 250px;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 600px;
  }
}
</style>


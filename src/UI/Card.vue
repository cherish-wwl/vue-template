<template>
  <div class="sub_card">
    <div class="sub_card_title" v-if="title">
      {{title}}
    </div>
    <div class="sub_card_content">
     <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:['title']
}
</script>
<style scoped>
.sub_card {
  padding: 20px;
  height: 100%;
  /* border: 2px solid #87c4f3; */
  background: url('../assets/dataview/sub/sub_bg.png') no-repeat, url('../assets/dataview/sub/sub_bg_1.png') no-repeat right bottom;
  background-size: 100% 100%, 3% auto;
  display: flex;
  flex-direction: column;
}
.sub_card_title {
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 24px;
  background: linear-gradient(
    90deg,
    rgba(0, 152, 255, 0.5) 0%,
    rgba(9, 107, 174, 0) 100%
  );
  border: 2px solid;
  border-image: linear-gradient(
      90deg,
      rgba(163, 253, 255, 1),
      rgba(106, 249, 255, 0)
    )
    2 2;
  padding: 8px 10px;
  border-right: none;
  margin-bottom: 20px;
}
.sub_card_content {
  padding: 20px 0;
  background: linear-gradient(180deg, rgba(76, 183, 255, 0.7) 0%, rgba(0, 152, 255, 0.7) 100%);
  box-shadow: inset 0px 0px 8px 0px #6AF9FF;
  border: 2px solid #6AF9FF;
  margin: 0 30px;
  flex:1;
  min-height: 200px;
}
</style>

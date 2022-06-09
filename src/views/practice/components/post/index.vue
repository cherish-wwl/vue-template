<template>
  <div class="post-content">
    <div class="post-title">
      2022年 勤工俭学
    </div>
    <div class="post-labels">
      <DotLabel><span>岗位数</span> <span>1人</span></DotLabel>
      <DotLabel><span>申请通过</span> <span>1人</span></DotLabel>
      <DotLabel><span>总申请数</span> <span>1人</span></DotLabel>
      <DotLabel><span>贫困生人数</span> <span>1人</span></DotLabel>
    </div>
  </div>
</template>
<script>
import DotLabel from "@/UI/DotLabel";
export default {
  components: {
    DotLabel,
  },
};
</script>
<style scoped>
.post-content {
  position: absolute;
  left: calc(25% + 20rem);
  right: calc(25% + 20rem);
  bottom: 28rem;
}
.post-labels {
  display: flex;
  justify-content: space-between;
}
.post-title {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(9, 108, 175, 0.5) 52%,
    rgba(0, 0, 0, 0.21) 100%
  );
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border: 1rem solid #6af9ff;
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 28rem;
  padding: 6rem 15rem 6rem 10rem;
  display: inline-block;
  margin-bottom: 20rem;
}
</style>

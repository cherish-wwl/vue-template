<template>
  <div class="dashLabel">
    <div :class="animate ? 'breathAnimate' : ''">
    <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['animate']
}
</script>
<style scoped>
.dashLabel {
  width: 284rem;
  height: 63rem;
  margin: auto;
  background-image: url("./../assets/dataview/btn-border2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-size: 30rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #3cdd5a;
  line-height: 49rem;
  text-align: center;
  padding: 7rem;
}
.breathAnimate {
  
  animation: breath 2s ease-in-out infinite;
}
@keyframes breath {
  0%{
    box-shadow: none;
  }
  50%{
    box-shadow: 1px 1px 10px 1px #6AF9FF;
  }
  100%{
    box-shadow: none;
  }
}
</style>

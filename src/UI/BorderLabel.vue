<template>
  <div class="border-label">
    <slot></slot>
  </div>
</template>
<style scoped>
.border-label {
  display: inline-block;
  font-size: 18rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 20rem;
  padding: 6rem 20rem;
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0rem 0rem 6rem 0rem #6af9ff;
  border-radius: 8rem;
  border: 1rem solid #6af9ff;
}
</style>

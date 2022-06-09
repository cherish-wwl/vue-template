<template>
      <div class="circleNum">
      <div class="circleNumInner">
       <slot></slot>
      </div>
    </div>
</template>
<style scoped>
.circleNum {
  width: 180rem;
  height: 180rem;
  background: url("../assets/dataview/1.png") no-repeat;
  background-size: 100% 100%;
  margin: 35rem auto 25rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.circleNumInner {
  width: 150rem;
  height: 150rem;

  box-shadow: 0rem 0rem 6rem 0rem rgba(106, 249, 255, 0.8),
    inset 0rem 0rem 12rem 4rem #57d0d7;
  border: 4rem solid rgba(106, 249, 255, 0.8);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 30rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 30rem;
}
</style>
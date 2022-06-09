<template>
  <div class="dot_label">
    <div class="dot_label_content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.dot_label {
  background: linear-gradient(
    180deg,
    rgba(0, 42, 70, 0.5) 0%,
    rgba(0, 152, 255, 0.5) 100%
  );
  box-shadow: inset 0rem 0rem 8rem 0rem #6af9ff;
  border: 2rem solid #6af9ff;
  display: inline-flex;
  align-items: center;
  width: 220rem;
  height: 40rem;
  padding-right: 10rem;
}
.dot_label_content {
  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 28rem;
  display: inline-flex;
  justify-content: space-between;
  flex: 1;
}
.dot_label:before {
  content: "";
  display: inline-block;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: #6af9ff;
  box-shadow: 0rem 0rem 8rem 0rem rgba(213, 253, 255, 0.8);
  margin: 0 10rem;
}
</style>

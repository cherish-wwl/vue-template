<template>
  <div class="left_border_label">
      <slot></slot>
  </div>
</template>
<style scoped>
.left_border_label {
background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(9, 108, 175, 0.3) 52%, rgba(0, 0, 0, 0.2) 100%);
box-shadow: 0px 0px 6px 0px #6AF9FF;
border: 1px solid #6AF9FF;

  font-size: 20rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 28rem;
  display: flex;
  justify-content: space-between;
  padding: 12rem 10rem 12rem 20rem;
  position: relative;
}
.left_border_label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6rem;
  background: #6AF9FF;
}

</style>

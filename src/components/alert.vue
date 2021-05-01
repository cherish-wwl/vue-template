<template>
  <div class="alert_container">
    <div class="alert_body">{{msg}}</div>
  </div>
</template>
<script>
export default {
  props: ['msg']
}
</script>
<style lang="scss" scoped>
.alert_container{
  position: fixed;
  top: 15%;
  background-color: #ffe6c5;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 6px;
  .alert_body{
    display: inline-block;
    padding: 10px 15px;
    font-size: 14px;
    color: #a67d00;
  }
}
</style>
<template>
  <div class="sub-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "subPage",
};
</script>

<style>
.sub-container {
  font-size: 6.25%;
  background-color: #fff;
  width: 100vw;
  max-width: 100%;
  color:#000;
  
}
</style>

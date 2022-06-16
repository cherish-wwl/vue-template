<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'login',

  created() {
    this.resizeZoom()
    window.addEventListener("load", this.resizeZoom);
    window.addEventListener("resize", this.resizeZoom);

  },
  destroyed() {
    window.removeEventListener("resize", this.resizeZoom);
    window.removeEventListener("load", this.resizeZoom);
  },
}
</script>

<style>

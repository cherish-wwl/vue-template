<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>

  console.log('process',process)
import _ from "lodash";
const layout = require.context("./layouts", false, /.vue/);
const layouts = {};
layout.keys().forEach(key => {
  let name = key.split(".");
  name = _.camelCase(name[1]);
  layouts[name] = layout(key).default;
});
export default {
  name: "App",
  components: layouts,
  data() {
    return {
      layout: "default"
    };
  },
  created() {
    const layout = this.$route.meta.layout;
    if (layout) {
      this.layout = layout;
    }
  }
};
</script>

<style>
#app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  min-width: 1920px;
  /* min-height: 100vh;
  line-height: 1; */
  background: linear-gradient(0deg, #0A0C63, #02042A);
  position: relative;
  overflow: hidden;
}
</style>

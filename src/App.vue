<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import _ from "lodash";
const layout = require.context("./layouts", false, /.vue/);
const layouts = {};
layout.keys().forEach(key => {
  let name = key.split(".");
  name = _.camelCase(name[1]);
  layouts[name] = layout(key).default;
});
console.log('layouts',layouts)
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
 
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

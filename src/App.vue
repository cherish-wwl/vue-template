<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from "lodash";
const layout = require.context("./layouts", false, /.vue/);
const layouts:any = {};
layout.keys().forEach(key => {
  let names:string[]  = key.split(".");
  let name:string = _.camelCase(names[1]);
  layouts[name] = layout(key).default;
});
export default Vue.extend({
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
})
</script>>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  font-size: 62.5%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media only screen and (min-width: 320px){html {font-size: 40.5%!important;}}
@media only screen and (min-width: 360px){html {font-size: 50.5%!important;}}
@media only screen and (min-width: 400px){html {font-size: 50.5%!important;}}
@media only screen and (min-width: 480px){html {font-size: 50%!important;}}
</style>

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
<<<<<<< HEAD
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  min-width: 1920px;
  /* min-height: 100vh;
  line-height: 1; */
  background: linear-gradient(0deg, #0A0C63, #02042A);
  position: relative;
  overflow: hidden;
  height: 100vh;
=======
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
>>>>>>> feature-zhanhui-dai
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

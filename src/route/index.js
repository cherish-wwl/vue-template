import Vue from "vue";
import VueRouter from "vue-router";
import _ from "lodash";

Vue.use(VueRouter);

let router = require.context(
  "../views",
  true,
  /^((?!components|store).)*.vue$/
);
let routes = [];

router.keys().forEach(key => {
  let _keyarr = key.split(".");
  if (key.indexOf("index") != -1) {
    const path = _keyarr[1].replace("/index", "");
    routes.push({
      path,
      component: router(key).default, // 相当于import
      name: _.camelCase(path),
      meta: {
        layout: router(key).default.layout
      }
    });
  } else {
    routes.push({
      path: _keyarr[1],
      component: router(key).default,
      name: _.camelCase(_keyarr[1]),
      meta: {
        layout: router(key).default.layout
      }
    });
  }
});
routes = routes.map(e => {
  return {
    ...e,
    path: e.path == '/home' ?  '/' : e.path,
   
  }
})

console.log('routes',routes)
export default new VueRouter({
  mode: "history",
  routes: routes
});

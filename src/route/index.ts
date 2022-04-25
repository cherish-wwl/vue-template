import Vue from "vue";
import VueRouter from "vue-router";
import _ from "lodash";
import { RouteConfig } from "vue-router/types/router"
Vue.use(VueRouter);

const router = require.context(
  "../views",
  true,
  /^((?!components|store).)*.vue$/
);

let routes:RouteConfig[] = [];

router.keys().forEach(key => {
  const _keyarr = key.split(".");
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
routes = routes.concat([
  {
    path: "/",
    // redirect: "/home"
    component: () => import("@/views/home"), // 相当于import
    name:'home',
  }
]);

export default new VueRouter({
  // mode: "history",
  // base: '/new/',
  routes: routes
});

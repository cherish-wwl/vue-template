import Vue from "vue";
import VueRouter, { Route } from "vue-router";


declare module "*.vue" {
  // import { Component } from "vue";
  // const component: Component;
  export default Vue;
}

// declare module "vue/types/vue" {
//   interface Vue {
//     $router: VueRouter; // 这表示this下有这个东西
//     $route: Route;
//     $http: any;
//   }
// }
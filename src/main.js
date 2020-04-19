import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// import "./assets/iconfont/iconfont.css";
import "./assets/less/base.less";
import "./assets/less/index.less";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import index from "./components/index.vue";
import my from "./components/my.vue";
import friend from "./components/friend.vue";
import download from "./components/download.vue";

// import recommend from "./components/recommend.vue";
// import top from "./components/top.vue";

const routes = [
  {
    path: "/index",
    component: index
//     // childen: [
//     //   { path: "recommend", component: recommend },
//     //   { path: "top", component: top }
//     // ]
  },
  { path: "/my", component: my },
  { path: "/friend", component: friend },
  { path: "/download", component: download },
];
const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");



import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import axios from "axios";
Vue.prototype.$axios = axios;

//动态修改title
import VueWechatTitle from "vue-wechat-title";
Vue.use(VueWechatTitle);

import "./assets/iconfont/iconfont.css";
import "./assets/less/base.less";
import "./assets/less/index.less";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import index from "./components/index.vue";
import my from "./components/my.vue";
import friend from "./components/friend.vue";
import download from "./components/download.vue";

import recommend from "./components/recommend.vue";
import top from "./components/top.vue";
import songSheet from "./components/songSheet.vue";
import radio from "./components/radio.vue";
import singer from "./components/singer.vue";
import newSong from "./components/newSong.vue";

const routes = [
  {
    path: "/",
    redirect: "/index",
    meta: {
      title: "网易云音乐",
    },
  },
  {
    path: "/index",
    name: "index",
    component: index,
    meta: {
      title: "网易云音乐",
    },
    children: [
      { path: "", component: recommend },
      {
        path: "recommend",
        component: recommend,
        meta: {
          title: "网易云音乐",
        },
      },
      { path: "top", component: top },
      { path: "songSheet", component: songSheet },
      { path: "radio", component: radio },
      { path: "singer", component: singer },
      { path: "newSong", component: newSong },
    ],
  },
  {
    path: "/my",
    component: my,
    meta: {
      title: "我的音乐",
    },
  },
  {
    path: "/friend",
    component: friend,
    meta: {
      title: "朋友",
    },
  },
  { path: "/download", component: download },
];
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

﻿import Vue from "vue";
import App from "./App.vue";

// 导入 Element_ui
import ElementUI from "element-ui";
// 导入 Element-ui 样式
import "element-ui/lib/theme-chalk/index.css";
// 插件 Element-ui
Vue.use(ElementUI);

// 导入全局初始化样式
import "./static/css/index.css";

// 导入全局javascript代码
import "./static/js/harris.js";

// 路由整合
import VueRouter from "vue-router";
Vue.use(VueRouter);

//说是解决重写路由的措施  感觉不是这个的作用
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }

// 导入对应的路由
import discovery from "./views/01.discovery.vue";
import playlists from "./views/02.playlists.vue";
import songs from "./views/03.songs.vue";
import mvs from "./views/04.mvs.vue";
import result from "./views/05.result.vue";
import playlist from "./views/06.playlist.vue";
import mv from "./views/07.mv.vue";

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/discovery",
    },
    {
      // 发现音乐
      path: "/discovery",
      component: discovery,
    },
    {
      // 推荐歌单
      path: "/playlists",
      component: playlists,
    },
    {
      // 推荐歌单 详情
      path: "/playlist",
      component: playlist,
    },
    {
      // 最新音乐
      path: "/songs",
      component: songs,
    },
    {
      // 最新音乐
      path: "/mvs",
      component: mvs,
    },
    // mv详情
    {
      path: "/mv",
      component: mv,
    },
    // 搜索结果页
    {
      path: "/result",
      component: result,
    },
    {
      path: "/harris",
      component: () => import("./views/harris.vue"),
    },
  ],
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 挂载到Vue示例上
  router,
}).$mount("#app");

<template>
  <div class="index-container">
    <!-- 导航区域 -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlists">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
        <li>
          <router-link to="/hij">
            <span class="iconfont el-icon-headset"></span>
            Harris&Jaggie
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 主题区域 -->
    <div class="main">
      <router-view :key="key"></router-view>
      <Footer />
    </div>
    <!-- 播放标签 -->
    <div class="player">
      <audio loop :src="musicUrl" autoplay controls></audio>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "index",
  data() {
    return {
      musicUrl: "",
    };
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    },
  },
  components: { Footer },
};
</script>

<style></style>

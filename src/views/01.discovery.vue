<template>
  <div class="discovery-container harris_border_nohover">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h2 class="title">
        推荐歌单
      </h2>
      <div class="items">
        <div
          class="item harris_border"
          v-for="(item, index) in list"
          :key="index"
          @click="toPlayList(item.id)"
        >
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <div style="padding:10px">
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h2 class="title">
        最新音乐
      </h2>
      <div class="items">
        <div
          class="item harris_border"
          @click="play(item.id)"
          v-for="(item, index) in songs"
          :key="index"
        >
          <div class="img-wrap">
            <img :src="item.picUrl" />
            <span class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{ item.name }}}</div>
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h2 class="title">推荐MV</h2>
      <div class="items">
        <div
          class="item harris_border"
          v-for="(item, index) in mv"
          :key="index"
          @click="toMv(item.id)"
        >
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{ item.playCount }}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{ item.name }}</div>
            <div class="singer">{{ item.artistName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "discovery",
  data() {
    return {
      //轮播图
      banners: [],
      //推荐歌单
      list: [],
      //最新歌曲
      songs: [],
      //推荐mv
      mv: [],
    };
  },
  created() {
    //轮播图接口
    axios({
      url: "https://music.cyrilstudio.top/banner",
      method: "get",
    }).then((res) => {
      this.banners = res.data.banners;
    });

    //推荐歌单https://music.cyrilstudio.top/personalized
    axios({
      url: "https://music.cyrilstudio.top/personalized",
      method: "get",
      params: {
        limit: 10,
      },
    }).then((res) => {
      this.list = res.data.result;
    });

    //最新音乐 https://music.cyrilstudio.top/personalized/newsong
    axios({
      url: "https://music.cyrilstudio.top/personalized/newsong",
      method: "get",
    }).then((res) => {
      this.songs = res.data.result;
    });
    //推荐mvhttps://music.cyrilstudio.top/personalized/mv
    axios({
      url: "https://music.cyrilstudio.top/personalized/mv",
      method: "get",
    }).then((res) => {
      this.mv = res.data.result;
    });
  },
  methods: {
    //播放
    play(id) {
      axios({
        url: "https://music.cyrilstudio.top/song/url",
        method: "get",
        params: {
          id,
        },
      }).then((res) => {
        let url = res.data.data[0].url;
        //设置给父组件的 播放地址
        this.$parent.musicUrl = url;
      });
    },
    //点击歌单详情id
    toPlayList(id) {
      this.$router.push(`/playlist?id=${id}`);
    },
    //去mv详情
    toMv(id) {
      this.$router.push(`/mv?id=${id}`);
    },
  },
};
</script>

<style></style>

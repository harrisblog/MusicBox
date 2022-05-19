<template>
  <div class="hij-container hassan_border_nohover">
    <div class="hij_playlist">
      <div class="hij_playlist_img">
        <img :src="hij_playlist.playlist.coverImgUrl" alt="" />
      </div>
      <div class="hij_playlist_text">
        <div class="hij_playlist_bar">
          <div class="hij_playlist_tag">
            歌单
          </div>
          <div class="hij_playlist_name">
            {{ hij_playlist.playlist.name }}
          </div>
        </div>
        <div class="hij_playlist_bar">
          <div class="hij_playlist_avatar">
            <img :src="creator.profile.avatarUrl" alt="" />
          </div>
          <div class="hij_playlist_nickname">
            {{ creator.profile.nickname }}
          </div>
          <div class="hij_playlist_time">创建于 {{ create_time }}</div>
          <div class="hij_playlist_time">更新于 {{ update_time }}</div>
        </div>
        <div class="hij_playlist_intro">
          介绍：{{ hij_playlist.playlist.description }}
        </div>
      </div>
    </div>
    <div class="hij_songs">
      <div
        class="hij_song hassan_border"
        v-for="item in playlist"
        @click="play(item.id)"
      >
        <div class="hij_song_img">
          <img :src="item.al.picUrl" alt="" />
        </div>
        <div class="hij_text">
          <div class="hij_name">{{ item.name }}</div>
          <div class="hij_singer">{{ item.ar[0].name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "hij",
  data() {
    return {
      creator: [],
      hij_playlist: [],
      playlist: [],
      create_time: "",
      update_time: "",
    };
  },
  methods: {
    showPlayList() {
      // 获取歌单详情
      axios({
        url: "http://music.cyrilstudio.top/playlist/detail?id=6964740071",
        method: "get",
      }).then((res) => {
        this.hij_playlist = res.data;
        this.create_time = this.getTime(res.data.playlist.createTime);
        this.update_time = this.getTime(res.data.playlist.updateTime);

        // 获取用户相亲信息
        axios({
          url:
            "http://music.cyrilstudio.top/user/detail?uid=" +
            res.data.playlist.userId,
          method: "get",
        }).then((res) => {
          this.creator = res.data;
        });
      });
      // 获取歌单所有歌曲
      axios({
        url: "http://music.cyrilstudio.top/playlist/track/all?id=6964740071",
        method: "get",
      }).then((res) => {
        this.playlist = res.data.songs;
      });
    },
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
    // 时间戳转时间
    getTime(t) {
      t = new Date(t);
      return t.toLocaleDateString().replace(/\//g, "-");
    },
  },
  created() {
    this.showPlayList();
  },
};
</script>

<style scoped>
.hij_playlist {
  display: flex;
  background-color: var(--hassan-border-color);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
}
.hij_playlist_img {
  height: 200px;
  width: 200px;
}
.hij_playlist_img img {
  border-radius: 12px;
  height: 200px;
  width: 200px;
  object-fit: cover;
}
.hij_playlist_text {
  padding: 20px;
}
.hij_playlist_bar {
  display: flex;
  margin-bottom: 15px;
}
.hij_playlist_bar div {
  margin-right: 20px;
}
.hij_playlist_name {
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
}
.hij_playlist_tag {
  border: var(--hassan-border-hover);
  border-radius: 10px;
  color: var(--hassan-theme);
  line-height: 32px;
  font-size: 18px;
  padding: 0 10px;
  margin: 4px auto 4px 0;
}
.hij_playlist_avatar {
  margin-right: 20px;
}
.hij_playlist_avatar img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}
.hij_playlist_nickname {
  font-size: 18px;
  line-height: 40px;
}
.hij_playlist_time {
  color: gray;
  line-height: 40px;
}
.hij_songs {
  display: flex;
  flex-wrap: wrap;
}
.hij_song {
  display: flex;
  width: calc((100% - 60px) / 3);
  height: 120px;
  margin: 10px;
  cursor: pointer;
}
.hij_song:hover img {
  transform: scale(1.1);
}
.hij_song:hover .hij_name {
  color: var(--hassan-theme);
}
.hij_song_img {
  height: 120px;
  width: 120px;
  overflow: hidden;
}
.hij_song_img img {
  height: 120px;
  width: 120px;
  object-fit: cover;
}
.hij_text {
  padding: 15px;
  width: calc(100% - 120px);
}
.hij_name {
  font-size: 18px;
  line-height: 30px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.hij_singer {
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

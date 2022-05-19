(function(t) {
  function s(s) {
    for (
      var i, l, c = s[0], o = s[1], r = s[2], p = 0, m = [];
      p < c.length;
      p++
    )
      (l = c[p]),
        Object.prototype.hasOwnProperty.call(n, l) && n[l] && m.push(n[l][0]),
        (n[l] = 0);
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    u && u(s);
    while (m.length) m.shift()();
    return e.push.apply(e, r || []), a();
  }
  function a() {
    for (var t, s = 0; s < e.length; s++) {
      for (var a = e[s], i = !0, c = 1; c < a.length; c++) {
        var o = a[c];
        0 !== n[o] && (i = !1);
      }
      i && (e.splice(s--, 1), (t = l((l.s = a[0]))));
    }
    return t;
  }
  var i = {},
    n = { app: 0 },
    e = [];
  function l(s) {
    if (i[s]) return i[s].exports;
    var a = (i[s] = { i: s, l: !1, exports: {} });
    return t[s].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.m = t),
    (l.c = i),
    (l.d = function(t, s, a) {
      l.o(t, s) || Object.defineProperty(t, s, { enumerable: !0, get: a });
    }),
    (l.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (l.t = function(t, s) {
      if ((1 & s && (t = l(t)), 8 & s)) return t;
      if (4 & s && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & s && "string" != typeof t)
      )
        for (var i in t)
          l.d(
            a,
            i,
            function(s) {
              return t[s];
            }.bind(null, i)
          );
      return a;
    }),
    (l.n = function(t) {
      var s =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return l.d(s, "a", s), s;
    }),
    (l.o = function(t, s) {
      return Object.prototype.hasOwnProperty.call(t, s);
    }),
    (l.p = "");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = c.push.bind(c);
  (c.push = s), (c = c.slice());
  for (var r = 0; r < c.length; r++) s(c[r]);
  var u = o;
  e.push([0, "chunk-vendors"]), a();
})({
  0: function(t, s, a) {
    t.exports = a("56d7");
  },
  "56d7": function(t, s, a) {
    "use strict";
    a.r(s);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var i = a("2b0e"),
      n = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a("div", { attrs: { id: "app" } }, [a("top"), a("index")], 1);
      },
      e = [],
      l = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a("div", { staticClass: "top-container" }, [
          t._m(0),
          a("div", { staticClass: "site-name" }, [
            t._v(" 💽 诗颂的八音盒 🎹 "),
          ]),
          a("div", { staticClass: "right-box" }, [
            a(
              "div",
              { staticClass: "el-input el-input--small el-input--prefix" },
              [
                a("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.inputValue,
                      expression: "inputValue",
                    },
                  ],
                  staticClass: "el-input__inner",
                  attrs: {
                    type: "text",
                    autocomplete: "off",
                    placeholder: "搜索",
                  },
                  domProps: { value: t.inputValue },
                  on: {
                    keyup: function(s) {
                      return !s.type.indexOf("key") &&
                        t._k(s.keyCode, "enter", 13, s.key, "Enter")
                        ? null
                        : t.toResult(s);
                    },
                    input: function(s) {
                      s.target.composing || (t.inputValue = s.target.value);
                    },
                  },
                }),
                t._m(1),
              ]
            ),
          ]),
        ]);
      },
      c = [
        function() {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("div", { staticClass: "left-box" }, [
            a("a", { attrs: { href: "https://hassanwong.top/" } }, [
              t._v("🍁 我的博客"),
            ]),
            a("a", { attrs: { href: "https://navi.hassanwong.top/" } }, [
              t._v("🚀 网址导航"),
            ]),
            a("a", { attrs: { href: "https://doc.hassanwong.top/" } }, [
              t._v("📃 我的文档"),
            ]),
            a(
              "a",
              { attrs: { href: "https://github.com/hassanblog//MusicBox" } },
              [t._v("🦄 项目源码")]
            ),
          ]);
        },
        function() {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("span", { staticClass: "el-input__prefix" }, [
            a("i", { staticClass: "el-input__icon el-icon-search" }),
          ]);
        },
      ],
      o = {
        name: "top",
        data: function() {
          return { inputValue: "" };
        },
        methods: {
          toResult: function() {
            "" == this.inputValue
              ? this.$message({
                  message: "搜索内容不能为空！",
                  type: "warning",
                })
              : this.$router.push("/result?query=" + this.inputValue);
          },
        },
      },
      r = o,
      u = a("2877"),
      p = Object(u["a"])(r, l, c, !1, null, "55871c16", null),
      m = p.exports,
      v = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a("div", { staticClass: "index-container" }, [
          a("div", { staticClass: "nav" }, [
            a("ul", [
              a(
                "li",
                [
                  a("router-link", { attrs: { to: "/discovery" } }, [
                    a("span", { staticClass: "iconfont icon-find-music" }),
                    t._v(" 发现音乐 "),
                  ]),
                ],
                1
              ),
              a(
                "li",
                [
                  a("router-link", { attrs: { to: "/playlists" } }, [
                    a("span", { staticClass: "iconfont icon-music-list" }),
                    t._v(" 推荐歌单 "),
                  ]),
                ],
                1
              ),
              a(
                "li",
                [
                  a("router-link", { attrs: { to: "/songs" } }, [
                    a("span", { staticClass: "iconfont icon-music" }),
                    t._v(" 最新音乐 "),
                  ]),
                ],
                1
              ),
              a(
                "li",
                [
                  a("router-link", { attrs: { to: "/mvs" } }, [
                    a("span", { staticClass: "iconfont icon-mv" }),
                    t._v(" 最新MV "),
                  ]),
                ],
                1
              ),
            ]),
          ]),
          a(
            "div",
            { staticClass: "main" },
            [a("router-view", { key: t.key })],
            1
          ),
          a("div", { staticClass: "player" }, [
            a("audio", {
              attrs: { src: t.musicUrl, autoplay: "", controls: "" },
            }),
          ]),
        ]);
      },
      d = [],
      h = {
        name: "index",
        data: function() {
          return {
            musicUrl:
              "http://m7.music.126.net/20200303182550/8aa5971b1630d1527a922ccd2b97f392/ymusic/035d/0109/520e/478f86cc9f6c6539f7c8ed3e06c1bf8e.mp3",
          };
        },
        computed: {
          key: function() {
            return this.$route.path + Math.random();
          },
        },
      },
      C = h,
      g = Object(u["a"])(C, v, d, !1, null, null, null),
      f = g.exports,
      _ = { name: "app", components: { top: m, index: f } },
      y = _,
      b = Object(u["a"])(y, n, e, !1, null, null, null),
      w = b.exports,
      k = a("5c96"),
      L = a.n(k),
      x = (a("0fae"), a("d940c"), a("8c4f")),
      $ = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a(
          "div",
          { staticClass: "discovery-container" },
          [
            a(
              "el-carousel",
              { attrs: { interval: 4e3, type: "card" } },
              t._l(t.banners, function(t, s) {
                return a("el-carousel-item", { key: s }, [
                  a("img", { attrs: { src: t.imageUrl } }),
                ]);
              }),
              1
            ),
            a("div", { staticClass: "recommend" }, [
              a("h3", { staticClass: "title" }, [t._v(" 推荐歌单 ")]),
              a(
                "div",
                { staticClass: "items" },
                t._l(t.list, function(s, i) {
                  return a(
                    "div",
                    {
                      key: i,
                      staticClass: "item",
                      on: {
                        click: function(a) {
                          return t.toPlayList(s.id);
                        },
                      },
                    },
                    [
                      a("div", { staticClass: "img-wrap" }, [
                        a("div", { staticClass: "desc-wrap" }, [
                          a("span", { staticClass: "desc" }, [
                            t._v(t._s(s.copywriter)),
                          ]),
                        ]),
                        a("img", { attrs: { src: s.picUrl, alt: "" } }),
                        a("span", { staticClass: "iconfont icon-play" }),
                      ]),
                      a("p", { staticClass: "name" }, [t._v(t._s(s.name))]),
                    ]
                  );
                }),
                0
              ),
            ]),
            a("div", { staticClass: "news" }, [
              a("h3", { staticClass: "title" }, [t._v(" 最新音乐 ")]),
              a(
                "div",
                { staticClass: "items" },
                t._l(t.songs, function(s, i) {
                  return a("div", { key: i, staticClass: "item" }, [
                    a("div", { staticClass: "img-wrap" }, [
                      a("img", { attrs: { src: s.picUrl } }),
                      a("span", {
                        staticClass: "iconfont icon-play",
                        on: {
                          click: function(a) {
                            return t.play(s.id);
                          },
                        },
                      }),
                    ]),
                    a("div", { staticClass: "song-wrap" }, [
                      a("div", { staticClass: "song-name" }, [
                        t._v(t._s(s.name) + "}"),
                      ]),
                      a("div", { staticClass: "singer" }, [
                        t._v(t._s(s.song.artists[0].name)),
                      ]),
                    ]),
                  ]);
                }),
                0
              ),
            ]),
            a("div", { staticClass: "mvs" }, [
              a("h3", { staticClass: "title" }, [t._v("推荐MV")]),
              a(
                "div",
                { staticClass: "items" },
                t._l(t.mv, function(s, i) {
                  return a(
                    "div",
                    {
                      key: i,
                      staticClass: "item",
                      on: {
                        click: function(a) {
                          return t.toMv(s.id);
                        },
                      },
                    },
                    [
                      a("div", { staticClass: "img-wrap" }, [
                        a("img", { attrs: { src: s.picUrl, alt: "" } }),
                        a("span", { staticClass: "iconfont icon-play" }),
                        a("div", { staticClass: "num-wrap" }, [
                          a("div", { staticClass: "iconfont icon-play" }),
                          a("div", { staticClass: "num" }, [
                            t._v(t._s(s.playCount)),
                          ]),
                        ]),
                      ]),
                      a("div", { staticClass: "info-wrap" }, [
                        a("div", { staticClass: "name" }, [t._v(t._s(s.name))]),
                        a("div", { staticClass: "singer" }, [
                          t._v(t._s(s.artistName)),
                        ]),
                      ]),
                    ]
                  );
                }),
                0
              ),
            ]),
          ],
          1
        );
      },
      M = [],
      I = a("bc3a"),
      O = a.n(I),
      D = {
        name: "discovery",
        data: function() {
          return { banners: [], list: [], songs: [], mv: [] };
        },
        created: function() {
          var t = this;
          O()({ url: "http://47.100.104.176:3000/banner", method: "get" }).then(
            function(s) {
              console.log(s), (t.banners = s.data.banners);
            }
          ),
            O()({
              url: "https://music.cyrilstudio.top/personalized",
              method: "get",
              params: { limit: 10 },
            }).then(function(s) {
              console.log(s), (t.list = s.data.result);
            }),
            O()({
              url: "https://music.cyrilstudio.top/personalized/newsong",
              method: "get",
            }).then(function(s) {
              console.log(s), (t.songs = s.data.result);
            }),
            O()({
              url: "https://music.cyrilstudio.top/personalized/mv",
              method: "get",
            }).then(function(s) {
              console.log(s), (t.mv = s.data.result);
            });
        },
        methods: {
          play: function(t) {
            var s = this;
            O()({
              url: "https://music.cyrilstudio.top/song/url",
              method: "get",
              params: { id: t },
            }).then(function(t) {
              console.log(t);
              var a = t.data.data[0].url;
              s.$parent.musicUrl = a;
            });
          },
          toPlayList: function(t) {
            this.$router.push("/playlist?id=".concat(t));
          },
          toMv: function(t) {
            this.$router.push("/mv?id=".concat(t));
          },
        },
      },
      U = D,
      T = Object(u["a"])(U, $, M, !1, null, null, null),
      j = T.exports,
      q = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a(
          "div",
          { staticClass: "playlists-container" },
          [
            a("div", { staticClass: "top-card" }, [
              a("div", { staticClass: "icon-wrap" }, [
                a("img", { attrs: { src: t.topList.coverImgUrl, alt: "" } }),
              ]),
              a("div", { staticClass: "content-wrap" }, [
                a("div", { staticClass: "tag" }, [t._v("精品歌单")]),
                a("div", { staticClass: "title" }, [
                  t._v(" " + t._s(t.topList.name) + " "),
                ]),
                a("div", { staticClass: "info" }, [
                  t._v(" " + t._s(t.topList.description) + " "),
                ]),
              ]),
              a("img", {
                staticClass: "bg",
                attrs: { src: t.topList.coverImgUrl, alt: "" },
              }),
              a("div", { staticClass: "bg-mask" }),
            ]),
            a("div", { staticClass: "tab-container" }, [
              a("div", { staticClass: "tab-bar" }, [
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "全部" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "全部";
                      },
                    },
                  },
                  [t._v("全部")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "欧美" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "欧美";
                      },
                    },
                  },
                  [t._v("欧美")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "华语" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "华语";
                      },
                    },
                  },
                  [t._v("华语")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "流行" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "流行";
                      },
                    },
                  },
                  [t._v("流行")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "说唱" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "说唱";
                      },
                    },
                  },
                  [t._v("说唱")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "摇滚" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "摇滚";
                      },
                    },
                  },
                  [t._v("摇滚")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "民谣" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "民谣";
                      },
                    },
                  },
                  [t._v("民谣")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "电子" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "电子";
                      },
                    },
                  },
                  [t._v("电子")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "轻音乐" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "轻音乐";
                      },
                    },
                  },
                  [t._v("轻音乐")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "影视原声" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "影视原声";
                      },
                    },
                  },
                  [t._v("影视原声")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "ACG" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "ACG";
                      },
                    },
                  },
                  [t._v("ACG")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "怀旧" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "怀旧";
                      },
                    },
                  },
                  [t._v("怀旧")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "治愈" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "治愈";
                      },
                    },
                  },
                  [t._v("治愈")]
                ),
                a(
                  "span",
                  {
                    staticClass: "item",
                    class: { active: "旅行" == t.tag },
                    on: {
                      click: function(s) {
                        t.tag = "旅行";
                      },
                    },
                  },
                  [t._v("旅行")]
                ),
              ]),
              a("div", { staticClass: "tab-content" }, [
                a(
                  "div",
                  { staticClass: "items" },
                  t._l(t.playList, function(s, i) {
                    return a(
                      "div",
                      {
                        key: i,
                        staticClass: "item",
                        on: {
                          click: function(a) {
                            return t.toPlayList(s.id);
                          },
                        },
                      },
                      [
                        a("div", { staticClass: "img-wrap" }, [
                          a("div", { staticClass: "num-wrap" }, [
                            t._v(" 播放量: "),
                            a("span", { staticClass: "num" }, [
                              t._v(t._s(s.playCount)),
                            ]),
                          ]),
                          a("img", { attrs: { src: s.coverImgUrl } }),
                          a("span", { staticClass: "iconfont icon-play" }),
                        ]),
                        a("p", { staticClass: "name" }, [t._v(t._s(s.name))]),
                      ]
                    );
                  }),
                  0
                ),
              ]),
            ]),
            a("el-pagination", {
              attrs: {
                background: "",
                layout: "prev, pager, next",
                total: t.total,
                "current-page": t.page,
                "page-size": 10,
              },
              on: { "current-change": t.handleCurrentChange },
            }),
          ],
          1
        );
      },
      S = [],
      E = {
        name: "recommend",
        data: function() {
          return { total: 0, page: 1, topList: {}, playList: [], tag: "全部" };
        },
        watch: {
          tag: function() {
            console.log(this.tag),
              this.topData(),
              this.listData(),
              (this.page = 1);
          },
        },
        created: function() {
          this.topData(), this.listData();
        },
        methods: {
          toPlayList: function(t) {
            this.$router.push("/playlist?id=".concat(t));
          },
          topData: function() {
            var t = this;
            O()({
              url: "https://music.cyrilstudio.top/top/playlist/highquality",
              method: "get",
              params: { limit: 1, cat: this.tag },
            }).then(function(s) {
              console.log(s),
                0 != s.data.playlists.length &&
                  (t.topList = s.data.playlists[0]);
            });
          },
          listData: function() {
            var t = this;
            O()({
              url: "https://music.cyrilstudio.top/top/playlist/",
              method: "get",
              params: {
                limit: 10,
                offset: 10 * (this.page - 1),
                cat: this.tag,
              },
            }).then(function(s) {
              console.log(s),
                (t.total = s.data.total),
                (t.playList = s.data.playlists);
            });
          },
          handleCurrentChange: function(t) {
            console.log("当前页: ".concat(t)), (this.page = t), this.listData();
          },
        },
      },
      P = E,
      R = Object(u["a"])(P, q, S, !1, null, null, null),
      V = R.exports,
      z = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a("div", { staticClass: "songs-container" }, [
          a("div", { staticClass: "tab-bar" }, [
            a(
              "span",
              {
                staticClass: "item",
                class: { active: "0" == t.tag },
                on: {
                  click: function(s) {
                    t.tag = "0";
                  },
                },
              },
              [t._v("全部")]
            ),
            a(
              "span",
              {
                staticClass: "item",
                class: { active: "7" == t.tag },
                on: {
                  click: function(s) {
                    t.tag = "7";
                  },
                },
              },
              [t._v("华语")]
            ),
            a(
              "span",
              {
                staticClass: "item",
                class: { active: "96" == t.tag },
                on: {
                  click: function(s) {
                    t.tag = "96";
                  },
                },
              },
              [t._v("欧美")]
            ),
            a(
              "span",
              {
                staticClass: "item",
                class: { active: "8" == t.tag },
                on: {
                  click: function(s) {
                    t.tag = "8";
                  },
                },
              },
              [t._v("日本")]
            ),
            a(
              "span",
              {
                staticClass: "item",
                class: { active: "16" == t.tag },
                on: {
                  click: function(s) {
                    t.tag = "16";
                  },
                },
              },
              [t._v("韩国")]
            ),
          ]),
          a("table", { staticClass: "el-table playlit-table" }, [
            t._m(0),
            a(
              "tbody",
              t._l(t.list, function(s, i) {
                return a("tr", { key: i, staticClass: "el-table__row" }, [
                  a("td", [t._v(t._s(i + 1))]),
                  a("td", [
                    a("div", { staticClass: "img-wrap" }, [
                      a("img", { attrs: { src: s.album.picUrl, alt: "" } }),
                      a("span", {
                        staticClass: "iconfont icon-play",
                        on: {
                          click: function(a) {
                            return t.play(s.id);
                          },
                        },
                      }),
                    ]),
                  ]),
                  a("td", [
                    a("div", { staticClass: "song-wrap" }, [
                      a("div", { staticClass: "name-wrap" }, [
                        a("span", [t._v(t._s(s.name))]),
                        a("span", { staticClass: "iconfont icon-mv" }),
                      ]),
                      a("span", [t._v(t._s(s.album.name))]),
                    ]),
                  ]),
                  a("td", [t._v(t._s(s.artists[0].name))]),
                  a("td", [t._v(t._s(s.album.name))]),
                  a("td", [t._v(t._s(s.duration))]),
                ]);
              }),
              0
            ),
          ]),
        ]);
      },
      N = [
        function() {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("thead", [
            a("th"),
            a("th"),
            a("th", [t._v("音乐标题")]),
            a("th", [t._v("歌手")]),
            a("th", [t._v("专辑")]),
            a("th", [t._v("时长")]),
          ]);
        },
      ],
      H =
        (a("99af"),
        {
          name: "songs",
          data: function() {
            return { list: [], tag: "96" };
          },
          watch: {
            tag: function() {
              console.log(this.tag), this.songList();
            },
          },
          created: function() {
            this.songList();
          },
          methods: {
            songList: function() {
              var t = this;
              O()({
                url: "https://music.cyrilstudio.top/top/song",
                method: "get",
                params: { type: this.tag },
              }).then(function(s) {
                console.log(s), (t.list = s.data.data);
                for (var a = 0; a < t.list.length; a++) {
                  var i = t.list[a].duration,
                    n = parseInt(i / 1e3 / 60);
                  n < 10 && (n = "0" + n);
                  var e = parseInt((i / 1e3) % 60);
                  e < 10 && (e = "0" + e),
                    (t.list[a].duration = "".concat(n, ":").concat(e));
                }
              });
            },
            play: function(t) {
              var s = this;
              O()({
                url: "https://music.cyrilstudio.top/song/url",
                method: "get",
                params: { id: t },
              }).then(function(t) {
                var a = t.data.data[0].url;
                s.$parent.musicUrl = a;
              });
            },
          },
        }),
      A = H,
      G = Object(u["a"])(A, z, N, !1, null, null, null),
      F = G.exports,
      J = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a("div", { staticClass: "mvs-container" }, [
          a("div", { staticClass: "filter-wrap" }, [
            a("div", { staticClass: "seciton-wrap" }, [
              a("span", { staticClass: "section-type" }, [t._v("地区:")]),
              a("ul", { staticClass: "tabs-wrap" }, [
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "全部" == t.area },
                      on: {
                        click: function(s) {
                          t.area = "全部";
                        },
                      },
                    },
                    [t._v("全部")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "内地" == t.area },
                      on: {
                        click: function(s) {
                          t.area = "内地";
                        },
                      },
                    },
                    [t._v("内地")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "港台" == t.area },
                      on: {
                        click: function(s) {
                          t.area = "港台";
                        },
                      },
                    },
                    [t._v("港台")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "欧美" == t.area },
                      on: {
                        click: function(s) {
                          t.area = "欧美";
                        },
                      },
                    },
                    [t._v("欧美")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "日本" == t.area },
                      on: {
                        click: function(s) {
                          t.area = "日本";
                        },
                      },
                    },
                    [t._v("日本")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "韩国" == t.area },
                      on: {
                        click: function(s) {
                          t.area = "韩国";
                        },
                      },
                    },
                    [t._v("韩国")]
                  ),
                ]),
              ]),
            ]),
            a("div", { staticClass: "type-wrap" }, [
              a("span", { staticClass: "type-type" }, [t._v("类型:")]),
              a("ul", { staticClass: "tabs-wrap" }, [
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "全部" == t.type },
                      on: {
                        click: function(s) {
                          t.type = "全部";
                        },
                      },
                    },
                    [t._v("全部")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "官方版" == t.type },
                      on: {
                        click: function(s) {
                          t.type = "官方版";
                        },
                      },
                    },
                    [t._v("官方版")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "原声" == t.type },
                      on: {
                        click: function(s) {
                          t.type = "原声";
                        },
                      },
                    },
                    [t._v("原声")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "现场版" == t.type },
                      on: {
                        click: function(s) {
                          t.type = "现场版";
                        },
                      },
                    },
                    [t._v("现场版")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "网易出品" == t.type },
                      on: {
                        click: function(s) {
                          t.type = "网易出品";
                        },
                      },
                    },
                    [t._v("网易出品")]
                  ),
                ]),
              ]),
            ]),
            a("div", { staticClass: "order-wrap" }, [
              a("span", { staticClass: "order-type" }, [t._v("排序:")]),
              a("ul", { staticClass: "tabs-wrap" }, [
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "上升最快" == t.order },
                      on: {
                        click: function(s) {
                          t.order = "上升最快";
                        },
                      },
                    },
                    [t._v("上升最快")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "最热" == t.order },
                      on: {
                        click: function(s) {
                          t.order = "最热";
                        },
                      },
                    },
                    [t._v("最热")]
                  ),
                ]),
                a("li", { staticClass: "tab" }, [
                  a(
                    "span",
                    {
                      staticClass: "title",
                      class: { active: "最新" == t.order },
                      on: {
                        click: function(s) {
                          t.order = "最新";
                        },
                      },
                    },
                    [t._v("最新")]
                  ),
                ]),
              ]),
            ]),
          ]),
          a(
            "div",
            { staticClass: "mvs" },
            [
              a(
                "div",
                { staticClass: "items" },
                t._l(t.list, function(s, i) {
                  return a(
                    "div",
                    {
                      key: i,
                      staticClass: "item",
                      on: {
                        click: function(a) {
                          return t.toMv(s.id);
                        },
                      },
                    },
                    [
                      a("div", { staticClass: "img-wrap" }, [
                        a("img", { attrs: { src: s.cover, alt: "" } }),
                        a("div", { staticClass: "num-wrap" }, [
                          a("div", { staticClass: "iconfont icon-play" }),
                          a("div", { staticClass: "num" }, [
                            t._v(t._s(s.playCount)),
                          ]),
                        ]),
                      ]),
                      a("div", { staticClass: "info-wrap" }, [
                        a("div", { staticClass: "name" }, [t._v(t._s(s.name))]),
                        a("div", { staticClass: "singer" }, [
                          t._v(t._s(s.artistName)),
                        ]),
                      ]),
                    ]
                  );
                }),
                0
              ),
              a("el-pagination", {
                attrs: {
                  background: "",
                  layout: "prev, pager, next",
                  total: t.total,
                  "current-page": t.page,
                  "page-size": 8,
                  limit: t.limit,
                },
                on: { "current-change": t.handleCurrentChange },
              }),
            ],
            1
          ),
        ]);
      },
      Y = [],
      B = {
        name: "mvs",
        data: function() {
          return {
            total: 20,
            page: 1,
            limit: 8,
            area: "全部",
            type: "全部",
            order: "上升最快",
            list: [],
          };
        },
        watch: {
          area: function() {
            (this.page = 1), this.getMvList();
          },
          type: function() {
            (this.page = 1), this.getMvList();
          },
          order: function() {
            (this.page = 1), this.getMvList();
          },
        },
        created: function() {
          this.getMvList();
        },
        methods: {
          getMvList: function() {
            var t = this;
            O()({
              url: "https://music.cyrilstudio.top/mv/all",
              method: "get",
              params: {
                area: this.area,
                type: this.type,
                order: this.order,
                limit: this.limit,
                offset: (this.page - 1) * this.limit,
              },
            }).then(function(s) {
              console.log(s), (t.list = s.data.data);
              for (var a = 0; a < t.list.length; a++)
                t.list[a].playCount > 1e5 &&
                  (t.list[a].playCount =
                    parseInt(t.list[a].playCount / 1e4) + "万");
              s.data.count && (t.total = s.data.count);
            });
          },
          toMv: function(t) {
            this.$router.push("/mv?id=".concat(t));
          },
          handleCurrentChange: function(t) {
            console.log("当前页: ".concat(t)),
              (this.page = t),
              this.getMvList();
          },
        },
      },
      K = B,
      Q = Object(u["a"])(K, J, Y, !1, null, null, null),
      W = Q.exports,
      X = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a(
          "div",
          { staticClass: "result-container" },
          [
            a("div", { staticClass: "title-wrap" }, [
              a("h2", { staticClass: "title" }, [
                t._v(t._s(t.$route.query.query)),
              ]),
              a("span", { staticClass: "sub-title" }, [
                t._v("找到" + t._s(t.songCount) + "个结果"),
              ]),
            ]),
            a(
              "el-tabs",
              {
                model: {
                  value: t.activeIndex,
                  callback: function(s) {
                    t.activeIndex = s;
                  },
                  expression: "activeIndex",
                },
              },
              [
                a("el-tab-pane", { attrs: { label: "歌曲", name: "songs" } }, [
                  a("table", { staticClass: "el-table" }, [
                    a("thead", [
                      a("th"),
                      a("th", [t._v("音乐标题")]),
                      a("th", [t._v("歌手")]),
                      a("th", [t._v("专辑")]),
                      a("th", [t._v("时长")]),
                    ]),
                    a(
                      "tbody",
                      t._l(t.songList, function(s, i) {
                        return a(
                          "tr",
                          {
                            key: i,
                            staticClass: "el-table__row",
                            on: {
                              dblclick: function(a) {
                                return t.playMusic(s.id);
                              },
                            },
                          },
                          [
                            a("td", [t._v(t._s(i + 1))]),
                            a("td", [
                              a("div", { staticClass: "song-wrap" }, [
                                a("div", { staticClass: "name-wrap" }, [
                                  a("span", [t._v(t._s(s.name))]),
                                  0 != s.mvid
                                    ? a("span", {
                                        staticClass: "iconfont icon-mv",
                                      })
                                    : t._e(),
                                ]),
                                0 != s.alias.length
                                  ? a("span", [t._v(t._s(s.alias[0]))])
                                  : t._e(),
                              ]),
                            ]),
                            a("td", [t._v(t._s(s.artists[0].name))]),
                            a("td", [t._v(t._s(s.album.name))]),
                            a("td", [t._v(t._s(s.duration))]),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ]),
                a("el-tab-pane", { attrs: { label: "歌单", name: "lists" } }, [
                  a(
                    "div",
                    { staticClass: "items" },
                    t._l(t.playList, function(s, i) {
                      return a(
                        "div",
                        {
                          key: i,
                          staticClass: "item",
                          on: {
                            click: function(a) {
                              return t.toPlayList(s.id);
                            },
                          },
                        },
                        [
                          a("div", { staticClass: "img-wrap" }, [
                            a("div", { staticClass: "num-wrap" }, [
                              t._v(" 播放量: "),
                              a("span", { staticClass: "num" }, [
                                t._v(t._s(s.playCount)),
                              ]),
                            ]),
                            a("img", {
                              attrs: { src: s.coverImgUrl, alt: "" },
                            }),
                            a("span", { staticClass: "iconfont icon-play" }),
                          ]),
                          a("p", { staticClass: "name" }, [t._v(t._s(s.name))]),
                        ]
                      );
                    }),
                    0
                  ),
                ]),
                a("el-tab-pane", { attrs: { label: "MV", name: "mv" } }, [
                  a(
                    "div",
                    { staticClass: "items mv" },
                    t._l(t.mvList, function(s, i) {
                      return a(
                        "div",
                        {
                          key: i,
                          staticClass: "item",
                          on: {
                            click: function(a) {
                              return t.toMv(s.id);
                            },
                          },
                        },
                        [
                          a("div", { staticClass: "img-wrap" }, [
                            a("img", { attrs: { src: s.cover, alt: "" } }),
                            a("span", { staticClass: "iconfont icon-play" }),
                            a("div", { staticClass: "num-wrap" }, [
                              a("div", { staticClass: "iconfont icon-play" }),
                              a("div", { staticClass: "num" }, [
                                t._v(t._s(s.playCount)),
                              ]),
                            ]),
                            a("span", { staticClass: "time" }, [t._v("02:43")]),
                          ]),
                          a("div", { staticClass: "info-wrap" }, [
                            a("div", { staticClass: "name" }, [
                              t._v(t._s(s.name)),
                            ]),
                            a("div", { staticClass: "singer" }, [
                              t._v(t._s(s.artistName)),
                            ]),
                          ]),
                        ]
                      );
                    }),
                    0
                  ),
                ]),
              ],
              1
            ),
            a("el-pagination", {
              attrs: {
                background: "",
                layout: "prev, pager, next",
                total: t.total,
                "current-page": t.page,
                "page-size": 10,
                limit: t.limit,
              },
              on: { "current-change": t.handleCurrentChange },
            }),
          ],
          1
        );
      },
      Z = [],
      tt =
        (a("ac1f"),
        a("841c"),
        {
          name: "result",
          data: function() {
            return {
              activeIndex: "songs",
              total: 0,
              page: 1,
              limit: 10,
              songList: [],
              playList: [],
              mvList: [],
              songCount: 0,
              type: 1,
            };
          },
          watch: {
            activeIndex: function() {
              var t = this;
              switch (((this.page = 1), this.activeIndex)) {
                case "songs":
                  this.type = 1;
                  break;
                case "lists":
                  this.type = 1e3;
                  break;
                case "mv":
                  this.type = 1004;
                  break;
                default:
                  break;
              }
              O()({
                url: "https://music.cyrilstudio.top/search",
                method: "get",
                params: {
                  keywords: this.$route.query.query,
                  limit: this.limit,
                  offset: (this.page - 1) * this.limit,
                  type: this.type,
                },
              }).then(function(s) {
                if ((console.log(s), 1 == t.type)) {
                  (t.songList = s.data.result.songs),
                    (t.songCount = s.data.result.songCount),
                    (t.total = s.data.result.songCount);
                  for (var a = 0; a < t.songList.length; a++) {
                    var i = t.songList[a].duration,
                      n = parseInt(i / 1e3 / 60);
                    n < 10 && (n = "0" + n);
                    var e = parseInt((i / 1e3) % 60);
                    e < 10 && (e = "0" + e),
                      (t.songList[a].duration = "".concat(n, ":").concat(e));
                  }
                } else if (1e3 == t.type) {
                  (t.playList = s.data.result.playlists),
                    (t.total = s.data.result.playlistCount);
                  for (var l = 0; l < t.playList.length; l++)
                    t.playList[l].playCount > 1e5 &&
                      (t.playList[l].playCount =
                        parseInt(t.playList[l].playCount / 1e4) + "万");
                } else if (1004 == t.type) {
                  (t.mvList = s.data.result.mvs),
                    (t.total = s.data.result.mvCount);
                  for (var c = 0; c < t.mvList.length; c++)
                    t.mvList[c].playCount > 1e5 &&
                      (t.mvList[c].playCount =
                        parseInt(t.mvList[c].playCount / 1e4) + "万");
                }
              });
            },
          },
          created: function() {
            this.search();
          },
          methods: {
            search: function() {
              var t = this;
              O()({
                url: "https://music.cyrilstudio.top/search",
                method: "get",
                params: {
                  keywords: this.$route.query.query,
                  limit: this.limit,
                  offset: (this.page - 1) * this.limit,
                  type: 1,
                },
              }).then(
                function(s) {
                  if ((console.log(s), s.data.hasOwnProperty("msg")))
                    t.$message({ message: "搜索内容异常！", type: "warning" });
                  else {
                    (t.songList = s.data.result.songs),
                      (t.songCount = s.data.result.songCount),
                      (t.total = s.data.result.songCount);
                    for (var a = 0; a < t.songList.length; a++) {
                      var i = t.songList[a].duration,
                        n = parseInt(i / 1e3 / 60);
                      n < 10 && (n = "0" + n);
                      var e = parseInt((i / 1e3) % 60);
                      e < 10 && (e = "0" + e),
                        (t.songList[a].duration = "".concat(n, ":").concat(e));
                    }
                  }
                },
                function(t) {
                  console.log(t);
                }
              );
            },
            playMusic: function(t) {
              var s = this;
              O()({
                url: "https://music.cyrilstudio.top/song/url",
                method: "get",
                params: { id: t },
              }).then(function(t) {
                var a = t.data.data[0].url;
                s.$parent.musicUrl = a;
              });
            },
            toPlayList: function(t) {
              this.$router.push("/playlist?id=".concat(t));
            },
            toMv: function(t) {
              this.$router.push("/mv?id=".concat(t));
            },
            handleCurrentChange: function(t) {
              var s = this;
              console.log("当前页: ".concat(t)),
                (this.page = t),
                O()({
                  url: "https://music.cyrilstudio.top/search",
                  method: "get",
                  params: {
                    keywords: this.$route.query.query,
                    limit: this.limit,
                    offset: (this.page - 1) * this.limit,
                    type: this.type,
                  },
                }).then(function(t) {
                  if ((console.log(t), 1 == s.type)) {
                    (s.songList = t.data.result.songs),
                      (s.songCount = t.data.result.songCount),
                      (s.total = t.data.result.songCount);
                    for (var a = 0; a < s.songList.length; a++) {
                      var i = s.songList[a].duration,
                        n = parseInt(i / 1e3 / 60);
                      n < 10 && (n = "0" + n);
                      var e = parseInt((i / 1e3) % 60);
                      e < 10 && (e = "0" + e),
                        (s.songList[a].duration = "".concat(n, ":").concat(e));
                    }
                  } else if (1e3 == s.type) {
                    (s.playList = t.data.result.playlists),
                      (s.total = t.data.result.playlistCount);
                    for (var l = 0; l < s.playList.length; l++)
                      s.playList[l].playCount > 1e5 &&
                        (s.playList[l].playCount =
                          parseInt(s.playList[l].playCount / 1e4) + "万");
                  } else if (1004 == s.type) {
                    (s.mvList = t.data.result.mvs),
                      (s.total = t.data.result.mvCount);
                    for (var c = 0; c < s.mvList.length; c++)
                      s.mvList[c].playCount > 1e5 &&
                        (s.mvList[c].playCount =
                          parseInt(s.mvList[c].playCount / 1e4) + "万");
                  }
                });
            },
          },
        }),
      st = tt,
      at = Object(u["a"])(st, X, Z, !1, null, null, null),
      it = at.exports,
      nt = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a(
          "div",
          { staticClass: "playlist-container" },
          [
            a("div", { staticClass: "top-wrap" }, [
              a("div", { staticClass: "img-wrap" }, [
                a("img", { attrs: { src: t.detail.coverImgUrl } }),
              ]),
              a("div", { staticClass: "info-wrap" }, [
                a("p", { staticClass: "title" }, [t._v(t._s(t.detail.name))]),
                void 0 != t.detail.creator
                  ? a("div", { staticClass: "author-wrap" }, [
                      a("img", {
                        staticClass: "avatar",
                        attrs: { src: t.detail.creator.avatarUrl },
                      }),
                      a("span", { staticClass: "name" }, [
                        t._v(t._s(t.detail.creator.nickname)),
                      ]),
                      a("span", { staticClass: "time" }, [
                        t._v(t._s(t.detail.createTime)),
                      ]),
                    ])
                  : t._e(),
                t._m(0),
                a("div", { staticClass: "tag-wrap" }, [
                  a("span", { staticClass: "title" }, [t._v("标签:")]),
                  a(
                    "ul",
                    t._l(t.detail.tags, function(s, i) {
                      return a("li", { key: i }, [t._v(t._s(s))]);
                    }),
                    0
                  ),
                ]),
                a("div", { staticClass: "desc-wrap" }, [
                  a("span", { staticClass: "title" }, [t._v("简介:")]),
                  a("span", { staticClass: "desc" }, [
                    t._v(t._s(t.detail.description)),
                  ]),
                ]),
              ]),
            ]),
            a(
              "el-tabs",
              {
                model: {
                  value: t.activeIndex,
                  callback: function(s) {
                    t.activeIndex = s;
                  },
                  expression: "activeIndex",
                },
              },
              [
                a("el-tab-pane", { attrs: { label: "歌曲列表", name: "1" } }, [
                  a("table", { staticClass: "el-table playlit-table" }, [
                    a("thead", [
                      a("th"),
                      a("th"),
                      a("th", [t._v("音乐标题")]),
                      a("th", [t._v("歌手")]),
                      a("th", [t._v("专辑")]),
                      a("th", [t._v("时长")]),
                    ]),
                    a(
                      "tbody",
                      t._l(t.detail.tracks, function(s, i) {
                        return a(
                          "tr",
                          {
                            key: i,
                            staticClass: "el-table__row",
                            on: {
                              click: function(a) {
                                return t.play(s.id);
                              },
                            },
                          },
                          [
                            a("td", [t._v(t._s(i + 1))]),
                            a("td", [
                              a("div", { staticClass: "img-wrap" }, [
                                a("img", {
                                  attrs: { src: s.al.picUrl, alt: "" },
                                }),
                                a("span", {
                                  staticClass: "iconfont icon-play",
                                }),
                              ]),
                            ]),
                            a("td", [
                              a("div", { staticClass: "song-wrap" }, [
                                a("div", { staticClass: "name-wrap" }, [
                                  a("span", [t._v(t._s(s.name))]),
                                  a("span", {
                                    staticClass: "iconfont icon-mv",
                                  }),
                                ]),
                                a("span"),
                              ]),
                            ]),
                            a("td", [t._v(t._s(s.ar[0].name))]),
                            a("td", [t._v(t._s(s.al.name))]),
                            a("td", [t._v(t._s(s.dt))]),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ]),
                a(
                  "el-tab-pane",
                  { attrs: { label: "评论" + t.TotalSum, name: "2" } },
                  [
                    0 != t.hotComments.length
                      ? a("div", { staticClass: "comment-wrap" }, [
                          a("p", { staticClass: "title" }, [
                            t._v("精彩评论"),
                            a("span", { staticClass: "number" }, [
                              t._v("(" + t._s(t.hotTotal) + ")"),
                            ]),
                          ]),
                          a(
                            "div",
                            { staticClass: "comments-wrap" },
                            t._l(t.hotComments, function(s, i) {
                              return a("div", { key: i, staticClass: "item" }, [
                                a("div", { staticClass: "icon-wrap" }, [
                                  a("img", {
                                    attrs: { src: s.user.avatarUrl },
                                  }),
                                ]),
                                a("div", { staticClass: "content-wrap" }, [
                                  a("div", { staticClass: "content" }, [
                                    a("span", { staticClass: "name" }, [
                                      t._v(t._s(s.user.nickname) + "："),
                                    ]),
                                    a("span", { staticClass: "comment" }, [
                                      t._v(t._s(s.content)),
                                    ]),
                                  ]),
                                  0 != s.beReplied.length
                                    ? a("div", { staticClass: "re-content" }, [
                                        a("span", { staticClass: "name" }, [
                                          t._v(
                                            t._s(s.beReplied[0].user.nickname) +
                                              ":"
                                          ),
                                        ]),
                                        a("span", { staticClass: "comment" }, [
                                          t._v(t._s(s.beReplied[0].content)),
                                        ]),
                                      ])
                                    : t._e(),
                                  a("div", { staticClass: "date" }, [
                                    t._v(t._s(s.time)),
                                  ]),
                                ]),
                              ]);
                            }),
                            0
                          ),
                        ])
                      : t._e(),
                    a("div", { staticClass: "comment-wrap" }, [
                      a("p", { staticClass: "title" }, [
                        t._v("最新评论"),
                        a("span", { staticClass: "number" }, [
                          t._v("(" + t._s(t.comTotal) + ")"),
                        ]),
                      ]),
                      a(
                        "div",
                        { staticClass: "comments-wrap" },
                        t._l(t.comments, function(s, i) {
                          return a("div", { key: i, staticClass: "item" }, [
                            a("div", { staticClass: "icon-wrap" }, [
                              a("img", { attrs: { src: s.user.avatarUrl } }),
                            ]),
                            a("div", { staticClass: "content-wrap" }, [
                              a("div", { staticClass: "content" }, [
                                a("span", { staticClass: "name" }, [
                                  t._v(t._s(s.user.nickname) + "："),
                                ]),
                                a("span", { staticClass: "comment" }, [
                                  t._v(t._s(s.content)),
                                ]),
                              ]),
                              0 != s.beReplied.length
                                ? a("div", { staticClass: "re-content" }, [
                                    a("span", { staticClass: "name" }, [
                                      t._v(
                                        t._s(s.beReplied[0].user.nickname) +
                                          "："
                                      ),
                                    ]),
                                    a("span", { staticClass: "comment" }, [
                                      t._v(t._s(s.beReplied[0].content)),
                                    ]),
                                  ])
                                : t._e(),
                              a("div", { staticClass: "date" }, [
                                t._v(t._s(s.time)),
                              ]),
                            ]),
                          ]);
                        }),
                        0
                      ),
                    ]),
                    a("el-pagination", {
                      attrs: {
                        background: "",
                        layout: "prev, pager, next",
                        total: t.total,
                        "current-page": t.page,
                        "page-size": 10,
                        limit: t.limit,
                      },
                      on: { "current-change": t.handleCurrentChange },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      et = [
        function() {
          var t = this,
            s = t.$createElement,
            a = t._self._c || s;
          return a("div", { staticClass: "play-wrap" }, [
            a("span", { staticClass: "iconfont icon-circle-play" }),
            a("span", { staticClass: "text" }, [t._v("播放全部")]),
          ]);
        },
      ],
      lt = {
        name: "playlist",
        data: function() {
          return {
            activeIndex: "1",
            total: 0,
            page: 1,
            limit: 10,
            detail: {},
            hotComments: [],
            hotTotal: 0,
            comTotal: 0,
            comments: [],
            TotalSum: 0,
          };
        },
        created: function() {
          var t = this;
          O()({
            url: "https://music.cyrilstudio.top/playlist/detail",
            method: "get",
            params: { id: this.$route.query.id },
          }).then(function(s) {
            console.log(s), (t.detail = s.data.playlist);
            for (var a = t.detail.tracks, i = 0; i < a.length; i++) {
              var n = a[i].dt,
                e = parseInt(n / 1e3 / 60);
              e < 10 && (e = "0" + e);
              var l = parseInt((n / 1e3) % 60);
              l < 10 && (l = "0" + l),
                (t.detail.tracks[i].dt = "".concat(e, ":").concat(l));
            }
          }),
            O()({
              url: "https://music.cyrilstudio.top/comment/hot",
              method: "get",
              params: { id: this.$route.query.id, type: 2 },
            }).then(function(s) {
              console.log(s),
                (t.hotComments = s.data.hotComments),
                (t.hotTotal = s.data.total);
              for (var a = 0; a < t.hotComments.length; a++) {
                var i = new Date(t.hotComments[a].time);
                (Date.prototype.toLocaleString = function() {
                  return (
                    (this.hour =
                      this.getHours() < 10
                        ? "0" + this.getHours()
                        : this.getHours()),
                    (this.minute =
                      this.getMinutes() < 10
                        ? "0" + this.getMinutes()
                        : this.getMinutes()),
                    (this.second =
                      this.getSeconds() < 10
                        ? "0" + this.getSeconds()
                        : this.getSeconds()),
                    this.getFullYear() +
                      "/" +
                      (this.getMonth() + 1) +
                      "/" +
                      this.getDate() +
                      "/ " +
                      this.hour +
                      ":" +
                      this.minute +
                      ":" +
                      this.second
                  );
                }),
                  (t.hotComments[a].time = i.toLocaleString());
              }
            }),
            this.getNewlist();
        },
        methods: {
          getNewlist: function() {
            var t = this;
            O()({
              url: "https://music.cyrilstudio.top/comment/playlist",
              method: "get",
              params: {
                id: this.$route.query.id,
                limit: this.limit,
                offset: (this.page - 1) * this.limit,
              },
            }).then(function(s) {
              console.log(s),
                (t.comTotal = s.data.total),
                (t.total = s.data.total),
                (t.TotalSum = t.comTotal + t.hotTotal),
                (t.comments = s.data.comments);
              for (var a = 0; a < t.comments.length; a++) {
                var i = new Date(t.comments[a].time);
                (Date.prototype.toLocaleString = function() {
                  return (
                    (this.hour =
                      this.getHours() < 10
                        ? "0" + this.getHours()
                        : this.getHours()),
                    (this.minute =
                      this.getMinutes() < 10
                        ? "0" + this.getMinutes()
                        : this.getMinutes()),
                    (this.second =
                      this.getSeconds() < 10
                        ? "0" + this.getSeconds()
                        : this.getSeconds()),
                    this.getFullYear() +
                      "/" +
                      (this.getMonth() + 1) +
                      "/" +
                      this.getDate() +
                      "/ " +
                      this.hour +
                      ":" +
                      this.minute +
                      ":" +
                      this.second
                  );
                }),
                  (t.comments[a].time = i.toLocaleString());
              }
            });
          },
          play: function(t) {
            var s = this;
            O()({
              url: "https://music.cyrilstudio.top/song/url",
              method: "get",
              params: { id: t },
            }).then(function(t) {
              var a = t.data.data[0].url;
              null == a || "" == a || void 0 == a
                ? s.$message({ message: "您没有取得权限！", type: "warning" })
                : (s.$parent.musicUrl = a);
            });
          },
          handleCurrentChange: function(t) {
            console.log("当前页: ".concat(t)),
              (this.page = t),
              this.getNewlist();
          },
        },
      },
      ct = lt,
      ot = Object(u["a"])(ct, nt, et, !1, null, null, null),
      rt = ot.exports,
      ut = function() {
        var t = this,
          s = t.$createElement,
          a = t._self._c || s;
        return a("div", { staticClass: "mv-container" }, [
          a(
            "div",
            { staticClass: "mv-wrap" },
            [
              a("h3", { staticClass: "title" }, [t._v("mv详情")]),
              a("div", { staticClass: "video-wrap" }, [
                a("video", {
                  attrs: { controls: "", autoplay: "", loop: "", src: t.url },
                }),
              ]),
              a("div", { staticClass: "info-wrap" }, [
                a("div", { staticClass: "singer-info" }, [
                  a("div", { staticClass: "avatar-wrap" }, [
                    a("img", { attrs: { src: t.mvData.cover } }),
                  ]),
                  void 0 != t.mvData.artists
                    ? a("span", { staticClass: "name" }, [
                        t._v(t._s(t.mvData.artists[0].name)),
                      ])
                    : t._e(),
                ]),
                a("div", { staticClass: "mv-info" }, [
                  a("h2", { staticClass: "title" }, [
                    t._v(t._s(t.mvData.name)),
                  ]),
                  a("span", { staticClass: "date" }, [
                    t._v("发布：" + t._s(t.mvData.publishTime)),
                  ]),
                  a("span", { staticClass: "number" }, [
                    t._v("播放：" + t._s(t.mvData.playCount) + " 次"),
                  ]),
                  a("p", { staticClass: "desc" }, [
                    t._v(" " + t._s(t.mvData.desc) + " "),
                  ]),
                ]),
              ]),
              void 0 != t.hotComments
                ? a("div", { staticClass: "comment-wrap" }, [
                    a("p", { staticClass: "title" }, [
                      t._v("精彩评论"),
                      a("span", { staticClass: "number" }, [
                        t._v("(" + t._s(t.hotTotal) + ")"),
                      ]),
                    ]),
                    a(
                      "div",
                      { staticClass: "comments-wrap" },
                      t._l(t.hotComments, function(s, i) {
                        return a("div", { key: i, staticClass: "item" }, [
                          a("div", { staticClass: "icon-wrap" }, [
                            a("img", { attrs: { src: s.user.avatarUrl } }),
                          ]),
                          a("div", { staticClass: "content-wrap" }, [
                            a("div", { staticClass: "content" }, [
                              a("span", { staticClass: "name" }, [
                                t._v(t._s(s.user.nickname) + "："),
                              ]),
                              a("span", { staticClass: "comment" }, [
                                t._v(t._s(s.content)),
                              ]),
                            ]),
                            0 != s.beReplied.length
                              ? a("div", { staticClass: "re-content" }, [
                                  a("span", { staticClass: "name" }, [
                                    t._v(
                                      t._s(s.beReplied[0].user.nickname) + ":"
                                    ),
                                  ]),
                                  a("span", { staticClass: "comment" }, [
                                    t._v(t._s(s.beReplied[0].content)),
                                  ]),
                                ])
                              : t._e(),
                            a("div", { staticClass: "date" }, [
                              t._v(t._s(s.time)),
                            ]),
                          ]),
                        ]);
                      }),
                      0
                    ),
                  ])
                : t._e(),
              a("div", { staticClass: "comment-wrap" }, [
                a("p", { staticClass: "title" }, [
                  t._v("最新评论"),
                  a("span", { staticClass: "number" }, [
                    t._v("(" + t._s(t.total) + ")"),
                  ]),
                ]),
                a(
                  "div",
                  { staticClass: "comments-wrap" },
                  t._l(t.comments, function(s, i) {
                    return a("div", { key: i, staticClass: "item" }, [
                      a("div", { staticClass: "icon-wrap" }, [
                        a("img", { attrs: { src: s.user.avatarUrl } }),
                      ]),
                      a("div", { staticClass: "content-wrap" }, [
                        a("div", { staticClass: "content" }, [
                          a("span", { staticClass: "name" }, [
                            t._v(t._s(s.user.nickname) + "："),
                          ]),
                          a("span", { staticClass: "comment" }, [
                            t._v(t._s(s.content)),
                          ]),
                        ]),
                        0 != s.beReplied.length
                          ? a("div", { staticClass: "re-content" }, [
                              a("span", { staticClass: "name" }, [
                                t._v(t._s(s.beReplied[0].user.nickname) + "："),
                              ]),
                              a("span", { staticClass: "comment" }, [
                                t._v(t._s(s.beReplied[0].content)),
                              ]),
                            ])
                          : t._e(),
                        a("div", { staticClass: "date" }, [t._v(t._s(s.time))]),
                      ]),
                    ]);
                  }),
                  0
                ),
              ]),
              a("el-pagination", {
                attrs: {
                  background: "",
                  layout: "prev, pager, next",
                  total: t.total,
                  "current-page": t.page,
                  "page-size": 10,
                  limit: t.limit,
                },
                on: { "current-change": t.handleCurrentChange },
              }),
            ],
            1
          ),
          a("div", { staticClass: "mv-recommend" }, [
            a("h3", { staticClass: "title" }, [t._v("相关推荐")]),
            a("div", { staticClass: "mvs" }, [
              a(
                "div",
                { staticClass: "items" },
                t._l(t.mvs, function(s, i) {
                  return a(
                    "div",
                    {
                      key: i,
                      staticClass: "item",
                      on: {
                        click: function(a) {
                          return t.toMv(s.id);
                        },
                      },
                    },
                    [
                      a("div", { staticClass: "img-wrap" }, [
                        a("img", { attrs: { src: s.cover, alt: "" } }),
                        a("span", { staticClass: "iconfont icon-play" }),
                        a("div", { staticClass: "num-wrap" }, [
                          a("div", { staticClass: "iconfont icon-play" }),
                          a("div", { staticClass: "num" }, [
                            t._v(t._s(s.playCount)),
                          ]),
                        ]),
                        a("span", { staticClass: "time" }, [
                          t._v(t._s(s.duration)),
                        ]),
                      ]),
                      a("div", { staticClass: "info-wrap" }, [
                        a("div", { staticClass: "name" }, [t._v(t._s(s.name))]),
                        a("div", { staticClass: "singer" }, [
                          t._v(t._s(s.artistName)),
                        ]),
                      ]),
                    ]
                  );
                }),
                0
              ),
            ]),
          ]),
        ]);
      },
      pt = [],
      mt = {
        name: "mv",
        data: function() {
          return {
            total: 0,
            page: 1,
            limit: 10,
            url: "",
            mvData: {},
            hotComments: [],
            hotTotal: 0,
            comTotal: 0,
            comments: [],
            mvs: [],
          };
        },
        created: function() {
          var t = this;
          O()({
            url: "https://music.cyrilstudio.top/mv/url",
            method: "get",
            params: { id: this.$route.query.id },
          }).then(function(s) {
            t.url = s.data.data.url;
          }),
            O()({
              url: "https://music.cyrilstudio.top/mv/detail",
              method: "get",
              params: { mvid: this.$route.query.id },
            }).then(function(s) {
              t.mvData = s.data.data;
            }),
            O()({
              url: "https://music.cyrilstudio.top/comment/mv",
              method: "get",
              params: {
                id: this.$route.query.id,
                limit: this.limit,
                offset: (this.page - 1) * this.limit,
              },
            }).then(function(s) {
              (t.hotComments = s.data.hotComments),
                (t.hotTotal = t.hotComments.length),
                (t.comments = s.data.comments),
                (t.total = s.data.total);
            }),
            O()({
              url: "https://music.cyrilstudio.top/simi/mv",
              method: "get",
              params: { mvid: this.$route.query.id },
            }).then(function(s) {
              console.log(s), (t.mvs = s.data.mvs);
              for (var a = 0; a < t.mvs.length; a++) {
                t.mvs[a].playCount > 1e5 &&
                  (t.mvs[a].playCount =
                    parseInt(t.mvs[a].playCount / 1e4) + "万");
                var i = t.mvs[a].duration,
                  n = parseInt(i / 1e3 / 60);
                n < 10 && (n = "0" + n);
                var e = parseInt((i / 1e3) % 60);
                e < 10 && (e = "0" + e),
                  (t.mvs[a].duration = "".concat(n, ":").concat(e));
              }
            });
        },
        methods: {
          toMv: function(t) {
            this.$router.push("/mv?id=".concat(t));
          },
          getMvList: function() {
            var t = this;
            O()({
              url: "https://music.cyrilstudio.top/comment/mv",
              method: "get",
              params: {
                id: this.$route.query.id,
                limit: this.limit,
                offset: (this.page - 1) * this.limit,
              },
            }).then(function(s) {
              console.log(s),
                (t.hotComments = s.data.hotComments),
                (t.comments = s.data.comments);
            });
          },
          handleCurrentChange: function(t) {
            console.log("当前页: ".concat(t)),
              (this.page = t),
              this.getMvList();
          },
        },
      },
      vt = mt,
      dt = Object(u["a"])(vt, ut, pt, !1, null, null, null),
      ht = dt.exports;
    i["default"].use(L.a), i["default"].use(x["a"]);
    var Ct = new x["a"]({
      routes: [
        { path: "/", redirect: "/discovery" },
        { path: "/discovery", component: j },
        { path: "/playlists", component: V },
        { path: "/playlist", component: rt },
        { path: "/songs", component: F },
        { path: "/mvs", component: W },
        { path: "/mv", component: ht },
        { path: "/result", component: it },
      ],
    });
    (i["default"].config.productionTip = !1),
      new i["default"]({
        render: function(t) {
          return t(w);
        },
        router: Ct,
      }).$mount("#app");
  },
  d940c: function(t, s, a) {},
});

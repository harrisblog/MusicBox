module.exports = {
  // 打包之后的地址 使用相对路径
  publicPath: "./",
  // 不生成map
  productionSourceMap: false,

  assetsDir: "static",
  devServer: {
    proxy: {
      "/api": {
        //之后就使用/api代指根路径
        target: "https://music.cyrilstudio.top/", // 这是根路径
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

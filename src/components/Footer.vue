<template>
  <footer>
    <div id="footer-banner">
      <div class="footer-banner-links">
        <div class="footer-banner-left">
          <div id="footer-banner-tips" />
        </div>
        <div class="footer-banner-right">
          <p>Since 2022</p>
          <p class="separator">|</p>
          <p>Designed and Developed by HarrisWong</p>
          <!-- <a class="footer-banner-link" href="https://harriswong.top"
            >HarrisWong</a
          > -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Typed from "../static/js/typed.min.js";
export default {
  name: "Footer",
  methods: {
    typed_cursor() {
      var typed = new Typed("#footer-banner-tips", {
        strings: ["谢谢你让我听见~", "因为我在等待永远~"],
        startDelay: 200,
        backDelay: 2e3,
        typeSpeed: 100,
        loop: !0,
        backSpeed: 20,
      });
    },
  },
  mounted() {
    this.typed_cursor();
  },
};
</script>

<style scoped>
footer {
  background: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: var(--ymts-border);
  clear: both;
}
#footer-banner {
  padding: 1rem;
  color: #fff;
  background: linear-gradient(270deg, var(--harris-theme) 0, #7ada1b 100%);
  display: flex;
  overflow: hidden;
}
#footer-banner .footer-banner-links {
  display: flex;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
}
#footer-banner .footer-banner-left {
  display: flex;
  flex-wrap: wrap;
  min-height: 32px;
}
.footer-banner-right {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#footer-banner p {
  margin: 0 auto;
}
</style>

<template>
  <div id="app">
    <overlay-scrollbars :options="osComponentOptions" style="max-height: 100vh;">
      <NavBar v-bind:auth_status="auth_status" />
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
      <FAQ />
      <Footer />
    </overlay-scrollbars>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";
import OverlayScrollbars from "overlayscrollbars";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

export default {
  name: "app",
  components: {
    NavBar,
    FAQ,
    Footer
  },
  data() {
    return {
      auth_status: false,
      osComponentOptions: {
        resize: "none",
        paddingAbsolute: true,
        scrollbars: {
          autoHide: "never"
        },
        overflowBehavior: {
          x: "none"
        }
      }
      // ops: {
      //   vuescroll: {},
      //   scrollPanel: {},
      //   rail: {},
      //   bar: {}
      // }
    };
  }
};
</script>

<style>
@import "./assets/css/mybulma.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import "./assets/css/bulma-collapsible.min.css";
@import "./assets/css/bulma-divider.min.css";
@import "./assets/css/style.css";
@import "./assets/css/custom/overlayscrollbars-custom.css";
.fade-enter-active,
fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

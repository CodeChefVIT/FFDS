<template>
  <div id="app">
    <NavBar v-bind:auth_status="auth_status" />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <FAQ />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    NavBar,
    FAQ,
    Footer
  },
  data() {
    return {
      auth_status: false
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
.fade-enter-active,
fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

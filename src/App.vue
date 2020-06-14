<template>
  <div id="app">
    <NavBar v-bind:auth_status="false" />
    <router-view />
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
  watch: {
    "this.$store.state.user_auth"() {
      return this.$store.state.user_auth;
    }
  }
  // data: function {
  //   user: {
  //     name: "",
  //     age: "",
  //     email: "",
  //     phone: "",
  //     describe: "",
  //     expectations: "",
  //     gender: "",
  //     auth_status: f
  //   }
  // }
};
</script>

<style>
@import "./assets/css/mybulma.css";
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import "./assets/css/bulma-collapsible.min.css";
@import "./assets/css/bulma-divider.min.css";
@import "./assets/css/style.css";
</style>

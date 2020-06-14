<template>
  <div class="app-navbar">
    <nav
      class="navbar has-shadow py-1by4 is-fixed-top font-roboto"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand mi-5">
        <!-- TODO: Fix Logo Centering on Mobile -->
        <router-link to="/" class="navbar-item">
          <!-- Switch to Navbar Logo Dark -->
          <img src="../assets/img/navbar-logo-dark.png" alt="Brand Logo" />
        </router-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="level navbar-item-fullwidth mr-1">
          <div v-if="!auth_status" class="level-item">
            <router-link
              to="/"
              class="navbar-item is-flex align-items-center is-size-5 navbar-link-custom has-text-weight-medium is-paddingless"
              :class="(this.$route.path == '/')?'is-active':''"
            >
              <span class="material-icons">home</span>
              <span class="is-inline-block">home</span>
            </router-link>
          </div>
          <div v-if="auth_status" class="level-item">
            <router-link
              to="/dashboard"
              class="navbar-item is-flex align-items-center is-size-5 navbar-link-custom has-text-weight-medium is-paddingless"
              :class="(this.$route.path == '/dashboard')?'is-active':''"
            >
              <span class="material-icons">home</span>
              <span class="is-inline-block">home</span>
            </router-link>
          </div>
          <div v-if="!auth_status" class="level-item">
            <router-link
              to="/signup"
              class="navbar-item is-size-5 navbar-link-custom has-text-weight-medium is-paddingless"
              :class="(this.$route.path == '/signup')?'is-active':''"
            >sign up</router-link>
          </div>
          <div v-if="!auth_status" class="level-item">
            <router-link
              to="/login"
              class="navbar-item is-size-5 navbar-link-custom has-text-weight-medium is-paddingless"
              :class="(this.$route.path == '/login')?'is-active':''"
            >LOGIN</router-link>
          </div>
          <div v-if="auth_status" class="level-item">
            <router-link
              to="/profile"
              class="navbar-item is-size-5 navbar-link-custom has-text-weight-medium is-paddingless"
              :class="(this.$route.path == '/profile')?'is-active':''"
            >My Account</router-link>
          </div>
          <!-- TODO: Add Logout -->
          <div v-if="auth_status" class="level-item">
            <a
              class="navbar-item is-size-5 navbar-link-custom has-text-weight-medium is-paddingless"
            >Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";

$(document).ready(function() {
  // Navbar Toggle
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});

export default {
  name: "NavBar",
  props: {
    auth_status: Boolean
  }
};
</script>

<style scoped>
</style>

<template>
  <section class="app-login section font-roboto has-background-black">
    <div class="columns">
      <div
        class="column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet my-6 px-2"
      >
        <p class="title has-text-primary">Hello, Welcome Back!</p>
        <form id="loginForm">
          <p class="help is-danger is-hidden">The Email / Password you entered is incorrect.</p>
          <div class="field">
            <label for="loginEmail" class="label has-text-primary">Email</label>
            <div class="control has-icons-left">
              <input
                id="loginEmail"
                name="loginEmail"
                class="input has-background-black"
                type="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope fa-custom"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label for="loginPwd" class="label has-text-primary">Password</label>
            <div class="control has-icons-left">
              <input
                id="loginPwd"
                name="loginPwd"
                class="input has-background-black"
                type="password"
                placeholder="Enter your password"
                autocomplete="current-password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-key fa-custom"></i>
              </span>
              <!-- <span class="icon is-small is-right">
								<i class="fas fa-eye fa-custom eye-click"></i>
              </span>-->
            </div>
          </div>
          <div class="field has-text-success is-size-5">
            <span class="has-text-weight-medium">Not Registered Yet?,</span>
            <span>
              <router-link to="/signup" class="has-text-weight-semibold link-custom">&nbsp;Sign Up</router-link>
            </span>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-medium is-primary" @submit="loginHandler" type="submit">
                <span>Log In</span>
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import "jquery-validation";
require("jquery-validation/dist/additional-methods.js");

$(document).ready(function() {
  // Login Form Validation

  var $loginForm = $("#loginForm");
  if ($loginForm.length) {
    $loginForm.validate({
      rules: {
        loginEmail: {
          required: true,
          pattern: /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/
        },
        loginPwd: {
          required: true
        }
      },
      messages: {
        loginEmail: {
          required: "Email is mandatory.",
          pattern: "Invalid Email, Please enter a VIT Email ID."
        },
        loginPwd: {
          required: "Password is mandatory."
        }
      }
    });
  }

  // Login Form Submit Handler

  $loginForm.submit(function() {
    event.preventDefault();
    if ($loginForm.valid()) {
      var $loginEmail = $("#loginEmail").val();
      var $loginPwd = $("#loginPwd").val();
      $.post(
        "https://ffds-new.herokuapp.com/login",
        { email: $loginEmail, password: $loginPwd },
        function(data, status, xhr) {
          console.log(data, status, xhr);
        }
      )
        .done(function() {
          console.log("Login Request Successful");
          // window.location.replace("/dashboard");
          // $.session.clear();
          // $.session.set("sess-id", "bcjcjcncnek");
        })
        .fail(function() {
          console.log("Login Request Failed");
          alert("Error: Login Unsuccessful - Check Your Internet");
        });
      // Fix Login on Done

      console.log("Form is being submitted.");
    }
  });
});
$(function() {});

export default {
  name: "Login",
  methods: {
    loginHandler() {}
  }
};
</script>
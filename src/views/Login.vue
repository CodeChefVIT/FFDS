<template>
  <section class="app-login section font-roboto has-background-black">
    <div class="columns">
      <div
        class="column is-10-mobile is-8-tablet is-6-desktop is-4-fullhd is-offset-1-mobile is-offset-2-tablet my-6 px-2"
      >
        <p class="title has-text-primary">Hello, Welcome Back!</p>
        <form id="loginForm" @submit.prevent="login">
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
                v-model="loginEmail"
                @change="setEmail($event.target.value)"
              />
              <div class="error" v-if="!$v.loginEmail.required">Email is required.</div>
              <div class="error" v-if="!$v.loginEmail.pattern">Enter a valid VIT email.</div>
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
                v-model="loginPwd"
                @change="setPwd($event.target.value)"
              />
              <div class="error" v-if="!$v.loginPwd.required">Password is Required.</div>
              <span class="icon is-small is-left">
                <i class="fas fa-key fa-custom"></i>
              </span>
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
              <button
                class="button is-medium is-primary"
                @click.prevent="login"
                :disabled="$v.$invalid"
                type="submit"
              >
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
import { required, helpers } from "vuelidate/lib/validators";

const pattern = helpers.regex(
  "pattern",
  /^[A-Za-z0-9.]+@vitstudent\.ac\.in|[A-Za-z0-9.]+@vit\.ac\.in$/
);

export default {
  name: "Login",
  data: () => ({
    loginEmail: "",
    loginPwd: ""
  }),
  validations: {
    loginEmail: {
      required,
      pattern
    },
    loginPwd: {
      required
    }
  },
  computed: {
    axiosVerifyEmailForm() {
      const params = new URLSearchParams();
      params.append("email", this.loginEmail);
      return params;
    },
    axiosLoginForm() {
      const params = new URLSearchParams();
      params.append("email", this.loginEmail);
      params.append("password", this.loginPwd);
      return params;
    }
  },
  methods: {
    setEmail(value) {
      this.loginEmail = value;
      this.$v.loginEmail.$touch();
    },
    setPwd(value) {
      this.loginPwd = value;
      this.$v.loginPwd.$touch();
    },
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("verifyemail", this.axiosVerifyEmailForm)
          .then(success => {
            this.$store
              .dispatch("login", this.axiosLoginForm)
              .then(success => {
                this.$router.push("/dashboard");
              })
              .catch(error => {
                alert("Login Failed: Please check email / password.");
              });
          })
          .catch(error => {
            alert("Email is not verified. Please Verify your Email.");
          });
      } else {
        alert("Please fill the required fields.");
      }
    }
  }
};
</script>
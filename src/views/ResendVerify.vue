<template>
  <section class="app-resend-verify section has-background-black py-10">
    <div class="columns">
      <div
        class="column is-offset-1-mobile is-offset-2-tablet is-offset-3-desktop is-10-mobile is-8-tablet is-6-desktop"
      >
        <p
          class="has-text-weight-semibold is-size-2 has-text-primary has-text-centered"
        >Re-Send Verification Email</p>
        <br />
        <form id="resendForm" @submit.prevent="resend">
          <div class="field">
            <label for="resendEmail" class="label has-text-primary">Email</label>
            <div class="control has-icons-left">
              <input
                id="resendEmail"
                name="resendEmail"
                class="input has-background-black"
                type="email"
                placeholder="Enter your email"
                autocomplete="email"
                v-model="resendEmail"
                @input="setEmail($event.target.value)"
              />
              <div class="error" v-if="!$v.resendEmail.required">Email is required.</div>
              <div class="error" v-if="!$v.resendEmail.pattern">Enter a valid VIT email.</div>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope fa-custom"></i>
              </span>
            </div>
          </div>
          <br />
          <div class="field">
            <div class="control">
              <button
                class="button is-primary"
                @click.prevent="resend"
                :disabled="$v.$invalid"
                type="submit"
              >
                <span>Send Verification Email</span>
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
  name: "ResendVerify",
  data: () => ({
    resendEmail: ""
  }),
  validations: {
    resendEmail: {
      required,
      pattern
    }
  },
  methods: {
    setEmail(value) {
      this.resendEmail = value;
      this.$v.resendEmail.$touch();
    },
    resend() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store
          .dispatch("SENDMAIL", {
            mailto: this.resendEmail
          })
          .then(success => {
            alert("Verification Email Resent.");
          })
          .catch(error => {
            alert("Verification Email could not be sent.");
          });
      } else {
        alert("Please fill the email field.");
      }
    }
  }
};
</script>
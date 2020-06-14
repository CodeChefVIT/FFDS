<template>
  <section class="app-verify section has-background-black py-10">
    <div class="columns">
      <div
        class="column is-offset-1-mobile is-offset-2-tablet is-offset-3-desktop is-10-mobile is-8-tablet is-6-desktop"
      >
        <p
          class="has-text-weight-semibold is-size-2 has-text-primary has-text-centered"
        >Verification Email Sent</p>
        <br />
        <p class="has-text-weight-medium is-size-5 has-text-success has-text-centered">
          A Verification email has been
          sent to your VIT email, please click the link in the email to verify your email. Without verification your
          account will not be made active.
        </p>
        <p class="has-text-centered">
          <span class="has-text-weight-medium is-size-5 has-text-success">
            Didn't get a verification
            email, click
          </span>
          <span>
            <!-- TODO: Fix link-custom-2 not working. -->
            <router-link
              to="/resend-verify"
              class="has-text-weight-bold is-size-5 has-text-success has-text-centered link-custom-2"
            >here&nbsp;</router-link>
          </span>
          <span
            class="has-text-weight-medium is-size-5 has-text-success has-text-centered"
          >to resend the email</span>
        </p>
        <br />
        <p class="has-text-weight-medium is-size-5 has-text-success has-text-centered">
          After verifying your email, click
          🠗 to login.
        </p>
      </div>
    </div>
    <div class="columns">
      <div
        class="column is-offset-2-mobile is-offset-4-tablet is-offset-5-desktop is-8-mobile is-4-tablet is-2-desktop"
      >
        <router-link
          class="button is-medium is-primary my-2 cursor-pointer is-flex justify-items-center"
          to="/login"
        >
          <span>Login</span>
          <span class="icon">
            <i class="fas fa-chevron-right"></i>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Verify"
};
</script>
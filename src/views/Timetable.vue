<template>
  <section class="app-timetable section has-background-black">
    <div class="container">
      <div class="columns">
        <div
          class="column is-10-mobile is-8-tablet is-offset-1-mobile is-offset-2-tablet my-6 px-2 has-text-white-ter"
        >
          <p class="title has-text-primary mb-3">Follow these Easy Steps to get your Timetable:</p>
          <!-- TODO: Fix Mobile View of text coming below Step *: -->
          <p class="has-text-weight-semibold my-1 is-size-5">
            <span class="icon">
              <i class="fas fa-chevron-right"></i>
            </span>
            <span>Step 1:</span>
            <span>&nbsp;Open VTOP xbdbqw dbdqw djwq d</span>
          </p>
          <p class="has-text-weight-semibold my-1 is-size-5">
            <span class="icon">
              <i class="fas fa-chevron-right"></i>
            </span>
            <span>Step 2:</span>
            <span>&nbsp;Open VTOP xbdbqw dbdqw djwq d</span>
          </p>
          <p class="has-text-weight-semibold my-1 is-size-5">
            <span class="icon">
              <i class="fas fa-chevron-right"></i>
            </span>
            <span>Step 3:</span>
            <span>&nbsp;Open VTOP xbdbqw dbdqw djwq d</span>
          </p>
          <p class="has-text-weight-semibold my-1 is-size-5">
            <span class="icon">
              <i class="fas fa-chevron-right"></i>
            </span>
            <span>Step 4:</span>
            <span>&nbsp;Open VTOP xbdbqw dbdqw djwq d</span>
          </p>
          <p class="has-text-weight-semibold my-1 is-size-5">
            <span class="icon">
              <i class="fas fa-chevron-right"></i>
            </span>
            <span>
              Voilà, there's your Timetable, ready to
              be uploaded.
            </span>
          </p>
          <div class="is-flex justify-items-center">
            <div>
              <router-link class="button is-medium is-primary my-2 cursor-pointer" to="/signup">
                <span>Sign Up</span>
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </router-link>
            </div>
            <div class="divider is-vertical">OR</div>
            <div>
              <router-link class="button is-medium is-primary my-2 cursor-pointer" to="/login">
                <span>Login</span>
                <span class="icon">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timetable"
};
</script>
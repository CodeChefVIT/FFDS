<template>
  <div class="app-faq">
    <section
      class="hero is-medium font-roboto p-2"
      style="background-image: linear-gradient(#ED3B9D, #FE0074);"
    >
      <div class="hero-body is-paddingless" style="padding-top: 4rem; padding-bottom: 4rem;">
        <div class="columns">
          <div
            class="column is-12-mobile is-10-tablet is-8-desktop is-offset-1-tablet is-offset-2-desktop px-2"
          >
            <p class="has-text-weight-semibold is-size-2 has-text-white">Q & A</p>
            <br />
            <p class="has-text-white">
              <span class="icon is-size-5">
                <i class="fas fa-circle"></i>
              </span>
              <span class="is-size-5 has-text-weight-semibold">&nbsp;What does FFDS stand for?</span>
            </p>
            <p class="has-text-white">
              <span class="icon is-size-5">
                <i class="fas fa-chevron-right"></i>
              </span>
              <span
                class="is-size-5 has-text-weight-semibold"
              >&nbsp;FFDS stands for Fully Flexible Dating System</span>
            </p>
            <br />
            <p class="has-text-white">
              <span class="icon is-size-5">
                <i class="fas fa-circle"></i>
              </span>
              <span class="is-size-5 has-text-weight-semibold">&nbsp;How to upload my TimeTable?</span>
            </p>
            <p class="has-text-white">
              <span class="icon is-size-5">
                <i class="fas fa-chevron-right"></i>
              </span>
              <span class="is-size-5 has-text-weight-semibold">
                &nbsp;Click
                <router-link class="link-custom-1" to="/timetable" target="_blank">here&nbsp;</router-link>for instructions to download your
                TimeTable.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FAQ"
};
</script>

<style scoped>
</style>

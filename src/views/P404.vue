<template>
  <div class="app-404 section has-background-black has-text-white-ter">
    <div class="container-404 has-text-success">
      4
      <i class="far fa-question-circle fa-spin custom-fa"></i>
      4
    </div>
    <div class="columns">
      <div
        class="column is-offset-1-mobile is-10-mobile is-offset-2-tablet is-8-tablet is-offset-3-desktop is-6-desktop is-offset-4-widescreen is-4-widescreen has-text-centered is-size-5-mobile is-size-4-tablet"
      >
        <span>
          Maybe this page was moved?
          <br />Maybe it has been deleted?
          <br />Did you make a mistake while typing?
          <br />Maybe it is hiding in quarantine?
          <br />Maybe it never existed in the first place?
        </span>
        <hr class="custom-hr" />
        <span>Let's go&nbsp;</span>
        <router-link to="/" class="link-custom-1">home</router-link>
        <span>&nbsp;and try from there.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "P404"
};
</script>
<style scoped>
.container-404 {
  text-align: center;
  display: inline-block;
  font-size: 20vw;
  width: 100%;
  margin: auto;
}
.custom-fa {
  font-size: 17vw;
  /* vertical-align: middle; */
  line-height: 100%;
}
.custom-hr {
  background-color: #f4f4f4;
}
</style>
<template>
  <div class="section is-paddingless app-home">
    <!-- Main Section #1 -->

    <section class="has-background-success my-0">
      <div class="columns is-marginless is-paddingless">
        <div class="column is-12-mobile is-8-tablet pt-4">
          <p
            class="is-flex justify-items-center is-size-4-mobile is-size-3-tablet is-size-2-desktop has-text-weight-semibold p-2 font-roboto"
          >
            <!-- Fix blankspace issue -->
            <span class="is-size-6-mobile has-text-white">FULLY FLEXIBLE DATing System</span>
            <!-- <span class="has-text-info">DATing</span>
            <span class="has-text-white">system</span>-->
          </p>
          <div class="field pt-2 pb-2">
            <figure class="image is-flex justify-items-center">
              <img class="is-1by2 mw-50" src="../assets/img/main-logo.png" alt="FFDS Logo" />
            </figure>
          </div>
        </div>
        <div class="column is-12-mobile is-4-tablet pt-4">
          <div class="field pt-2 pb-2">
            <figure class="image is-flex justify-items-center is-marginless is-paddingless">
              <img class="is-1by2 mw-60" src="../assets/img/phone.png" alt="Image of a Phone" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Section #2 -->

    <section class>
      <div class="columns is-marginless is-paddingless">
        <div class="column is-12-mobile is-4-tablet has-background-info">
          <p class="is-size-5 has-text-weight-medium p-1 has-text-centered">
            <span class="has-text-white">The&nbsp;</span>
            <span class="has-text-yellow">best&nbsp;</span>
            <span class="has-text-white">dating site</span>
          </p>
        </div>
        <div class="column is-12-mobile is-4-tablet has-background-primary">
          <p class="is-size-5 has-text-weight-medium p-1 has-text-centered">
            <span class="has-text-white">Meet&nbsp;</span>
            <span class="has-text-yellow">new&nbsp;</span>
            <span class="has-text-white">people</span>
          </p>
        </div>
        <div class="column is-12-mobile is-4-tablet has-background-warning">
          <p class="is-size-5 has-text-weight-medium p-1 has-text-centered">
            <span class="has-text-white">Make&nbsp;</span>
            <span class="has-text-yellow">trustful&nbsp;</span>
            <span class="has-text-white">relations</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Singular Button Section -->

    <section class="has-background-black pt-2">
      <div class="container">
        <div class="level is-centered">
          <div class="level-item">
            <router-link
              class="button is-large is-outlined is-success has-text-success has-text-weight-semibold shadow-custom is-rounded"
              to="/signup"
            >get STARTed</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Text + Image Section #1 -->

    <section class="has-background-black has-text-white-ter">
      <div class="columns is-marginless is-paddingless">
        <div class="column flex-center is-12-mobile is-6-tablet">
          <!-- TODO: Vertically Center Text & Add more padding for tablet & desktop-->
          <p class="is-size-5 has-text-weight-medium p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum molestias, esse assumenda quam omnis
            ipsam! Necessitatibus, libero totam veniam voluptatem cum dolorum laboriosam vel, modi, fuga officiis
            explicabo nisi.
          </p>
        </div>
        <div class="column flex-center is-12-mobile is-6-tablet">
          <figure class="image p-2">
            <img
              class="is-4by3"
              src="../assets/img/people-orange-q.png"
              alt="Image of people holding orange question marks"
            />
          </figure>
        </div>
      </div>
    </section>

    <!-- Text + Image Section #2 -->

    <section class="has-background-black has-text-white-ter">
      <div class="columns is-marginless is-paddingless">
        <div class="column flex-center is-12-mobile is-6-tablet">
          <!-- TODO: Vertically Center Text & Add more padding for tablet & desktop-->
          <figure class="image p-2">
            <img
              class="is-4by3"
              src="../assets/img/people-blue-q.png"
              alt="Image of people holding blue question marks"
            />
          </figure>
        </div>
        <div class="column flex-center is-12-mobile is-6-tablet">
          <p class="is-size-5 has-text-weight-medium p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum molestias, esse assumenda quam omnis
            ipsam! Necessitatibus, libero totam veniam voluptatem cum dolorum laboriosam vel, modi, fuga officiis
            explicabo nisi.
          </p>
        </div>
      </div>
    </section>

    <!-- Text + Image Section #3 -->

    <section class="has-background-black has-text-white-ter">
      <div class="columns is-marginless is-paddingless">
        <div class="column flex-center is-12-mobile is-6-tablet">
          <!-- TODO: Vertically Center Text & Add more padding for tablet & desktop-->
          <p class="is-size-5 has-text-weight-medium p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nostrum molestias, esse assumenda quam omnis
            ipsam! Necessitatibus, libero totam veniam voluptatem cum dolorum laboriosam vel, modi, fuga officiis
            explicabo nisi.
          </p>
        </div>
        <div class="column flex-center is-12-mobile is-6-tablet">
          <figure class="image p-2">
            <img
              class="is-4by3"
              src="../assets/img/thumbsup.png"
              alt="Image of people holding orange question marks"
            />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>

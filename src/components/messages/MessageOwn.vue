<template>
  <div class="msg-own is-flex justify-items-right">
    <article class="media mw-40 pl-2 pr-2 my-1">
      <div class="media-content">
        <div class="content">
          <span>
            <small class="has-text-grey pr-1">{{ date }}</small>
            <span class="msg-box has-text-white-ter">{{ contents }}</span>
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
// import { Emoji } from "emoji-mart-vue";

export default {
  name: "MessageOwn",
  // components: {
  //   Emoji
  // },
  props: {
    date: {
      type: String,
      default: "16:30:00",
      required: false
    },
    imageUrl: {
      type: String,
      default: "",
      required: false
    },
    contents: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>

<style>
</style>

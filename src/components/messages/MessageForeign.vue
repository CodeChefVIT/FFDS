<template>
  <div class="msg-foreign">
    <article class="media mw-40 pl-2 pr-2 my-1">
      <div class="media-content">
        <div class="content">
          <span class="msg-box has-text-white-ter">{{ contents }}</span>
          <span>
            <small class="has-text-grey pl-1">{{ date }}</small>
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "MessageForeign",
  props: {
    author: {
      type: String,
      default: "John Smith",
      required: false
    },
    date: {
      type: String,
      default: "16:30:00",
      required: false
    },
    // imageUrl: {
    //   type: String,
    //   default: "",
    //   required: false
    // },
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

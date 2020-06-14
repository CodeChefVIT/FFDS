<template>
  <div class="input__button" @click="send">Send</div>
</template>

<script>
export default {
  name: "InputButton",
  methods: {
    // eslint-disable-next-line no-unused-vars
    send(event) {
      this.$emit("newOwnMessage");
    }
  }
};
</script>

<style>
</style>

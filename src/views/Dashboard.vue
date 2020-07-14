<template>
  <div class="app-dashboard section is-marginless is-paddingless has-background-black">
    <div
      :class="focusedOnChat ? 'is-hidden' : ''"
      class="is-size-2 has-text-weight-semibold has-text-white has-background-primary pt-4 pl-2 is-left"
    >Chats:</div>

    <div
      :class="focusedOnChat ? '' : 'is-hidden'"
      class="title has-text-white has-background-primary pt-4 pb-2 pl-2 is-inline-flex justify-items-center"
      style="width: 100%"
    >
      <div class="columns">
        <div class="column is-4-mobile is-5-tablet is-4-desktop">
          <span class="icon cursor-pointer" @click="goBack">
            <i class="fas fa-arrow-left fa-lg"></i>
          </span>
        </div>
        <div class="column is-8-mobile is-7-tablet is-8-desktop">
          <span class="image is-32x32 justify-items-center pl-1">
            <img src="../assets/img/default-profile.jpeg" class="is-rounded" />
          </span>
          <span
            class="has-text-centered subtitle has-text-white-ter justify-items-center"
          >$user.foreign.current_focus.</span>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12-mobile is-5-tablet is-4-desktop pr-0">
        <div class="card has-background-black custom-card" @click="focusChat">
          <div class="card-content">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img class="is-rounded cursor-pointer" src="../assets/img/default-profile.jpeg" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <span
                      class="has-text-primary has-text-weight-semibold is-size-4 cursor-pointer"
                    >Ayush</span>
                    <br />
                    <span class="has-text-white-ter cursor-pointer">Lorem ipsum dolor sit amet...</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="card has-background-black custom-card" @click="focusChat">
          <div class="card-content">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img class="is-rounded cursor-pointer" src="../assets/img/default-profile.jpeg" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <span
                      class="has-text-primary has-text-weight-semibold is-size-4 cursor-pointer"
                    >Anita</span>
                    <br />
                    <span class="has-text-white-ter cursor-pointer">Lorem ipsum dolor sit amet...</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="card has-background-black custom-card" @click="focusChat">
          <div class="card-content">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img class="is-rounded cursor-pointer" src="../assets/img/default-profile.jpeg" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <span
                      class="has-text-primary has-text-weight-semibold is-size-4 cursor-pointer"
                    >Ajay</span>
                    <br />
                    <span class="has-text-white-ter cursor-pointer">Lorem ipsum dolor sit amet...</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="column is-hidden-mobile is-7-tablet is-8-desktop pl-0">
        <div @click="setEmojiPickerToggle(false)" :key="chatKey">
          <section class="window is-marginless is-paddingless">
            <!-- <header class="window__header__container">
              <slot name="header has-text-centered">{{ title }}</slot>
            </header>-->
            <section id="window__messages__container" class="window__messages__container">
              <slot>
                <messages-list :feed="feed" :author-id="authorId" class="messages-list" />
              </slot>
            </section>
            <div class="window__input__container">
              <slot name="input-container">
                <input-container
                  :toggle-emoji-picker="toggleEmojiPicker"
                  @newOwnMessage="onNewOwnMessage"
                  @openEmojiPicker="onOpenEmojiPicker"
                />
              </slot>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { scrollToBottom } from "../helpers/scroll.js";
import MessagesList from "../components/messages/MessagesList.vue";
import InputContainer from "../components/input/InputContainer.vue";

export default {
  name: "Dashboard",
  components: {
    MessagesList,
    InputContainer
  },
  props: {
    title: {
      type: String,
      default: "Ayush",
      required: false
    },
    initialAuthorId: {
      type: Number,
      default: 0,
      required: false
    },
    attachMock: {
      type: Boolean,
      default: false,
      required: false
    },
    initialFeed: {
      type: Array,
      default: function() {
        return [
          {
            id: 1,
            author: "Ayush",
            imageUrl: "@assets/img/default-profile.jpeg",
            contents: "hey",
            date: "16:27:05"
          },
          {
            id: 0,
            author: "Me",
            imageUrl: "@assets/img/default-profile.jpeg",
            contents: "hello",
            date: "16:28:09"
          },
          {
            id: 0,
            author: "Me",
            imageUrl: "@assets/img/default-profile.jpeg",
            contents: "what's up?",
            date: "16:28:13"
          },
          {
            id: 1,
            author: "Ayush",
            contents: "nothing, wbu?",
            date: "16:28:49"
          }
        ];
      },
      required: false
    },
    newMessage: {
      type: Object,
      default: function() {
        return {};
      },
      required: false
    }
  },
  data() {
    return {
      feed: [],
      authorId: 0,
      toggleEmojiPicker: false,
      chatKey: 0,
      focusedOnChat: false
    };
  },
  watch: {
    newMessage: function(newValue, oldValue) {
      this.pushToFeed(newValue);
      console.log(oldValue);
      scrollToBottom();
    }
  },
  mounted() {
    if (this.attachMock) {
      import("../mocks/mock-messages-list.js")
        .then(mockData => {
          this.feed = mockData.default.feed;
          this.setAuthorId(mockData.default.authorId);
        })
        .catch(error => {
          console.error("Failed to load mock data from file. ", error);
        });
    } else {
      this.feed = this.initialFeed;
      this.authorId = this.initialAuthorId;
    }
  },
  methods: {
    setEmojiPickerToggle(toggle) {
      this.toggleEmojiPicker = toggle;
    },
    pushToFeed(element) {
      this.feed.push(element);
    },
    onNewOwnMessage(message, image, imageUrl) {
      const newOwnMessage = {
        id: this.authorId,
        contents: message,
        image: image,
        imageUrl: imageUrl,
        date: moment().format("HH:mm:ss")
      };

      this.pushToFeed(newOwnMessage);

      scrollToBottom();

      this.$emit("newOwnMessage", message);
    },
    onOpenEmojiPicker(toggle) {
      this.setEmojiPickerToggle(toggle);
    },
    focusChat() {
      this.focusedOnChat = true;
      this.chatKey += 1;
    },
    goBack() {
      this.focusedOnChat = false;
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/main.scss";
</style>

<!--<script>
// export default {
//   name: "Dashboard",
//   data: function() {
//     return {
//       message: {},
//       initialFeed: [
//         {
//           id: 1,
//           author: "Person",
//           imageUrl: "@assets/img/default-profile.jpeg",
//           contents: "hi there",
//           date: "16:30"
//         },
//         {
//           id: 0,
//           author: "Me",
//           contents: "hello",
//           date: "16:30"
//         }
//       ]
//     };
//   }
// };
//
//</script>-->
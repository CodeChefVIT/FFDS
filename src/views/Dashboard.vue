<template>
  <div class="app-dashboard section is-marginless is-paddingless has-background-black">
    <div
      class="is-size-2 has-text-weight-semibold has-text-white has-background-primary pt-4 pl-5 is-left"
    >Chats:</div>
    <!-- <div
      v-if="focusOnChat === true"
      class="title has-text-white has-background-primary pt-5 pb-2 pl-6"
    >
      <span class="icon">
        <i class="fas fa-arrow-left fa-3x"></i>
      </span>
    </div>-->
    <div class="columns pt-2 pb-2">
      <div class="column is-offset-1-mobile is-10-mobile is-5-tablet is-4-desktop pl-5">
        <div class="card has-background-black custom-card" @click="focusChat">
          <div class="card-content">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img class="is-rounded" src="../assets/img/default-profile.jpeg" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <span class="has-text-primary has-text-weight-semibold is-size-4">Ayush</span>
                    <br />
                    <span class="has-text-white-ter">Lorem ipsum dolor sit amet, cons...</span>
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
                  <img class="is-rounded" src="../assets/img/default-profile.jpeg" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <span class="has-text-primary has-text-weight-semibold is-size-4">Anita</span>
                    <br />
                    <span class="has-text-white-ter">Lorem ipsum dolor sit amet, cons...</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="card has-background-black" @click="focusChat">
          <div class="card-content">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img class="is-rounded" src="../assets/img/default-profile.jpeg" />
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <span class="has-text-primary has-text-weight-semibold is-size-4">Ajay</span>
                    <br />
                    <span class="has-text-white-ter">Lorem ipsum dolor sit amet, cons...</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="column is-hidden-mobile is-7-tablet is-8-desktop">
        <div class="mh-800" @click="setEmojiPickerToggle(false)" :key="chatKey">
          <section class="window">
            <header class="window__header__container">
              <slot name="header has-text-centered">{{ title }}</slot>
            </header>
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
            date: "16:30:05"
          },
          {
            id: 0,
            author: "Me",
            contents: "hello",
            date: "16:30:49"
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
  data: function() {
    return {
      feed: [],
      authorId: 0,
      toggleEmojiPicker: false,
      chatKey: 0
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
      this.chatKey += 1;
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
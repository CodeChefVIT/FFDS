import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from 'axios';
import store from "./store";
import LoadScript from 'vue-plugin-load-script';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperclip, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Vuelidate)
Vue.use(require('vue-moment'))

library.add(faPaperclip)
library.add(faSmile)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Axios.defaults.baseURL = 'https://ffds-new.herokuapp.com/';


Vue.use(LoadScript);
Vue.use(Vuex)
Vue.loadScript("https://kit.fontawesome.com/a758cd51d8.js");
Vue.config.productionTip = false;


// const store = new Vuex.Store({
//   state: {
//     auth_status: false
//   },
//   mutations: {
//     authChange(state) {
//       state.auth_status = !state.auth_status
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount("#app");

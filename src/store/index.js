import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    LOGIN: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post('login', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          })
      });
    },
    REGISTER: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post('register', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          })
      });
    },
    SENDMAIL: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post('send', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          })
      });
    },
    VERIFYEMAIL: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post('verifyemail', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          })
      });
    },
    UPDATEDETAILS: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post('updateDetails', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          })
      });
    },
    SHOWDETAILS: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post('updateDetails', payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          })
      });
    },
  },
  modules: {}
});

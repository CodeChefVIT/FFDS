import Axios from "../store/http.js";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    addChat: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.request("/add/new/chat", {
          method: "post",
          data: payload
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 201) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getAllChats: ({ commit }) => {
      return new Promise((resolve, reject) => {
        Axios.request("/get/all/chats", {
          method: "get",
          params: {
            "email": localStorage.getItem("user.email")
          }
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 201) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getSpecificChat: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/get/specific/chat", {
          method: "get",
          params: params
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 201) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getFeed: ({ commit }) => {
      return new Promise((resolve, reject) => {
        Axios.request("/user/showfeed", {
          method: "get",
          headers: {
            Authorization: "JWT " + localStorage.getItem("token")
          }
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 201) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
}
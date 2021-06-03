import Vue from "vue";
import Vuex from "vuex";
import Axios from "../store/http.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    login: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/login", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          //JSON.stringify(data.token)
          .then(({ data, status }) => {
            if (status === 200 && data.response === "Login successful") {
              localStorage.setItem("token", "kskqskqkn");
              resolve(true);
            } else if (data.response === "User not found") {
              reject(new Error("User Not Found!"), null);
            } else if (data.response === "Invalid Password") {
              reject(new Error("Invalid Password!"), null);
            } else {
              reject(new Error(data.response), null);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    // Fix API Not returning an object
    register: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/register", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          .then(({ data, status }) => {
            if (status === 200 && data === "Registered Successful") {
              resolve(true);
            } else if (data === "User already exists") {
              reject(new Error("User is already Registered!"), null);
            } else {
              reject(new Error(data), null);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    //Fix Send Mail API Response
    sendmail: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/send", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    verifyemail: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/verifyemail", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 200 && data !== "email not verified") {
              resolve(true);
            } else {
              reject(new Error("Email Not Verified!"), null);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    UPDATEDETAILS: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post("updateDetails", payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    SHOWDETAILS: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post("updateDetails", payload)
          .then(({ data, status }) => {
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  modules: {}
});

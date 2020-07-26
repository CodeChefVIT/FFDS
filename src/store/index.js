import Vue from "vue";
import Vuex from "vuex";
import Axios from "../store/http.js";
import Chat from "./modules/chat.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    login: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/user/login", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          .then(({ data, status }) => {
            if (status === 200 && data.token) {
              localStorage.setItem("token", JSON.stringify(data.token));
              localStorage.setItem("user.name", JSON.stringify(data.user.name));
              localStorage.setItem(
                "user.phone",
                JSON.stringify(data.user.phone)
              );
              localStorage.setItem(
                "user.branch",
                JSON.stringify(data.user.branch)
              );
              localStorage.setItem(
                "user.firstLogin",
                JSON.stringify(data.user.firstLogin)
              );
              localStorage.setItem(
                "user.gender",
                JSON.stringify(data.user.gender)
              );
              localStorage.setItem("user.bio", JSON.stringify(data.user.bio));
              localStorage.setItem("user._id", JSON.stringify(data.user._id));
              localStorage.setItem("user.year", JSON.stringify(data.user.year));
              localStorage.setItem("user.slot", JSON.stringify(data.user.slot));
              localStorage.setItem(
                "user.email",
                JSON.stringify(data.user.email)
              );
              // Add User Image
              // localStorage.setItem("user.image", JSON.stringify(data.user.image));
              resolve(true);
            }
          })
          .catch(error => {
            if (error.response.status === 400) {
              reject(new Error("Invalid Email / Password!"), null);
            } else if (error.response.status === 401) {
              reject(
                new Error(
                  "Email has not been verified! Please Verify to login!"
                ),
                null
              );
            } // Fix Invalid Password Status
            else if (error.response.status === 403) {
              reject(
                new Error("Unauthorized / Session Expired! Please re-login!"),
                null
              );
            } else reject(error);
          });
      });
    },
    register: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/user/create", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          .then(({ data, status }) => {
            if (
              status === 201 &&
              data.message === "Account created successfully"
            ) {
              resolve(true);
            }
          })
          .catch(error => {
            if (error.response.status === 401)
              reject(new Error("User is already Registered!"), null);
            else reject(error);
          });
      });
    },
    sendmail: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.request("/user/send/verification/link", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          .then(({ data, status }) => {
            console.log(data);
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
        Axios.request("/user/verifyemail", {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf8" },
          params: params
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            if (error.response.status === 401)
              reject(new Error("Email Not Verified!"), null);
            // Fix User Not Registered Error Handling
            // else if (error.response.status === 400)
            //   reject(new Error("User Not Registered!"), null);
            else reject(error);
          });
      });
    },
    //Fix Expectations body req not being sent.
    updateDetails: ({ commit }, params, payload) => {
      return new Promise((resolve, reject) => {
        Axios.post("/user/updateDetails", payload, {
          headers: {
            "Content-Type": "application/json; charset=utf8",
            Authorization: "JWT " + localStorage.getItem("token")
          },
          params: params
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 200) {
              resolve(true);
            }
          })
          .catch(error => {
            if (error.response.status === 400)
              reject(new Error("User Not Found!"), null);
            else if (error.response.status === 403)
              reject(
                new Error("Unauthorized / Session Expired! Please re-login!"),
                null
              );
            else reject(error);
          });
      });
    },
    profileView: ({ commit }, params) => {
      return new Promise((resolve, reject) => {
        Axios.post("/user/profileView", null, {
          headers: {
            "Content-Type": "application/json; charset=utf8",
            Authorization: "JWT " + localStorage.getItem("token")
          },
          params: params
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 200) {
              localStorage.setItem(
                "user.verified",
                JSON.stringify(data.user.verified)
              );
              localStorage.setItem("user.name", JSON.stringify(data.user.name));
              localStorage.setItem(
                "user.email",
                JSON.stringify(data.user.email)
              );
              localStorage.setItem(
                "user.phone",
                JSON.stringify(data.user.phone)
              );
              localStorage.setItem(
                "user.branch",
                JSON.stringify(data.user.branch)
              );
              localStorage.setItem(
                "user.gender",
                JSON.stringify(data.user.gender)
              );
              localStorage.setItem("user.bio", JSON.stringify(data.user.bio));
              localStorage.setItem("user._id", JSON.stringify(data.user._id));
              localStorage.setItem("user.year", JSON.stringify(data.user.year));
              localStorage.setItem("user.slot", JSON.stringify(data.user.slot));
              resolve(true);
            }
          })
          .catch(error => {
            if (error.response.status === 400)
              reject(new Error("User Not Found!"), null);
            else if (error.response.status === 403)
              reject(
                new Error("Unauthorized / Session Expired! Please re-login!"),
                null
              );
            else reject(error);
          });
      });
    },
    addUserImage: ({ commit }, payload, url) => {
      return new Promise((resolve, reject) => {
        Axios.request(url, {
          method: "post",
          headers: {
            Authorization: "JWT " + localStorage.getItem("token")
          },
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
    uploadTimeTable: ({ commit }, payload) => {
      return new Promise((resolve, reject) => {
        Axios.request("https://free-slot-finder.herokuapp.com/upload", {
          method: "post",
          data: payload
        })
          .then(({ data, status }) => {
            console.log(data);
            if (status === 201) {
              localStorage.setItem("fsf._id", JSON.stringify(data.result._id));
              localStorage.setItem(
                "fsf.name",
                JSON.stringify(data.result.name)
              );
              localStorage.setItem(
                "fsf.semester",
                JSON.stringify(data.result.semester)
              );
              localStorage.setItem(
                "fsf.timetable",
                JSON.stringify(data.result.timetable)
              );
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    getSlotType: ({ commit }) => {
      return new Promise((resolve, reject) => {
        Axios.get(
          "https://free-slot-finder.herokuapp.com/slotType/" +
          localStorage.getItem("fsf._id")
        )
          .then(({ data, status }) => {
            console.log(data);
            if (status === 200) {
              localStorage.setItem(
                "fsf.morningFreeCount",
                JSON.stringify(data.result.morningFreeCount)
              );
              localStorage.setItem(
                "fsf.eveningFreeCount",
                JSON.stringify(data.result.eveningFreeCount)
              );
              localStorage.setItem(
                "fsf.slotType",
                JSON.stringify(data.result.slotType)
              );
              resolve(true);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    // SHOWDETAILS: ({ commit }, payload) => {
    //   return new Promise((resolve, reject) => {
    //     Axios.post("updateDetails", payload)
    //       .then(({ data, status }) => {
    //         if (status === 200) {
    //           resolve(true);
    //         }
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // }
  },
  modules: {
    chat: Chat
  }
});

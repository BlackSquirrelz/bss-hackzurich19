import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });

// import Cookie from "js-cookie";

export default new Vuex.Store({
  // state: {
  //   // loadedPosts: [],
  //   token: null
  // },
  // mutations: {
  //   setToken(state, token) {
  //     state.token = token;
  //   },
  //   clearToken(state) {
  //     state.token = null;
  //   }
  // },
  // actions: {
  //   // nuxtServerInit(vuexContext, context) {
  //   //   return context.app.$axios
  //   //     .$get("/posts.json")
  //   //     .then(data => {
  //   //       const postsArray = [];
  //   //       for (const key in data) {
  //   //         postsArray.push({ ...data[key], id: key });
  //   //       }
  //   //       vuexContext.commit("setPosts", postsArray);
  //   //     })
  //   //     .catch(e => context.error(e));
  //   // },
  //   // addPost(vuexContext, post) {
  //   //   const createdPost = {
  //   //     ...post,
  //   //     updatedDate: new Date()
  //   //   };
  //   //   return this.$axios
  //   //     .$post(
  //   //       "https://nuxt-blog.firebaseio.com/posts.json?auth=" +
  //   //         vuexContext.state.token,
  //   //       createdPost
  //   //     )
  //   //     .then(data => {
  //   //       vuexContext.commit("addPost", { ...createdPost, id: data.name });
  //   //     })
  //   //     .catch(e => console.log(e));
  //   // },
  //   // editPost(vuexContext, editedPost) {
  //   //   return this.$axios
  //   //     .$put(
  //   //       "https://nuxt-blog.firebaseio.com/posts/" +
  //   //         editedPost.id +
  //   //         ".json?auth=" +
  //   //         vuexContext.state.token,
  //   //       editedPost
  //   //     )
  //   //     .then(res => {
  //   //       vuexContext.commit("editPost", editedPost);
  //   //     })
  //   //     .catch(e => console.log(e));
  //   // },
  //   // setPosts(vuexContext, posts) {
  //   //   vuexContext.commit("setPosts", posts);
  //   // },
  //   authenticateUser(vuexContext, authData) {
  //     let authUrl =
  //       "http://sso-int.sbb.ch/auth/realms/SBB_Public/protocol/openid-connect/token";
  //     return axios
  //       .post(authUrl, {
  //         grant_type: "client_credentials",
  //         client_id: "22ebc2be",
  //         client_secret: "2c820784f3e28837959abc43120989ca"
  //       })
  //       .then(result => {
  //         console.log(result);
  //         vuexContext.commit("setToken", result.idToken);
  //         localStorage.setItem("token", result.idToken);
  //         localStorage.setItem(
  //           "tokenExpiration",
  //           new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
  //         );
  //         Cookie.set("jwt", result.idToken);
  //         Cookie.set(
  //           "expirationDate",
  //           new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
  //         );
  //         return this.$axios.post("http://localhost:3000/api/track-data", {
  //           data: "Authenticated!"
  //         });
  //       })
  //       .catch(e => console.log(e));
  //   },
  //   initAuth(vuexContext, req) {
  //     let token;
  //     let expirationDate;
  //     // if (req) {
  //     //   if (!req.headers.cookie) {
  //     //     return;
  //     //   }
  //     //   const jwtCookie = req.headers.cookie
  //     //     .split(";")
  //     //     .find(c => c.trim().startsWith("jwt="));
  //     //   if (!jwtCookie) {
  //     //     return;
  //     //   }
  //     //   token = jwtCookie.split("=")[1];
  //     //   expirationDate = req.headers.cookie
  //     //     .split(";")
  //     //     .find(c => c.trim().startsWith("expirationDate="))
  //     //     .split("=")[1];
  //     // } else if (process.client) {
  //     token = localStorage.getItem("token");
  //     expirationDate = localStorage.getItem("tokenExpiration");
  //     // }
  //     if (new Date().getTime() > +expirationDate || !token) {
  //       console.log("No token or invalid token");
  //       vuexContext.dispatch("logout");
  //       return;
  //     }
  //     vuexContext.commit("setToken", token);
  //   },
  //   logout(vuexContext) {
  //     vuexContext.commit("clearToken");
  //     Cookie.remove("jwt");
  //     Cookie.remove("expirationDate");
  //     if (process.client) {
  //       localStorage.removeItem("token");
  //       localStorage.removeItem("tokenExpiration");
  //     }
  //   }
  // },
  // getters: {
  //   // loadedPosts(state) {
  //   //   return state.loadedPosts;
  //   // },
  //   isAuthenticated(state) {
  //     return state.token != null;
  //   }
  // }
});

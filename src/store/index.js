import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {},
  mutations: {
    addPost(state, post) {
      state.posts.push(post);
    },
  },
  actions: {
    fetchPosts({ commit }) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((post) => {
            commit("addPost", post);
          });
        });
    },
  },
  modules: {},
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedNews: {},
  },
  mutations: {
    updateNews(state, payload) {
      state.selectedNews = payload;
    }
  },
  actions: {
    updateNews({commit}, payload) {
      commit('updateNews', payload);
    }
  },
  getters: {
    getSelectedNews(state) {
      return state.selectedNews;
    }
  },
});

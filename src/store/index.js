import Vue from "vue";
import Vuex from "vuex";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Vuex);
Vue.use(Buefy);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

export const store = Vue.observable({
  isNavOpen: false
});

export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};

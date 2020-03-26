import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

const options = {
  minWidth: 600 /* minumum window width for parallax to take effect */
};
import VueParallaxJs from "vue-parallax-js";
Vue.use(VueParallaxJs, options);

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

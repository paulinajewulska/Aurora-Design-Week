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
  state: {
    months: [
      {
        name: "June",
        shows: [
          {
            place: "Yaroslavl, Arena 2000",
            day: "5",
            time: "19:00"
          },
          {
            place: "Kaliningrad, Kaliningrad Stadium",
            day: "15",
            time: "18:00"
          },
          {
            place: "Moscow, Otkrytiye Arena Stadium",
            day: "20",
            time: "21:00"
          },
          {
            place: "Nizhny Novgorod, Nizhny Novgorod Stadium",
            day: "25",
            time: "19:00"
          },
          {
            place: "Kazan, Kazan Arena",
            day: "30",
            time: "21:00"
          }
        ]
      },
      {
        name: "July",
        shows: [
          {
            place: "Surgut, Palace of Sports",
            day: "12",
            time: "21:00"
          },
          {
            place: "Tyumen, Palace of Sports",
            day: "20",
            time: "20:00"
          },
          {
            place: "Minsk, Minsk-Arena",
            day: "28",
            time: "20:00"
          }
        ]
      },
      {
        name: "September",
        shows: [
          {
            place: "Rostov, Rostov Arena",
            day: "06",
            time: "21:00"
          },
          {
            place: "Sochi, Fisht Olympic Stadium",
            day: "13",
            time: "20:00"
          },
          {
            place: "Krasnodar, Krasnodar Arena",
            day: "17",
            time: "20:00"
          },
          {
            place: "Krasnodar, Krasnodar Arena",
            day: "20",
            time: "19:00"
          },
          {
            place: "Ufa, Centralniy Stadium",
            day: "24",
            time: "21:00"
          },
          {
            place: "Nizhny Novgorod, Novgorod Stadium",
            day: "25",
            time: "19:00"
          },
          {
            place: "Moscow, Otkrytiye Arena Stadium",
            day: "30",
            time: "21:00"
          }
        ]
      }
    ]
  },
  getters: {
    getMonthNames: state => {
      return state.months.map(months => months.name);
    },
    getEvents: state => name => {
      return state.months.find(month => month.name === name).shows;
    }
  },
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

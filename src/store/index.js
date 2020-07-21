import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

const WebFont = require("webfontloader");
WebFont.load({
  custom: {
    families: ["Arimo"],
    urls: ["../sass/base/_fonts.scss"]
  }
});

import { VLazyImagePlugin } from "v-lazy-image";

Vue.use(VLazyImagePlugin);

export default new Vuex.Store({
  state: {
    cursorHover: false,
    cursorColor: "red",
    baseURL: "https://aurora-design-week-server.herokuapp.com",
    shows: [],
    performances: "",
    questions: [],
    menu: ["home", "calendar", "speakers", "faq", "contact"],
    speakers: [
      {
        name: "Nnamdi",
        surname: "Obgonnaya",
        country: "AU",
        image: require("../assets/Speakers/jard-rusticus-Ib-4pQtdHt0-unsplash-min.jpg")
      },
      {
        name: "Kweku",
        surname: "Collins",
        country: "BE",
        image: require("../assets/Speakers/brian-lundquist-DwGIBfqLxno-unsplash-min.jpg")
      },
      {
        name: "Kelly",
        surname: "Owens",
        country: "AU",
        image: require("../assets/Speakers/andrey-zvyagintsev-3paYH1ewz3s-unsplash-min.jpg")
      },
      {
        name: "Alex",
        surname: "Cameron",
        country: "JP",
        image: require("../assets/Speakers/denis-agati--5Vl9oimYlU-unsplash-min.jpg")
      },
      {
        name: "Korean",
        surname: "breakfast",
        country: "ES",
        image: require("../assets/Speakers/levi-clancy-WE0gt7t4o2k-unsplash-min.jpg")
      },
      {
        name: "Smino",
        surname: "Williams",
        country: "AU",
        image: require("../assets/Speakers/thomas-mowe-cG-A0o4zV1w-unsplash-min.jpg")
      },
      {
        name: "Josiah",
        surname: "Faulkner",
        country: "US",
        image: require("../assets/Speakers/fayiz-musthafa-yGqsr6EVrGw-unsplash-min.jpg")
      }
    ]
  },
  getters: {
    getBaseURL: state => {
      return state.baseURL;
    },
    getMonthNames: state => {
      return [...new Set(state.shows.map(show => show.month))];
    },
    getEvents: state => month => {
      return state.shows.filter(event => event.month === month);
    },
    getSpeaker: state => (name, surname) => {
      return state.speakers.find(
        speaker => speaker.name === name && speaker.surname === surname
      );
    },
    getEventPerformances: state => {
      return state.performances[0].performances;
    },
    getEventData: state => {
      return state.performances[0];
    }
  },
  mutations: {
    changeCursor(state, payload) {
      const colors = ["red", "black"]; // all possible colors
      if (colors.includes(payload.color)) {
        state.cursorColor = payload.color;
      }
      state.cursorHover = payload.hover;
    },
    saveQuestions(state, questions) {
      state.questions = questions;
    },
    saveShows(state, shows) {
      state.shows = shows;
    },
    savePerformances(state, performances) {
      state.performances = performances;
    }
  },
  actions: {
    changeCursor: ({ commit }, payload) => {
      commit("changeCursor", payload);
    },
    loadQuestions: async ({ commit, state }) => {
      const response = await fetch(`${state.baseURL}/faq`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      const questions = await response.json();
      commit("saveQuestions", questions);
    },
    loadShows: async ({ commit, state }) => {
      const response = await fetch(`${state.baseURL}/calendar`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      const shows = await response.json();
      commit("saveShows", shows);
    },
    loadPerformances: async ({ commit, state }, payload) => {
      const response = await fetch(
        `${state.baseURL}/calendar/${payload.month}/${payload.date}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }
      );
      const performances = await response.json();
      commit("savePerformances", performances);
    }
  }
});

export const store = Vue.observable({
  isNavOpen: false
});

export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  }
};

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
    isCursorRed: true,
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
    ],
    questions: [
      {
        question: "Why do we need the rare masterclass?",
        answer:
          "Creative and tech departments across the country are lacking in diversity of gender, colour, class, preference and perspective – especially at the top. Being a minority brings about a set of issues that many aren’t equipped to deal with, leading to great talent dropping out of the industry prematurely."
      },
      {
        question: "When and where is the rare masterclass?",
        answer:
          "It will take place on the grounds of the Semi Permanent festival in Sydney, May 23 — 24."
      },
      {
        question: "Where do the profits from rare go?",
        answer:
          "All proceeds from Rare will be put towards grants and initiatives that further deliver on Rare’s objective to drive diversity across the creative, media and tech industries."
      },
      {
        question: "What happens if i can’t make it?",
        answer:
          "If you can’t make those dates, or can’t get the time off work, keep an eye on this site. We’re constantly updating our schedule with new Masterclasses, all over the world. So chances are, there’ll be another Masterclass popping up near you soon."
      }
    ],
    menu: [
      "home",
      "about",
      "calendar",
      "speakers",
      "partners",
      "faq",
      "contact"
    ],
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
    getMonthNames: state => {
      return state.months.map(months => months.name);
    },
    getEvents: state => name => {
      return state.months.find(month => month.name === name).shows;
    },
    getSpeaker: state => (name, surname) => {
      return state.speakers.find(
        speaker => speaker.name === name && speaker.surname === surname
      );
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

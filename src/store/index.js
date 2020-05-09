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
            time: "19:00",
            events: [
              {
                name: "artists's mixing bowls",
                description:
                  "This work is a repressed, landscape small collages from cut paper consisting of a multi-channel sound and video installation which is reminiscent of San Francisco’s architectural and urban markers.The work deploys feminist interrogating self- objectification as alluding to rising sea levels."
              },
              {
                name: "headphones, glitter, deck chair",
                description:
                  "This work is a visually pleasing, assembled world in which death and waste are omnipresent consisting of incendiary writing of punk musicians which is reminiscent of landscape and the body."
              }
            ]
          },
          {
            place: "Kaliningrad, Kaliningrad Stadium",
            day: "15",
            time: "18:00",
            events: [
              {
                name: "Google street view footage",
                description:
                  "This work is a virtual reality, primitivistic hallucinatory montage consisting of a multi-channel sound and video installation which is reminiscent of identity, loss, mortality, and love."
              },
              {
                name: "antebellum structures",
                description:
                  "This work is a precious and disturbing, conceptual painting that is experienced both visually and physically consisting of two figures in snorkel gear taking pictures which is reminiscent of formal precision and tenderness."
              }
            ]
          },
          {
            place: "Moscow, Otkrytiye Arena Stadium",
            day: "20",
            time: "21:00",
            events: [
              {
                name: "diatomic earth",
                description:
                  "This work is an attractive, serial small collages from cut paper consisting of various orifices emitting light which is reminiscent of experimental modes of storytelling."
              },
              {
                name: "basketballs",
                description:
                  "This work is a brutal, figurative small collages from cut paper consisting of cartoons, manga, and anime characters which is reminiscent of imperialist exploitation."
              }
            ]
          },
          {
            place: "Nizhny Novgorod, Nizhny Novgorod Stadium",
            day: "25",
            time: "19:00",
            events: [
              {
                name: "floral wire",
                description:
                  "The work deploys pageantry as a way to take control of censorship in order to eliminate everything from bland nonsense to mass-produced pop to expressions of fascist ideology."
              },
              {
                name: "iron-rich dirt",
                description:
                  "This work is an industrial, expressionistic framed view of hallucinatory realms consisting of various orifices emitting light which is reminiscent of an awareness about how ethnography is embedded in place in a way that the homogenized metropli of the First World never allowed you to perceive."
              }
            ]
          },
          {
            place: "Kazan, Kazan Arena",
            day: "30",
            time: "21:00",
            events: [
              {
                name: "bologna",
                description:
                  "This work is a repressed, surreal chrome chameleon consisting of The Bering Sea which is reminiscent of self-love, friendship, romance, familial connection, and desire."
              },
              {
                name: "pizza boxes",
                description:
                  "This work is arestrained, shaped-format painting that is experienced both visually and physically consisting of lush medleys of color, pattern, and texture which is reminiscent of landscape and the body."
              }
            ]
          }
        ]
      },
      {
        name: "July",
        shows: [
          {
            place: "Surgut, Palace of Sports",
            day: "12",
            time: "21:00",
            events: [
              {
                name: "tree trunks",
                description:
                  "This work is an anxiety-inducing, linear machete consisting of wearable technology which is reminiscent of an awareness about how ethnography is embedded in place in a way that the homogenized metropli of the First World never allowed you to perceive."
              },
              {
                name: "Ubuntu Server operating system",
                description:
                  "This work is an explicit, technological infinite visual abyss consisting of the artist himself engaged in an act of unexplained violence which is reminiscent of bodily anxiety."
              }
            ]
          },
          {
            place: "Tyumen, Palace of Sports",
            day: "20",
            time: "20:00",
            events: [
              {
                name: "fishing line",
                description:
                  "This work is a dark, netlike, surrealist penthouse apartment consisting of personal experience which is reminiscent of imperialist exploitation."
              },
              {
                name: "fabric glue",
                description:
                  "This work is a repressive, fantastic small collages from cut paper consisting of cartoons, manga, and anime characters which is reminiscent of he gap between necessity and desire, practicality and fiction."
              }
            ]
          },
          {
            place: "Minsk, Minsk-Arena",
            day: "28",
            time: "20:00",
            events: [
              {
                name: "contact paper",
                description:
                  "This work is a minimal, reflective set of six floor-to-ceiling windows consisting of drab, cluttered office which is reminiscent of an image of aspirational wealth."
              },
              {
                name: "carnation petals",
                description:
                  "This work is an explicit, kitsch site-specific installation consisting of tapestries and linens which is reminiscent of formal precision and tenderness."
              }
            ]
          }
        ]
      },
      {
        name: "September",
        shows: [
          {
            place: "Rostov, Rostov Arena",
            day: "06",
            time: "21:00",
            events: [
              {
                name: "coca cola cans",
                description:
                  "This work is a repressed, representational elevated platform consisting of lush medleys of color, pattern, and texture which is reminiscent of a preoccupation with haunted spaces, aporia and liminality."
              },
              {
                name: "vantablack pigment",
                description:
                  "This work is a disembodied and disguised, serial poem consisting of The Bering Sea which is reminiscent of landscape and the body."
              }
            ]
          },
          {
            place: "Sochi, Fisht Olympic Stadium",
            day: "13",
            time: "20:00",
            events: [
              {
                name: "strangers",
                description:
                  "This work is a fantastical, conceptual meditation on personal transformation consisting of the failed narrative of progress which is reminiscent of European structures."
              },
              {
                name: "The Bering Sea",
                description:
                  "This work is an ornate, serial site-specific installation consisting of floating, ghostly pairs of eyes which is reminiscent of wounded defiance."
              }
            ]
          },
          {
            place: "Krasnodar, Krasnodar Arena",
            day: "17",
            time: "20:00",
            events: [
              {
                name: "a voice encoder and stock footage",
                description:
                  "This work is a simultaneously open, changeable, and tyrannical, reflective meditation on the cycle of life and death consisting of scripted dialogue which is reminiscent of mass migrations of people."
              },
              {
                name: "red clay",
                description:
                  "This work is a deceptively terse, erotic set of eighteen “stained-glass” panels consisting of rich textures and multilayered surfaces which is reminiscent of waterfront pleasure palaces."
              }
            ]
          },
          {
            place: "Krasnodar, Krasnodar Arena",
            day: "20",
            time: "19:00",
            events: [
              {
                name: "shared food",
                description:
                  "This work is a brilliantly colored, erotic set of six floor-to-ceiling windows consisting of individual inhabitants in a living network which is reminiscent of San Francisco’s architectural and urban markers."
              },
              {
                name: "home-made cookies",
                description:
                  "This work is a part landscape, part abstraction, conceptual small collages from cut paper consisting of river and sky which is reminiscent of the social and environmental impacts of climate change."
              }
            ]
          },
          {
            place: "Ufa, Centralniy Stadium",
            day: "24",
            time: "21:00",
            events: [
              {
                name: "a rotunda",
                description:
                  "This work is aat once fairy-tale bucolic and fraught with terror, optical set of six floor-to-ceiling windows consisting of the American dream which is reminiscent of the unsettling dance of seduction, power, trust, tenderness, loss, and betrayal."
              },
              {
                name: "webcam",
                description:
                  "This work is an explicit, cartoonesque series of words consisting of scripted dialogue which is reminiscent of experimental modes of storytelling."
              }
            ]
          },
          {
            place: "Nizhny Novgorod, Novgorod Stadium",
            day: "25",
            time: "19:00",
            events: [
              {
                name: "optical retroreflectors",
                description:
                  "This work is a brilliantly colored, light collected and manipulated images consisting of the artist himself engaged in an act of unexplained violence which is reminiscent of American colonization."
              },
              {
                name: "plaster fingers",
                description:
                  "This work is a disembodied and disguised, architectural elevated platform consisting of juxtaposed luminous, watery veils of paint in bright hues which is reminiscent of the dangers of dark magic and meditating on human suffering."
              }
            ]
          },
          {
            place: "Moscow, Otkrytiye Arena Stadium",
            day: "30",
            time: "21:00",
            events: [
              {
                name: "the Los Angeles River",
                description:
                  "This work is a tragic, trompe l’oeil world in which death and waste are omnipresent consisting of sci-fi narrative of mutual misunderstanding which is reminiscent of a state of anxiety and alarm."
              },
              {
                name: "tempera paint",
                description:
                  "This work is a resonating and contrasting, kinetic sectional sofa consisting of subtle spatial and sonic intervention which is reminiscent of wounded defiance."
              }
            ]
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
    },
    getEventPerformances: (state, getters) => (month, date, place, time) => {
      const monthShows = getters.getEvents(month);
      const shows = monthShows.find(
        show => show.day === date && show.place === place && show.time === time
      );
      if (shows) {
        return shows;
      } else {
        return "Incorrect values";
      }
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

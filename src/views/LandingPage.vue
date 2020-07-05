<template>
  <section
    class="landing-page"
    @mouseover="changeCursor({ color: 'red', hover: false })"
  >
    <h1 class="landing-page__title">
      <span class="column landing-page__title__word">Aurora</span>
      <span class="column is-offset-2 landing-page__title__word">Design</span>
      <span class="column is-offset-1 landing-page__title__word">Week</span>
      <span class="column is-hidden-desktop landing-page__title__word"
        >2020</span
      >
      <span class="column is-hidden-touch landing-page__title__word"
        >13-20 July 2020</span
      >
    </h1>
    <vue-displacement-slideshow
      class="landing-page__slideshow"
      :images="images"
      :displacement="require('../assets/LandingPage/displacement.jpg')"
      :intensity="0.8"
      :speedIn="1.5"
      :speedOut="1.5"
      ease="expo.out"
      ref="slideshow"
    ></vue-displacement-slideshow>
    <ul
      class="landing-page__social-media__list is-hidden-touch"
      v-if="!isMenuOpen"
    >
      <li
        v-for="media in this.socialMedia"
        :key="media.id"
        class="landing-page__social-media__list-item"
        @mousemove="changeCursor({ color: 'red', hover: true })"
        @mouseleave="changeCursor({ color: 'red', hover: false })"
      >
        <a :href="media.link" target="_blank">{{ media.name }}</a>
      </li>
    </ul>
    <p class="landing-page__scroll-wrapper">
      <span class="landing-page__scroll">Scroll down</span>
    </p>
  </section>
</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";

import { gsap } from "gsap";
import { store } from "../store/index.js";
import { mapActions } from "vuex";

export default {
  name: "LandingPage",
  data: function() {
    return {
      vm: this,
      socialMedia: [
        {
          name: "Instagram",
          link: "https://instagram.com"
        },
        {
          name: "Twitter",
          link: "https://twitter.com"
        },
        {
          name: "Facebook",
          link: "https://facebook.com"
        }
      ]
    };
  },
  components: {
    VueDisplacementSlideshow
  },
  computed: {
    images() {
      return [
        require("../assets/LandingPage/mart-pieterman-4XIUmOxP2xQ-unsplash.jpg"),
        require("../assets/LandingPage/duangphorn-wiriya-zm438klkxU4-unsplash.jpg"),
        require("../assets/LandingPage/jack-hunter-qKeNO57OxWo-unsplash.jpg")
      ];
    },
    isMenuOpen() {
      return store.isNavOpen;
    }
  },
  methods: {
    ...mapActions(["changeCursor"]),
    init() {
      //We loop through all our images by calling the 'next' method of our component every 2 seconds
      setInterval(() => {
        if (this.$refs.slideshow) {
          this.$refs.slideshow.next();
        }
      }, 2000);
    },
    animate() {
      gsap.to("body", 0, { css: { visibility: "visible" } });

      const tl = gsap.timeline();

      tl.from(".landing-page__title__word", 1.8, {
        y: 150,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        opacity: 0,
        stagger: {
          amount: 0.3
        }
      }).from(".landing-page__date", 1, {
        y: 15,
        ease: "power4.out",
        skewY: 5,
        opacity: 0
      });
    }
  },
  mounted() {
    this.init();
    this.animate();
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

$font-fullhd-p: $font-fullhd / 5;

.landing-page {
  width: 100vw;
  height: 100vh;
  &__title {
    position: absolute;
    top: 15vh;
    display: flex;
    flex-direction: column;
    width: 90%;
    text-transform: uppercase;
    line-height: 110%;
    z-index: 1;
    @media only screen and (min-width: $tablet) {
      font-size: $font-tablet;
    }
    @media only screen and (min-width: $desktop + 10) {
      top: 20vh;
      left: 10vw;
      font-size: $font-fullhd;
    }
    &__word {
      padding: 0;
    }
  }

  &__slideshow {
    position: absolute;
    top: 31vh;
    left: $margin-mobile;
    width: calc(100vw - 3rem);
    height: 60vh;
    @media only screen and (min-width: $tablet) {
      top: 32.5vh;
      left: calc(40vw - 3rem);
      width: 60vw;
    }
    @media only screen and (min-width: $desktop + 10) {
      top: $margin-fullhd;
      left: 45vw;
      width: 30vw;
      height: calc(100vh - 2rem);
    }
  }
  &__scroll-wrapper {
    position: absolute;
    right: $margin-mobile;
    bottom: $margin-mobile;
    transform: rotate(-180deg);
    width: 1.5rem;
    min-height: 7rem;
    font-weight: bold;
    font-size: $font-mobile / 5;
    writing-mode: vertical-rl;
    text-transform: uppercase;
    overflow: hidden;
    @media only screen and (min-width: $tablet) {
      bottom: $margin-tablet;
      left: $margin-tablet;
      min-height: 12rem;
      font-size: $font-tablet / 5;
    }
    @media only screen and (min-width: $desktop + 10) {
      bottom: $margin-fullhd;
      left: calc(26vw - 0.75rem);
      min-height: $font-fullhd * 2;
      font-size: $font-fullhd / 5;
      font-weight: normal;
    }
  }
  &__scroll {
    position: absolute;
  }
  &__social-media {
    &__list {
      position: absolute;
      right: -0.5rem;
      bottom: 0.25rem;
      display: flex;
      z-index: 99999;
      margin: 0;
      padding: 0;
      transform: rotate(-180deg);
      writing-mode: vertical-rl;
      letter-spacing: 0.05rem;
      a {
        color: $black !important;
      }
      @media only screen and (max-width: $desktop + 9) {
        visibility: hidden;
      }
    }
    &__list-item {
      margin: 0;
      padding: 0.75rem 1.5rem;
      font-size: $font-fullhd-p;
      cursor: pointer;
    }
  }
}
</style>

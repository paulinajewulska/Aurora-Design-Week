<template>
  <section
    class="landing-page"
    @mouseover="changeCursor({ color: 'red', hover: false })"
    v-trip-wire="{ pos: 0.25, func: animate }"
  >
    <h1 class="landing-page__title">
      <div class="landing-page__title__word-wrapper">
        <span class="column landing-page__title__word">Aurora</span>
      </div>
      <div class="landing-page__title__word-wrapper">
        <span class="column is-offset-2 landing-page__title__word">Design</span>
      </div>
      <div class="landing-page__title__word-wrapper">
        <span class="column is-offset-1 landing-page__title__word">Week</span>
      </div>
      <div class="landing-page__title__word-wrapper">
        <span class="column is-hidden-desktop landing-page__title__word"
          >2020</span
        >
        <span class="column is-hidden-touch landing-page__title__word"
          >13-20 July 2020</span
        >
      </div>
    </h1>

    <div class="landing-page__slideshow-wrapper">
      <vue-displacement-slideshow
        class="landing-page__slideshow"
        :images="images"
        :displacement="require('../assets/LandingPage/displacement.jpg')"
        :intensity="0.75"
        :speedIn="1.5"
        :speedOut="1.5"
        ease="expo.out"
        ref="slideshow"
      ></vue-displacement-slideshow>
      <div class="landing-page__slideshow__cover"></div>
    </div>
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
        <a :href="media.link" target="_blank" rel="noreferrer">{{
          media.name
        }}</a>
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
        require("../assets/LandingPage/mikita-yo-IO_CWfjXM7U-unsplash.jpg"),
        require("../assets/LandingPage/nicole-geri-a31khKMmRd0-unsplash.jpg"),
        require("../assets/LandingPage/crawford-passy-TgCiQgbAS4I-unsplash.jpg"),
        require("../assets/LandingPage/romain-morel-xh-b4q8Vwd4-unsplash.jpg"),
        require("../assets/LandingPage/vinicius-amnx-amano-OHPdgstNFGs-unsplash.jpg")
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
      }, 3000);
    },
    animate() {
      gsap.to("body", 0, { css: { visibility: "visible" } });

      const titleWords = document.querySelectorAll(
        ".landing-page__title__word"
      );
      const slideshowCover = document.querySelector(
        ".landing-page__slideshow__cover"
      );
      const image = document.querySelector(".landing-page__slideshow");
      const scrollText = document.querySelector(
        ".landing-page__scroll-wrapper"
      );
      const socialMedia = document.querySelector(
        ".landing-page__social-media__list"
      );

      const tl = gsap.timeline();
      tl.staggerFrom(
        titleWords,
        1.5, // duration
        {
          y: 100,
          ease: "power3.out"
        },
        0.15
      );
      tl.to(slideshowCover, 1.5, { width: 0, ease: "power2.inOut" }, 1);
      tl.from(image, 1.4, {
        scale: 1.6,
        ease: "power3.inOut",
        delay: -1.4
      });
      tl.from([scrollText, socialMedia], 0.5, {
        opacity: 0,
        ease: "power3.in"
      });
    }
  },
  mounted() {
    this.init();
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
    line-height: 100%;
    z-index: 1;
    @media only screen and (min-width: $tablet) {
      top: 20vh;
      font-size: $font-tablet;
    }
    @media only screen and (min-width: $desktop + 10) {
      top: 20vh;
      left: 10vw;
      width: 75%;
      font-size: $font-fullhd;
    }
    &__word {
      padding: 0;
      &-wrapper {
        width: 80vw;
        height: 100%;
        overflow: hidden;
      }
    }
  }
  &__slideshow {
    &__cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $white;
    }
    &-wrapper {
      position: absolute;
      right: $margin-mobile;
      bottom: 2 * $padding-mobile;
      width: calc(100vw - 4 * #{$margin-mobile});
      height: calc(100vh - 8 * #{$margin-mobile});
      overflow: hidden;
      @media only screen and (min-width: $tablet) {
        right: $margin-tablet;
        bottom: $margin-tablet;
        width: 65vw;
      }
      @media only screen and (min-width: $desktop + 10) {
        top: $margin-fullhd;
        left: 45vw;
        width: 30vw;
        height: calc(100vh - 2 * #{$margin-fullhd});
      }
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
    text-transform: uppercase;
    writing-mode: vertical-rl;
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
      right: $margin-fullhd;
      bottom: $margin-fullhd;
      display: flex;
      margin: 0;
      padding: 0;
      transform: rotate(-180deg);
      writing-mode: vertical-rl;
      letter-spacing: 0.05rem;
      z-index: 99999;
      a {
        color: $black !important;
      }
      @media only screen and (max-width: $desktop + 9) {
        visibility: hidden;
      }
    }
    &__list-item {
      margin: 0;
      padding: $margin-fullhd / 2;
      font-size: $font-fullhd-p;
      cursor: pointer;
    }
  }
}
</style>

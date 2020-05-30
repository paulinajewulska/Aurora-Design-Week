<template>
  <section class="landing-page" @mouseover="vm.$store.state.isCursorRed = true">
    <vue-displacement-slideshow
      class="landing-page__slideshow"
      :images="images"
      :displacement="require('../assets/LandingPage/displacement.jpg')"
      :intensity="0.8"
      :speedIn="1.5"
      :speedOut="1.5"
      :angle="Math.PI / 3"
      ease="expo.out"
      ref="slideshow"
    ></vue-displacement-slideshow>
    <h1 class="landing-page__title columns is-mobile">
      <div class="landing-page__title__word-wrapper">
        <span class="column landing-page__title__word">Aurora</span>
      </div>
      <div class="landing-page__title__word-wrapper">
        <span class="column is-offset-1-touch is-offset-2-desktop landing-page__title__word">Design</span>
      </div>
      <div class="landing-page__title__word-wrapper">
        <span class="column is-offset-1-desktop landing-page__title__word">Week</span>
      </div>
      <div class="landing-page__title__word-wrapper">
        <span class="column landing-page__title__word">2019</span>
      </div>
    </h1>
    <p class="column landing-page__date">JUNE 13 - 20</p>
    <p
      class="column is-3-desktop is-offset-7-desktop is-hidden-touch landing-page__paragraph"
    >7 days of free for all talks, designs, installations & performances.</p>
    <ul class="landing-page__social-media__list is-hidden-touch" v-if="!isMenuOpen">
      <li
        v-for="media in this.socialMedia"
        :key="media.id"
        class="landing-page__social-media__list-item"
        @mouseover="vm.$store.state.cursorHover = true"
        @mouseleave="vm.$store.state.cursorHover = false"
      >
        <a :href="media.link" target="_blank">{{ media.name }}</a>
      </li>
    </ul>
    <div class="landing-page__arrow-container">
      <div class="landing-page__arrow"></div>
    </div>
  </section>
</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import { gsap } from "gsap";
import { mapMutations } from "vuex";
import { store } from "../store/index.js";

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
    ...mapMutations(["setCursorHover", "isCursorRed"]),
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
    init() {
      //We loop through all our images by calling the 'next' method of our component every 2 seconds
      setInterval(() => {
        if (this.$refs.slideshow) {
          this.$refs.slideshow.next();
        }
      }, 2000);
    },
    animateText(className, delay, duration, y) {
      gsap.from(`.${className}`, {
        opacity: 0,
        duration: duration,
        y: y,
        delay: delay,
        ease: "power4.out"
      });
    }
  },
  mounted() {
    this.init();
    this.animateText("landing-page__title__word", 1.5, 1.5, "100%");
    this.animateText("landing-page__date", 2, 1.5, "2vh");
    this.animateText("landing-page__paragraph", 2.5, 1.5, "2vh");
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

@keyframes animate {
  0% {
    transform: translateY(-6rem);
    opacity: 0.5;
  }
  35%,
  65% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(6rem);
    opacity: 0;
  }
}

.landing-page {
  max-width: 100vw;
  height: 100vh;
  background-color: $black;
  color: $light-gray;
  z-index: 1;
  &__slideshow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
  }
  &__title {
    position: absolute;
    top: 9rem;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    width: 75%;
    @media only screen and (min-width: $tablet) {
      top: 15rem;
    }
    @media only screen and (min-width: $desktop) {
      top: 12vh;
    }

    &__word-wrapper {
      margin: 0 0.1rem;
      padding: 0;
      position: relative;
      overflow: hidden;
      height: 0.9em;
      &:last-of-type {
        margin-top: 2.5rem;
      }
    }
    &__word {
      padding: 0;
      position: absolute;
      z-index: 5;
    }
  }
  &__date {
    position: absolute;
    bottom: 5%;
    margin: 0;
    padding: 0;
    font-size: 2em;
    @media only screen and (min-width: $tablet) {
      font-size: 2.25em;
    }
    @media only screen and (min-width: $desktop) {
      bottom: 3.5rem;
    }
  }
  &__paragraph {
    position: absolute;
    top: 55%;
    @media only screen and (min-width: $fullhd) {
      top: 45%;
    }
  }
  &__arrow-container {
    position: absolute;
    right: calc(2rem + 0.625rem / 2);
    bottom: 4%;
    width: 2rem;
    height: 4rem;
    overflow: hidden;
    @media only screen and (min-width: $tablet) {
      right: calc(3rem + 0.625rem / 2);
    }
    @media only screen and (min-width: $desktop) {
      right: calc(50% - 1rem);
      bottom: 3.5rem;
    }
  }
  &__arrow {
    position: absolute;
    left: calc(50% - (0.25rem / 4));
    width: calc(0.25rem / 2);
    height: 3rem;
    background-color: $light-gray;
    animation: animate 4.25s infinite 4.25s;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 75%;
      width: 100%;
      height: 30%;
      background-color: $white;
    }
    &::before {
      left: calc(0.55rem / 2);
      transform: rotate(45deg);
    }
    &::after {
      right: calc(0.55rem / 2);
      transform: rotate(-45deg);
    }
  }
  &__social-media {
    &__list {
      position: absolute;
      right: $margin-tablet;
      bottom: 5%;
      display: flex;
      transform: rotate(-180deg);
      z-index: 99999;
      writing-mode: vertical-rl;
      letter-spacing: 0.05rem;
      @media only screen and (min-width: $desktop) {
        bottom: 3.5rem;
      }
    }
    &__list-item {
      padding: 0.5rem;
      font-size: 0.7em;
      cursor: pointer;
    }
  }
}
</style>

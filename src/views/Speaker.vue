<template>
  <section
    class="speaker"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <h2 v-if="loading">Loading loading ..</h2>
    <h2 v-if="error">Oh no! {{ err }}</h2>
    <div class="speaker__image-wrapper" v-if="getSpeaker">
      <div class="speaker__image__wrapper">
        <v-lazy-image
          class="speaker__image"
          :src="getSpeaker.image"
          @load="animateImage"
        />
        <div class="speaker__image__cover"></div>
      </div>
      <h2
        class="speaker__title column is-12-mobile is-6-tablet is-6-desktop is-6-fullhd"
        v-trip-wire="{ pos: 0.2, func: animateText }"
      >
        <span class="speaker__title__name">{{ name }}</span>
        <span class="speaker__title__surname">{{ surname }}</span>
      </h2>
    </div>
    <div class="speaker__below-image" v-if="getSpeaker">
      <p class="speaker__info">{{ getSpeaker.description }}</p>
      <router-link
        class="speaker__button column is-12-mobile is-12-tablet is-12-desktop is-12-fullhd"
        v-if="!isMenuOpen"
        @mousemove.native="changeCursor({ color: 'red', hover: true })"
        @mouseleave.native="changeCursor({ color: 'black', hover: false })"
        :to="{
          name: 'speakers'
        }"
        >Go back to the speakers</router-link
      >
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { store } from "../store/index.js";
import { gsap } from "gsap";

export default {
  name: "speaker",
  data: function() {
    return {
      vm: this,
      name: "",
      surname: "",
      loading: false,
      error: null
    };
  },
  props: {
    nameSurname: {
      type: String
    }
  },
  computed: {
    ...mapGetters(["getSpeaker"]),
    isMenuOpen() {
      return store.isNavOpen;
    }
  },
  destroyed() {
    this.saveSpeaker("");
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    ...mapActions(["changeCursor"]),
    ...mapMutations(["saveSpeaker"]),
    fetchData() {
      this.error = null;
      this.loading = true;
      try {
        const [name, surname] = this.nameSurname.split("-");
        this.name = name;
        this.surname = surname;
        this.$store.dispatch("loadSpeaker", {
          name: this.name,
          surname: this.surname
        });
      } catch (err) {
        this.error = err.toString();
      } finally {
        this.loading = false;
      }
    },
    animateText() {
      gsap.to("body", 0, { css: { visibility: "visible" } });

      const title = document.querySelector(".speaker__title");
      const paragraph = document.querySelector(".speaker__info");
      const button = document.querySelector(".speaker__button");

      const tl = gsap.timeline();
      tl.staggerFromTo(
        [title, paragraph, button],
        1, // duration
        {
          y: 75,
          opacity: 0,
          ease: "power3.out",
          skewY: 2,
          stagger: {
            amount: 0.1
          }
        },
        { y: 0, opacity: 1, ease: "power3.out", skewY: 0 },
        0.2 // delay
      );
    },
    animateImage() {
      const image = document.querySelectorAll(".speaker__image");
      const imageCover = document.querySelectorAll(".speaker__image__cover");
      const tl = gsap.timeline();
      tl.to(imageCover, 1, { width: 0, ease: "power2.inOut" }, 0.1);
      tl.from(image, 1.4, {
        scale: 1.6,
        ease: "power3.inOut",
        delay: -1.1
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../sass/main.scss";

.speaker {
  width: 100vw;
  min-height: 100vh;

  &__image-wrapper {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    @media only screen and (min-width: $desktop) {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &__image {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 65vw;
    height: 45vh;
    margin: 0 auto;
    background-color: $white;
    overflow: hidden;
    @media only screen and (min-width: $desktop) {
      height: 100%;
    }
    &__wrapper {
      display: block;
      width: fit-content;
      margin: 10vh auto 0;
      background-color: $white;
      overflow: hidden;
      @media only screen and (min-width: $tablet) {
        width: 50%;
        margin: 10vh 0 0 7.5vw;
      }
      @media only screen and (min-width: $desktop) {
        position: absolute;
        top: $margin-fullhd;
        left: $margin-fullhd * 2;
        width: 35vw;
        height: calc(100vh - 2 * #{$margin-fullhd});
        margin: 0;
      }
    }
    &__cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $white;
    }
  }

  &__title {
    position: absolute;
    bottom: -4rem;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 4rem;
    opacity: 0;
    &__name,
    &__surname {
      display: block;
    }
    @media only screen and (min-width: $tablet) {
      bottom: calc(40% - 4rem);
      left: 45vw;
      width: 50%;
      text-align: left;
      &__name {
        margin-right: 1rem;
      }
    }
    @media only screen and (min-width: $desktop) {
      top: 15vh;
      font-size: 5rem;
      &__name {
        position: absolute;
        top: 0;
        width: auto;
      }
      &__surname {
        position: absolute;
        top: 4rem;
        width: auto;
      }
    }
  }

  &__below-image {
    position: relative;
    width: 100%;
    height: auto;
    margin: 6rem 0 2rem;
    @media only screen and (min-width: $tablet) {
      margin: 4rem 0 1rem;
    }
    @media only screen and (min-width: $desktop) {
      position: absolute;
      bottom: $padding-fullhd/4;
      left: 45vw;
      display: flex;
      flex-direction: column;
      width: 45vw;
      height: calc(100vh - 15vh - 2 * 5rem - 4 * #{$margin-fullhd});
      margin: 0;
    }
  }

  &__info {
    width: 100%;
    margin: 1rem 0;
    padding: 0;
    text-align: justify;
    opacity: 0;
    @media only screen and (min-width: $tablet) {
      margin: 0 0 3rem;
    }
    @media only screen and (min-width: $desktop) {
      margin: 0 0 auto;
    }
  }

  &__button {
    width: fit-content;
    border: none;
    border-bottom: 1px solid $black;
    padding: 1rem 0 0;
    background-color: transparent;
    color: $black;
    cursor: pointer;
    z-index: 99999;
    opacity: 0;
    @media only screen and (min-width: $tablet) {
      padding: 0;
    }
  }
}
</style>

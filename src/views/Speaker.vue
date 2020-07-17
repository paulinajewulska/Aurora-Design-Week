<template>
  <section
    class="speaker"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <div class="speaker__image-wrapper">
      <v-lazy-image
        class="speaker__image"
        :src="getSpeaker($route.params.name, $route.params.surname).image"
      />
      <h2
        class="speaker__title column is-12-mobile is-6-tablet is-6-desktop is-6-fullhd"
      >
        <span class="speaker__title__name">{{ $route.params.name }}</span>
        <span class="speaker__title__surname">{{ $route.params.surname }}</span>
      </h2>
    </div>
    <div class="speaker__below-image">
      <div class="speaker__line"></div>
      <p class="speaker__info">
        Nam ut libero lectus. Nulla viverra leo diam, sit amet viverra sapien
        mollis eget. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Fusce accumsan urna aliquam tellus
        porttitor, ultricies tempus orci molestie. Morbi a porta ligula.
        Vestibulum eget tortor eros. Cras ullamcorper in neque sit amet tempor.
        Morbi ac consectetur felis. Vestibulum dictum, urna non lobortis
        aliquam, lacus enim varius libero, ut ultricies sem augue id lectus. Sed
        commodo ac purus vitae bibendum. Donec gravida, turpis sed commodo
        mattis, nibh est venenatis nisl, non vehicula lectus libero in odio.
        Cras auctor faucibus consectetur. Nam non tellus placerat, vulputate
        quam vel, vulputate erat.
      </p>
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
import { mapGetters, mapActions } from "vuex";
import { store } from "../store/index.js";

export default {
  name: "speaker",
  data: function() {
    return {
      vm: this
    };
  },
  computed: {
    ...mapGetters(["getSpeaker"]),
    isMenuOpen() {
      return store.isNavOpen;
    }
  },
  methods: {
    ...mapActions(["changeCursor"])
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
    width: 100%;
    height: auto;
    @media only screen and (min-width: $desktop) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }

  &__image {
    display: block;
    width: 65vw;
    height: auto;
    margin: 12.5vh auto 0;
    @media only screen and (min-width: $tablet) {
      width: 50%;
      margin: 10vh 0 0 7.5vw;
    }
    @media only screen and (min-width: $desktop) {
      position: absolute;
      top: $margin-fullhd;
      left: 10vw;
      width: 30vw;
      height: calc(100vh - 2rem);
      margin: 0;
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
    &__name,
    &__surname {
      display: block;
    }
    @media only screen and (min-width: $tablet) {
      width: 50%;
      bottom: calc(40% - 4rem);
      left: 45vw;
      text-align: left;
      &__name {
        margin-right: 1rem;
      }
    }
    @media only screen and (min-width: $desktop) {
      top: 20vh;
      font-size: 5rem;
      &__name {
        position: absolute;
        top: 0;
        width: auto;
      }
      &__surname {
        position: absolute;
        top: 4rem;
        left: 15vw;
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
      bottom: 1rem;
      left: 45vw;
      width: 45vw;
      margin-bottom: 0;
    }
  }

  &__line {
    display: block;
    width: 1px;
    height: 7.5vh;
    margin: 1rem auto;
    background-color: $black;
    @media only screen and (min-width: $tablet) {
      display: none;
    }
  }

  &__info {
    width: 100%;
    margin: 2rem 0;
    padding: 0;
    text-align: justify;
    @media only screen and (min-width: $tablet) {
      margin: 0 0 3rem;
    }
    @media only screen and (min-width: $desktop) {
      min-height: 40vh;
    }
  }

  &__button {
    width: fit-content;
    border: none;
    border-bottom: 1px solid $black;
    padding: 0;
    background-color: transparent;
    color: $black;
    cursor: pointer;
    z-index: 99999;
  }
}
</style>

<template>
  <section
    class="speaker"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <h2
      class="speaker__title column is-12-mobile is-6-tablet is-6-desktop is-6-fullhd"
    >
      {{ $route.params.name }} {{ $route.params.surname }}
    </h2>
    <v-lazy-image
      class="speaker__image is-12-mobile is-6-tablet is-6-desktop is-6-fullhd"
      :src="getSpeaker($route.params.name, $route.params.surname).image"
    />
    <p
      class="speaker__info column is-12-mobile is-6-tablet is-6-desktop is-6-fullhd"
    >
      Nam ut libero lectus. Nulla viverra leo diam, sit amet viverra sapien
      mollis eget. Orci varius natoque penatibus et magnis dis parturient
      montes, nascetur ridiculus mus. Fusce accumsan urna aliquam tellus
      porttitor, ultricies tempus orci molestie. Morbi a porta ligula.
      Vestibulum eget tortor eros. Cras ullamcorper in neque sit amet tempor.
      Morbi ac consectetur felis. Vestibulum dictum, urna non lobortis aliquam,
      lacus enim varius libero, ut ultricies sem augue id lectus. Sed commodo ac
      purus vitae bibendum. Donec gravida, turpis sed commodo mattis, nibh est
      venenatis nisl, non vehicula lectus libero in odio. Cras auctor faucibus
      consectetur. Nam non tellus placerat, vulputate quam vel, vulputate erat.
    </p>
    <p
      class="speaker__info column is-12-mobile is-6-tablet is-6-desktop is-6-fullhd"
    >
      Integer a elementum est. Ut molestie malesuada ante, eu rhoncus mi
      venenatis quis. Duis quis odio sed ex venenatis mattis nec nec sem. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique cursus
      leo. Fusce egestas aliquam justo nec dictum. Quisque metus est, dignissim
      eget libero non, feugiat iaculis mauris. Quisque erat velit, semper vitae
      euismod et, sagittis a velit. Proin nec orci sit amet diam sagittis
      dignissim. Phasellus nec arcu nec lectus condimentum vestibulum. Aliquam
      erat volutpat.
    </p>
    <router-link
      class="speaker__button column is-12-mobile is-12-tablet is-12-desktop is-12-fullhd"
      v-if="!isMenuOpen"
      @mousemove.native="changeCursor({ color: 'red', hover: true })"
      @mouseleave.native="changeCursor({ color: 'black', hover: false })"
      :to="{
        name: 'speakers'
      }"
      >GO BACK TO SPEAKERS</router-link
    >
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
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100vw;
  min-height: 100vh;

  &__image {
    margin: 4rem auto;
    @media only screen and (min-width: 769px) {
      margin-left: 1rem;
      width: calc(50% - 1rem);
    }
  }

  &__title {
    margin: auto;
    padding: 0;
    font-size: 5rem;
    text-transform: uppercase;
    line-height: 4rem;
    word-break: break-word;
  }
  &__info {
    margin-bottom: 4rem;
    padding: 0;
    @media only screen and (min-width: 769px) {
      &:first-of-type {
        padding-right: 1rem;
      }
      &:last-of-type {
        padding-left: 1rem;
      }
    }
  }
  &__button {
    border: none;
    border-bottom: 1px solid $black;
    width: fit-content;
    padding: 0;
    background-color: transparent;
    color: $black;
    cursor: pointer;
    z-index: 99999;
  }
}
</style>

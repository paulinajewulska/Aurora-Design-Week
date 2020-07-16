<template>
  <section
    class="about"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <div class="about__wrapper">
      <p class="about__paragraph">
        ADW 2020 is the sixth edition of the thought-provoking conference format
        organized by St Lucas School of Arts Antwerp. The biennial event offers
        a platform for the compelling dialogue between art, design and society,
        and digs deep in the polemics of this discourse.
      </p>
      <p class="about__paragraph">
        It is a forum where speakers, students and professionals can compare
        their work, design processes, sources of inspiration and methodologies.
      </p>
      <v-lazy-image
        class="about__image"
        :src="require('../assets/annie-spratt-C45XqxDRdbU-unsplash.jpg')"
        alt="People walking on the street"
      />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "About",
  data: function() {
    return { name: "About", vm: this };
  },
  methods: {
    ...mapActions(["changeCursor"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.about {
  min-height: 100vh;
  letter-spacing: 0.03rem;
  &__wrapper {
    width: 100%;
    height: fit-content;
    padding: 4rem 0;
    @media only screen and (min-width: $desktop) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 7fr;
      grid-column-gap: 5%;
      padding: 10rem 0;
    }
  }
  &__image {
    @include about-grid(1, 2, 2, 5);
    display: block;
    margin: 4rem auto;
    background-color: $black;
  }
  &__paragraph {
    margin: 1rem 0;
    @media only screen and (min-width: $tablet) {
      margin: 2rem 0;
      font-size: 1.75rem;
    }
    &:nth-of-type(1) {
      @include about-grid(2, 3, 1, 3);
    }
    &:nth-of-type(2) {
      @include about-grid(2, 3, 4, 6);
    }
  }
}
</style>

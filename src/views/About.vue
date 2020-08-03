<template>
  <section
    class="about"
    @mouseover="changeCursor({ color: 'black', hover: false })"
    v-trip-wire="{ pos: 0.2, func: animate }"
  >
    <div class="about__wrapper">
      <p class="about__paragraph">
        ADW 2020 is the sixth edition of the thought-provoking conference format
        organized by St Lucas School of Arts Antwerp. The biennial event offers
        a platform for the compelling dialogue between art, design and society,
        and digs deep in the polemics of this discourse.
      </p>
      <div class="about__image__wrapper">
        <v-lazy-image
          class="about__image"
          :src="require('../assets/annie-spratt-C45XqxDRdbU-unsplash.jpg')"
          alt="People walking on the street"
        />
        <div class="about__image__cover"></div>
      </div>
      <p class="about__paragraph">
        It is a forum where speakers, students and professionals can compare
        their work, design processes, sources of inspiration and methodologies.
      </p>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { gsap } from "gsap";

export default {
  name: "About",
  data: function() {
    return { name: "About", vm: this };
  },
  methods: {
    ...mapActions(["changeCursor"]),
    animate() {
      gsap.to("body", 0, { css: { visibility: "visible" } });

      const paragraphs = document.querySelectorAll(".about__paragraph");
      const image = document.querySelectorAll(".about__image");
      const imageCover = document.querySelectorAll(".about__image__cover");

      const tl = gsap.timeline();
      tl.staggerFromTo(
        paragraphs,
        1, // duration
        {
          y: 75,
          opacity: 0,
          ease: "power3.out",
          skewY: 2,
          stagger: {
            amount: 0.3
          }
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          skewY: 0
        },
        0.5 // delay
      );
      tl.to(imageCover, 1, { top: "100%", ease: "power2.inOut" }, 0.5);
      tl.from(image, 1.2, {
        scale: 1.25,
        ease: "power3.out",
        delay: -1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.about {
  min-height: fit-content;
  letter-spacing: 0.03rem;
  @media only screen and (min-width: $desktop) {
    min-height: 100vh;
  }
  &__wrapper {
    width: 100%;
    height: fit-content;
    padding: 4rem 0;
    @media only screen and (min-width: $desktop) {
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      grid-template-rows: 3fr;
      grid-column-gap: 5%;
      padding: 10rem 0;
    }
  }
  &__image {
    &__wrapper {
      @include grid(1, 2, 1, 3);
      position: relative;
      display: block;
      align-self: center;
      margin: 4rem auto;
      background-color: $black;
      overflow: hidden;
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
  &__paragraph {
    margin: 1rem 0;
    opacity: 0;
    @media only screen and (min-width: $tablet) {
      margin: 2rem 0;
      font-size: 1.75rem;
    }
    &:nth-of-type(1) {
      @include grid(2, 3, 1, 2);
      align-self: start;
    }
    &:nth-of-type(2) {
      @include grid(2, 3, 2, 3);
      align-self: end;
    }
  }
}
</style>

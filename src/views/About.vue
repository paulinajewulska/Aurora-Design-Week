<template>
  <section class="about">
    <app-subtitle :subtitle="this.name" v-parallax="0.1"></app-subtitle>
    <div class="about__wrapper">
      <p class="about__paragraph" v-parallax="0.15">
        ADW 2019 is the sixth edition of the thought-provoking conference format
        organized by St Lucas School of Arts Antwerp. The biennial event offers
        a platform for the compelling dialogue between art, design and society,
        and digs deep in the polemics of this discourse. It is a forum where
        speakers, students and professionals can compare their work, design
        processes, sources of inspiration and methodologies.
      </p>
      <v-lazy-image
        class="about__image"
        :src="require('../assets/img.png')"
        alt="ADW"
        v-parallax="0.2"
      />
      <p class="about__paragraph" v-parallax="0.15">
        During Integrated 2015, cultural philosopher Lieven De Cauter told the
        public to go and take a hike with his closing act entitled ‘Fuck
        Format’, a clenched quote for which he didn’t even require 140
        characters. De Cauter was referring not only to the tyranny of the
        concept an sich, but also to how our way of thinking is being
        indoctrinated by predefined and fossilized paradigms and world views.
        Like the TINA slogan: ‘There is no alternative.’ In other words: vote,
        shut up and endure. Nevertheless, despite what populists would like us
        to believe, there are alternative and possibly even more radical
        ‘groundswells of opinion’ noticeable, not seldom artistically inspired.
        Citizen initiatives, for instance, occupy an increasingly significant
        place in society. These are movements that emerge because an authority
        has (still) not developed a policy for them or because a market has
        (still) not seen the point of them and is therefore waiting. This civil
        terrain, also called the ‘commons’, occupies as it were a third space
        between market and state, and it does so under various guises (mental,
        physical and virtual), and that’s why it also often finds itself in a
        grey zone between legality and illegality.
      </p>
    </div>
  </section>
</template>

<script>
import Subtitle from "../components/Others/Subtitle.vue";
export default {
  name: "About",
  data: function() {
    return { name: "About" };
  },
  components: {
    AppSubtitle: Subtitle
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.about {
  min-height: 100vh;
  &__wrapper {
    width: 100%;
    height: fit-content;
    @media only screen and (min-width: $tablet) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 7fr;
      grid-column-gap: 5%;
    }
  }
  &__image {
    @include about-grid(1, 2, 2, 5);
    display: block;
    margin: 1.5rem auto;
  }
  &__paragraph {
    margin: 1rem 0;
    &:nth-of-type(1) {
      @include about-grid(2, 3, 1, 3);
    }
    &:nth-of-type(2) {
      @include about-grid(2, 3, 4, 6);
    }
    &:nth-of-type(3) {
      @include about-grid(2, 3, 7, 8);
    }
  }
}
</style>

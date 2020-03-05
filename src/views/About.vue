<template>
  <section class="about">
    <app-subtitle :subtitle="this.name"></app-subtitle>
    <div class="about__wrapper">
      <p class="about__paragraph">
        ADW 2019 is the sixth edition of the thought-provoking conference format
        organized by St Lucas School of Arts Antwerp. The biennial event offers
        a platform for the compelling dialogue between art, design and society,
        and digs deep in the polemics of this discourse. It is a forum where
        speakers, students and professionals can compare their work, design
        processes, sources of inspiration and methodologies.
      </p>
      <div class="line"></div>
      <img class="about__image" src="../assets/img.png" alt="ADW" />
      <p class="about__paragraph">
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
      <p class="about__paragraph">
        Because whoever launches a citizen initiative or claims civil rights
        doesn’t yet know whether they will be agreed to or not. Will an
        authority accept and regulate them, or will it work against these
        initiatives, sabotage them or even criminalize them? To be clear: civil
        actions are not simply criminal, but they precede the distinction
        between legality and illegality. That’s why it also always involves
        risky behaviour. The civilian who sticks his neck out, demands something
        new or sets up an organization puts himself on the line and runs the
        risk of never being recognized and even of never achieving his social
        position or losing it for good. It thus requires courage, and the social
        media also play a crucial role in this everyday struggle, for better or
        worse. Because online sharing is often synonymous with online lynching.
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
    margin: 1rem auto;
  }
  &__paragraph {
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
  .line {
    @include line(100%);
    @media only screen and (min-width: $tablet) {
      display: none;
    }
  }
}
</style>

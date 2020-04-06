<template>
  <section class="speakers" @mouseover="vm.$store.state.isCursorRed = false">
    <app-subtitle :subtitle="this.name" v-parallax="0.1"></app-subtitle>
    <ul class="speakers__list">
      <li
        v-for="speaker in speakers"
        :key="speaker.name"
        class="speakers__list-item"
        v-parallax="0.2"
        @mouseover="vm.$store.state.cursorHover = true"
        @mouseleave="vm.$store.state.cursorHover = false"
      >
        <div class="speakers__list-item__name">{{ speaker.name }}</div>
        <div class="speakers__list-item__surname">{{ speaker.surname }}</div>
        <div class="speakers__list-item__circle">{{ speaker.country }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import Subtitle from "../components/Others/Subtitle.vue";
import { mapMutations } from "vuex";

export default {
  name: "Speakers",
  data: function() {
    return {
      name: "Speakers",
      speakers: [
        { name: "Nnamdi", surname: "Obgonnaya", country: "AU" },
        { name: "Google", surname: "", country: "US" },
        { name: "Kweku", surname: "Collins", country: "BE" },
        { name: "Kelly", surname: "Owens", country: "AU" },
        { name: "Alex", surname: "Cameron", country: "JP" },
        { name: "Japanese", surname: "breakfast", country: "ES" },
        { name: "Smino", surname: "", country: "AU" },
        { name: "Last", surname: "entanglements", country: "US" }
      ],
      vm: this
    };
  },
  computed: {
    ...mapMutations(["setCursorHover", "isCursorRed"])
  },
  components: {
    AppSubtitle: Subtitle
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

$circle-size-mobile: 2.3rem;
$circle-size-tablet: 3.2rem;
$circle-size-desktop: 3.2rem;

.speakers {
  min-height: 100vh;
  &__list {
    &-item {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      text-transform: uppercase;
      width: fit-content;
      @media only screen and (min-width: $tablet) {
        font-size: 3.5rem;
      }
      @media only screen and (min-width: $desktop) {
        font-size: 3rem;
      }
      &__name,
      &__surname {
        width: fit-content;
        margin-right: 0.75rem;
      }
      &__circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: $circle-size-mobile;
        height: $circle-size-mobile;
        font-size: 1.4rem;
        border: 0.15rem solid $black;
        border-radius: 50%;
        @media only screen and (min-width: $tablet) {
          width: $circle-size-tablet;
          height: $circle-size-tablet;
          font-size: 2rem;
        }
      }
    }
  }
}
</style>

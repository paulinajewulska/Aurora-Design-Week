<template>
  <section
    class="event"
    @mouseover="changeCursor({ color: 'red', hover: false })"
  >
    <h1 class="event__title">LECTURE NIGHT</h1>
    <h2 class="event__date">{{ getAllInfoAboutEvents.place }}</h2>
    <h2 class="event__date">
      {{ getAllInfoAboutEvents.time }} -
      {{ parseInt(getAllInfoAboutEvents.time) + 3 }}:00
    </h2>
    <div class="event__paragraph__wrapper">
      <div
        class="event__paragraph"
        v-for="(event, index) in getAllInfoAboutEvents.events"
        :key="event.id"
      >
        <v-lazy-image
          class="event__paragraph__image"
          :src="require('../assets/annie-spratt-C45XqxDRdbU-unsplash.jpg')"
          alt="People walking on the street"
        />
        <div class="event__paragraph__subtitle">
          <span class="event__paragraph__icon">{{ index + 1 }}</span>
          {{ event.name }}
        </div>
        <div class="event__paragraph__text">{{ event.description }}</div>
        <router-link
          class="event__button"
          v-if="!isMenuOpen"
          @mousemove.native="changeCursor({ color: 'red', hover: true })"
          @mouseleave.native="changeCursor({ color: 'black', hover: false })"
          :to="{
            name: 'buyTicket',
            params: {
              title: event.name
            }
          }"
          >BUY TICKET</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { store } from "../store/index.js";

export default {
  name: "Event",
  data: function() {
    return { vm: this };
  },
  props: {
    date: {
      type: String
    },
    place: {
      type: String
    },
    time: {
      type: String
    },
    month: {
      type: String
    }
  },
  computed: {
    ...mapGetters(["getEventPerformances"]),
    getAllInfoAboutEvents() {
      return this.getEventPerformances(
        this.month,
        this.date,
        this.place,
        this.time
      );
    },
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

$circle-size-mobile: 1rem;
$circle-size-tablet: 1.25rem;
$circle-size-desktop: 1.5rem;

@mixin icon($color) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: $circle-size-mobile;
  height: $circle-size-mobile;
  margin-right: 0.5rem;
  border: 0.05rem solid $color;
  border-radius: 50%;
  padding: 0;
  font-size: 0.75rem;
  color: $white;
  @media only screen and (min-width: $tablet) {
    width: $circle-size-tablet;
    height: $circle-size-tablet;
    font-size: 1rem;
  }
  @media only screen and (min-width: $fullhd) {
    width: $circle-size-desktop;
    height: $circle-size-desktop;
    font-size: 1.25rem;
  }
}

.event {
  min-height: 100vh;
  color: $white;
  background-color: $black;
  &__title {
    width: 100%;
    margin: 1.5rem 0;
    border-bottom: 1px solid $white;
    padding-bottom: 1rem;
    font-size: 2em !important;
    line-height: 2rem !important;
    @media only screen and (min-width: $tablet) {
      margin-top: 4rem;
    }
  }
  &__date {
    font-size: 2em !important;
    text-transform: uppercase;
  }
  &__paragraph {
    position: relative;
    margin: 2rem 0;
    border: 1px solid $white;
    width: 100%;
    @media only screen and (min-width: $tablet) {
      width: 45%;
      margin: 0;
      &:first-child {
        margin-right: 2rem;
      }
    }
    @media only screen and (min-width: $desktop) {
      width: 35%;
    }
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 2rem 0;
      @media only screen and (min-width: $tablet) {
        margin: 4rem 0;
      }
    }
    &__subtitle {
      display: flex;
      align-items: baseline;
      margin: 1rem;
      text-transform: uppercase;
    }
    &__icon {
      @include icon($white);
    }
    &__text {
      margin: 1rem;
      padding-bottom: 3.2rem;
    }
  }
  &__button {
    position: absolute;
    bottom: 1.75rem;
    width: fit-content;
    margin: 0 1rem;
    border: none;
    border-bottom: 1px solid $white;
    padding: 0;
    color: $white;
    background-color: transparent;
    cursor: pointer;
    z-index: 99999;
  }
}
</style>

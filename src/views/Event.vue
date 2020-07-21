<template>
  <section
    class="event"
    @mouseover="changeCursor({ color: 'red', hover: false })"
  >
    <div class="event__info-wrapper" v-if="getEventData">
      <p class="event__city">{{ getEventData.city }}</p>
      <p class="event__place">{{ getEventData.place }}</p>
      <p class="event__date">
        {{ getEventData.day }} {{ getEventData.month }} 2020
      </p>
    </div>
    <div class="event__performances" v-if="getEventData">
      <div class="event__timeline">
        <p class="event__timeline__time--start">{{ getEventData.start }}</p>
        <div class="event__timeline__line"></div>
        <p class="event__timeline__time--end">{{ getEventData.end }}</p>
      </div>
      <div class="event__paragraph__wrapper">
        <div
          class="event__paragraph"
          v-for="(event, index) in getEventData.performances"
          :key="index"
        >
          <v-lazy-image
            class="event__paragraph__image"
            :src="require('../assets/annie-spratt-C45XqxDRdbU-unsplash.jpg')"
            alt="People walking on the street"
          />
          <div class="event__paragraph-wrapper">
            <div class="event__paragraph__subtitle">
              <span class="event__paragraph__icon">{{ index + 1 }}</span>
              {{ event.name }}
            </div>
            <div class="event__paragraph__text">{{ event.description }}</div>
            <router-link
              class="event__button"
              v-if="!isMenuOpen"
              @mousemove.native="changeCursor({ color: 'red', hover: true })"
              @mouseleave.native="
                changeCursor({ color: 'black', hover: false })
              "
              :to="{
                name: 'buyTicket',
                params: {
                  title: event.name
                }
              }"
              >Buy tickets</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <router-link
      class="event__button-calendar"
      v-if="!isMenuOpen"
      @mousemove.native="changeCursor({ color: 'red', hover: true })"
      @mouseleave.native="changeCursor({ color: 'black', hover: false })"
      :to="{
        name: 'calendar'
      }"
      >Go back to calendar</router-link
    >
  </section>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import { store } from "../store/index.js";

export default {
  name: "Event",
  data: function() {
    return { vm: this };
  },
  props: {
    month: {
      type: String
    },
    date: {
      type: String
    }
  },
  computed: {
    ...mapGetters(["getEventPerformances", "getEventData"]),
    isMenuOpen() {
      return store.isNavOpen;
    }
  },
  created() {
    this.$store.dispatch("loadPerformances", {
      month: this.month,
      date: this.date
    });
  },
  beforeDestroy() {
    this.savePerformances("");
  },
  methods: {
    ...mapActions(["changeCursor"]),
    ...mapMutations(["savePerformances"])
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
  background-color: $black;
  color: $white;
  @media only screen and (min-width: $desktop) {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }
  &__info-wrapper {
    width: 100%;
    margin: 10vh 0 5vh;
    @media only screen and (min-width: $desktop) {
      width: 45%;
    }
    @media only screen and (min-width: $fullhd) {
      width: 50%;
      margin: 7.5vh 0 5vh;
    }
  }
  &__city {
    font-size: 3.5rem;
    line-height: 120%;
    word-break: break-word;
    @media only screen and (min-width: $tablet) {
      font-size: 5rem;
    }
    @media only screen and (min-width: $desktop) {
      font-size: 7rem;
    }
  }
  &__place,
  &__date {
    font-size: 2.5rem;
    line-height: 120%;
    @media only screen and (min-width: $tablet) {
      font-size: 3rem;
    }
    @media only screen and (min-width: $desktop) {
      font-size: 5rem;
    }
  }
  &__performances {
    display: flex;
    @media only screen and (min-width: $desktop) {
      margin-top: 7.5vh;
      width: 55%;
      height: fit-content;
    }
    @media only screen and (min-width: $fullhd) {
      width: 50%;
    }
  }
  &__timeline {
    position: relative;
    &__time {
      position: absolute;
      margin: 1rem 0;
      width: 100%;
      font-size: 1rem;
      text-align: center;
      &--start {
        top: 0;
      }
      &--end {
        bottom: 0;
      }
    }
    &__line {
      margin: 1rem 1.35rem;
      width: 1px;
      height: 95%;
      background-color: $white;
    }
  }
  &__paragraph {
    position: relative;
    margin: 1.5rem 0;
    border: 1px solid $white;
    width: 100%;
    @media only screen and (min-width: $tablet) {
      display: flex;
      flex-wrap: wrap;
      @media only screen and (min-width: $fullhd) {
        margin-left: 1rem;
      }
    }
    &__image {
      @media only screen and (min-width: $tablet) {
        width: 40%;
      }
    }
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 3.5rem 0 2rem;
      width: calc(100% - 2.8rem - 1px);
      height: fit-content;
      @media only screen and (min-width: $tablet) {
        margin: 4rem 0 1rem;
      }
      @media only screen and (min-width: $desktop) {
        width: 75%;
      }
    }
    &-wrapper {
      @media only screen and (min-width: $tablet) {
        width: 60%;
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
      font-size: 0.75rem;
    }
  }
  &__button {
    position: absolute;
    bottom: 1.75rem;
    margin: 0 1rem;
    border: none;
    border-bottom: 1px solid $white;
    padding: 0;
    width: fit-content;
    color: $white;
    background-color: transparent;
    cursor: pointer;
    z-index: 99999;
    &-calendar {
      display: block;
      margin: 3rem 0 0;
      border: none;
      border-bottom: 1px solid $white;
      padding: 0;
      width: fit-content;
      color: $white;
      background-color: transparent;
      cursor: pointer;
      z-index: 99999;
      @media only screen and (min-width: $tablet) {
        margin: 5rem 0 0;
      }
    }
  }
}
</style>

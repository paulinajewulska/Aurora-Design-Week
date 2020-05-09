<template>
  <router-link
    class="calendar__month__day"
    v-if="!isMenuOpen"
    @mousemove.native="
      (vm.$store.state.isCursorRed = true), (vm.$store.state.cursorHover = true)
    "
    @mouseleave.native="
      (vm.$store.state.isCursorRed = false),
        (vm.$store.state.cursorHover = false)
    "
    :to="{
      name: 'event',
      params: {
        month: month,
        event: `${date}-${place}`,
        date: date,
        place: place,
        time: time
      }
    }"
  >
    <p class="calendar__month__day__date">{{ date }}</p>
    <p class="calendar__month__day__place">{{ place }}</p>
    <p class="calendar__month__day__time">{{ time }}</p>
  </router-link>
</template>

<script>
import { store } from "../../store/index.js";

export default {
  name: "CalendarDay",
  data: function() {
    return { vm: this };
  },
  props: {
    date: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    }
  },
  computed: {
    isMenuOpen() {
      return store.isNavOpen;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

$breakpoints: $tablet, $desktop, $widescreen, $fullhd;
$denominators: 3, 3, 4, 5;

.calendar__month__day {
  color: $black;
  cursor: pointer;
  z-index: 99999;
  @each $breakpoint in $breakpoints {
    @include calendar-month-day-width(
      $breakpoint,
      nth($denominators, index($breakpoints, $breakpoint))
    );
  }
  width: 50%;
  height: 10rem;
  padding: 0.9rem 0.75rem 0.9rem 0;
  &__date {
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
  }
}
</style>

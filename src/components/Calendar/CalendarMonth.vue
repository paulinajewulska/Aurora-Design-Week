<template>
  <div class="calendar__month">
    <p class="calendar__month__name--touch is-hidden-desktop">
      {{ monthName }}
    </p>
    <div class="calendar__month__line"></div>
    <div class="calendar__month__month-wrapper">
      <p class="calendar__month__name--desktop is-hidden-touch">
        {{ monthName }}
      </p>
      <div class="calendar__month__days-wrapper">
        <app-calendar-day
          v-for="day in getEvents(monthName)"
          :key="day.id"
          :date="day.day"
          :place="day.place"
          :time="day.time"
          :month="monthName"
        ></app-calendar-day>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
import { mapGetters } from "vuex";

export default {
  name: "CalendatMonth",
  props: {
    monthName: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["getEvents"])
  },
  components: {
    AppCalendarDay: CalendarDay
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";
$breakpoints: $desktop, $widescreen, $fullhd;
$denominators: 4, 5, 6;

.calendar__month {
  margin-bottom: 3rem;
  &__name {
    &--desktop {
      @each $breakpoint in $breakpoints {
        @include calendar-month-day-width(
          $breakpoint,
          nth($denominators, index($breakpoints, $breakpoint))
        );
      }
      height: 100%;
      padding: 0.75rem 0.75rem 0.75rem 0;
    }
    &--desktop,
    &--touch {
      text-transform: capitalize;
    }
  }
  &__line {
    @include line(100%);
    margin: 0.25rem 0 0;
  }
  &__month-wrapper {
    display: flex;
    width: 100%;
  }
  &__days-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 1.75rem;
  }
}
</style>

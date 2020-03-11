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
          date="05"
          place="place"
          time="19:00"
        ></app-calendar-day>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";

export default {
  name: "CalendatMonth",
  data: function() {
    return {};
  },
  props: {
    monthName: {
      type: String,
      required: true,
      default: "JULY"
    }
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
  }
}
</style>

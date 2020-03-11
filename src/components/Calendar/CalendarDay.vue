<template>
  <div class="calendar__month__day">
    <p class="calendar__month__day__date">{{ date }}</p>
    <p class="calendar__month__day__place">{{ place }}</p>
    <p class="calendar__month__day__time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: "CalendarDay",
  data: function() {
    return {};
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
  @each $breakpoint in $breakpoints {
    @include calendar-month-day-width(
      $breakpoint,
      nth($denominators, index($breakpoints, $breakpoint))
    );
  }
  width: 50%;
  height: fit-content;
  padding: 0.75rem 0.75rem 0.75rem 0;
  &__date {
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
  }
}
</style>

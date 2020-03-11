<template>
  <section class="calendar">
    <app-subtitle :subtitle="this.name"></app-subtitle>
    <app-calendar-month monthName="July"></app-calendar-month>
  </section>
</template>

<script>
import Subtitle from "../components/Others/Subtitle.vue";
import CalendarMonth from "../components/Calendar/CalendarMonth.vue";

export default {
  name: "Partners",
  data: function() {
    return { name: "Upcoming shows" };
  },
  components: {
    AppSubtitle: Subtitle,
    AppCalendarMonth: CalendarMonth
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>

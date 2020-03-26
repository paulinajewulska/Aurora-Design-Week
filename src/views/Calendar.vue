<template>
  <section class="calendar">
    <app-subtitle :subtitle="this.name" v-parallax="0.1"></app-subtitle>
    <app-calendar-month monthName="July" v-parallax="0.2"></app-calendar-month>
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

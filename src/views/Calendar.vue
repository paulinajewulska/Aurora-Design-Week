<template>
  <section class="calendar">
    <app-subtitle :subtitle="this.name" v-parallax="0.1"></app-subtitle>
    <div
      class="calendar__months"
      v-for="month in getMonthNames"
      :key="month.id"
    >
      <app-calendar-month
        :monthName="month"
        v-parallax="0.2"
      ></app-calendar-month>
    </div>
  </section>
</template>

<script>
import Subtitle from "../components/Others/Subtitle.vue";
import CalendarMonth from "../components/Calendar/CalendarMonth.vue";
import { mapGetters } from "vuex";

export default {
  name: "Partners",
  data: function() {
    return { name: "Upcoming shows" };
  },
  computed: {
    ...mapGetters(["getMonthNames"])
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

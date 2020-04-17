<template>
  <section class="calendar" @mouseover="vm.$store.state.isCursorRed = false">
    <app-subtitle :subtitle="this.name"></app-subtitle>
    <div
      class="calendar__months"
      v-for="month in getMonthNames"
      :key="month.id"
    >
      <app-calendar-month :monthName="month"></app-calendar-month>
    </div>
  </section>
</template>

<script>
import Subtitle from "../components/Others/Subtitle.vue";
import CalendarMonth from "../components/Calendar/CalendarMonth.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Partners",
  data: function() {
    return { name: "Upcoming shows", vm: this };
  },
  computed: {
    ...mapGetters(["getMonthNames"]),
    ...mapMutations(["isCursorRed"])
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

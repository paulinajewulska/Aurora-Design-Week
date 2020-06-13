<template>
  <section
    class="calendar"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Partners",
  data: function() {
    return { name: "Upcoming shows", vm: this };
  },
  computed: {
    ...mapGetters(["getMonthNames"])
  },
  methods: {
    ...mapActions(["changeCursor"])
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

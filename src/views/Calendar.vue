<template>
  <section
    class="calendar"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <h1 class="calendar__title">{{ name }}</h1>
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
import { mapGetters, mapActions } from "vuex";
const CalendarMonth = () => import("../components/Calendar/CalendarMonth.vue");

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
  beforeCreate() {
    this.$store.dispatch("loadShows");
  },
  components: {
    AppCalendarMonth: CalendarMonth
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
.calendar {
  &__title {
    padding: 1rem 0 4rem;
    font-size: 3rem;
    @media only screen and (min-width: $tablet) {
      padding: 0 0 6rem;
      font-size: 4rem;
    }
  }
}
</style>

<template>
  <section
    class="calendar"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <h1 class="calendar__title">{{ name }}</h1>
    <h2 v-if="loading">Loading loading ..</h2>
    <h2 v-if="error">Oh no! {{ error }}</h2>
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
    return {
      name: "Upcoming shows",
      vm: this,
      loading: false,
      error: null
    };
  },
  computed: {
    ...mapGetters(["getMonthNames"])
  },
  methods: {
    ...mapActions(["changeCursor"]),
    fetchData() {
      this.error = null;
      this.loading = true;
      try {
        this.$store.dispatch("loadShows");
      } catch (err) {
        this.error = err.toString();
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
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

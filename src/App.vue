<template>
  <div id="app">
    <app-landing-page></app-landing-page>
    <app-about></app-about>
    <app-speakers></app-speakers>
    <app-partners></app-partners>
    <app-calendar></app-calendar>
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage.vue";
import About from "@/views/About.vue";
import Speakers from "@/views/Speakers.vue";
import Partners from "@/views/Partners.vue";
import Calendar from "@/views/Calendar.vue";

export default {
  name: "app",
  components: {
    AppLandingPage: LandingPage,
    AppAbout: About,
    AppSpeakers: Speakers,
    AppPartners: Partners,
    AppCalendar: Calendar
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
body {
  font-family: "Arimo";
  width: 100%;
}
</style>

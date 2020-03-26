<template>
  <div id="app">
    <app-burger></app-burger>
    <app-slidebar></app-slidebar>
    <app-landing-page></app-landing-page>
    <app-about></app-about>
    <app-speakers></app-speakers>
    <app-partners></app-partners>
    <app-calendar></app-calendar>
  </div>
</template>

<script>
import Burger from "@/components/BurgerMenu/Burger.vue";
import Slidebar from "@/components/BurgerMenu/Slidebar.vue";
import LandingPage from "@/views/LandingPage.vue";
import About from "@/views/About.vue";
import Speakers from "@/views/Speakers.vue";
import Partners from "@/views/Partners.vue";
import Calendar from "@/views/Calendar.vue";

export default {
  name: "app",
  components: {
    AppBurger: Burger,
    AppSlidebar: Slidebar,
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
</style>

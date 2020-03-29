<template>
  <div id="app">
    <app-cursor></app-cursor>
    <app-burger></app-burger>
    <app-slidebar></app-slidebar>
    <app-landing-page></app-landing-page>
    <app-about></app-about>
    <app-calendar></app-calendar>
    <app-speakers></app-speakers>
    <app-partners></app-partners>
    <app-f-a-q></app-f-a-q>
  </div>
</template>

<script>
import AppCursor from "@/components/Others/Cursor.vue";
import Burger from "@/components/BurgerMenu/Burger.vue";
import Slidebar from "@/components/BurgerMenu/Slidebar.vue";
import LandingPage from "@/views/LandingPage.vue";
import About from "@/views/About.vue";
import Calendar from "@/views/Calendar.vue";
import Speakers from "@/views/Speakers.vue";
import Partners from "@/views/Partners.vue";
import FAQ from "@/views/FAQ.vue";

export default {
  name: "app",
  components: {
    AppCursor: AppCursor,
    AppBurger: Burger,
    AppSlidebar: Slidebar,
    AppLandingPage: LandingPage,
    AppAbout: About,
    AppCalendar: Calendar,
    AppSpeakers: Speakers,
    AppPartners: Partners,
    AppFAQ: FAQ
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>

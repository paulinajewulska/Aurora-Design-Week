<template>
  <div id="app">
    <app-landing-page></app-landing-page>
    <app-about></app-about>
    <app-speakers></app-speakers>
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage.vue";
import About from "@/views/About.vue";
import Speakers from "@/views/Speakers.vue";

export default {
  name: "app",
  components: {
    AppLandingPage: LandingPage,
    AppAbout: About,
    AppSpeakers: Speakers
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

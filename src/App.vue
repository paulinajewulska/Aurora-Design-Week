<template>
  <div id="app">
    <app-landing-page></app-landing-page>
    <app-about></app-about>
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage.vue";
import About from "@/views/About.vue";

export default {
  name: "app",
  components: {
    AppLandingPage: LandingPage,
    AppAbout: About
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

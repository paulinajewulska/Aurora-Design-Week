<template>
  <div id="app">
    <app-landing-page></app-landing-page>
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage.vue";

export default {
  name: "app",
  components: {
    AppLandingPage: LandingPage
  }
};
</script>

<style>
@import "./styles/_normalize.scss";
</style>
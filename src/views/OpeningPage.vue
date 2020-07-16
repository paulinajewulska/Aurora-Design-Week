<template>
  <div class="opening-page">
    <app-landing-page></app-landing-page>
    <app-about></app-about>
    <app-speakers></app-speakers>
    <app-partners></app-partners>
    <app-contact></app-contact>
  </div>
</template>

<script>
import LandingPage from "@/views/LandingPage.vue";
import About from "@/views/About.vue";
import Speakers from "@/views/Speakers.vue";
import Partners from "@/views/Partners.vue";
import Contact from "@/views/Contact.vue";

export default {
  name: "openingPage",
  components: {
    AppLandingPage: LandingPage,
    AppAbout: About,
    AppSpeakers: Speakers,
    AppPartners: Partners,
    AppContact: Contact
  }
};
</script>

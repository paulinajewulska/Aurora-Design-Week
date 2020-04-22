<template>
  <section class="contact" @mouseover="vm.$store.state.isCursorRed = true">
    <app-subtitle
      :subtitle="this.name"
      class="contact__subtitle"
    ></app-subtitle>
    <div class="contact__wrapper">
      <p
        class="contact__application__paragraph column is-12-mobile is-5-tablet is-4-desktop is-4-fullhd"
      >
        Are you a designer, artist, creative, or a de facto criminal? Join the
        discussion on 13—20 November at deSingel in Antwerp, Belgium.
      </p>
      <app-contact-application></app-contact-application>
    </div>
    <div class="contact__wrapper">
      <p
        class="contact__message__title column is-12-mobile is-5-tablet is-4-desktop is-4-fullhd"
      >
        Say hello!
      </p>
      <app-contact-question></app-contact-question>
    </div>
  </section>
</template>

<script>
import Subtitle from "../components/Others/Subtitle.vue";
import ContactApplication from "../components/Contact/ContactApplication.vue";
import ContactQuestion from "../components/Contact/ContactQuestion.vue";
import { mapMutations } from "vuex";

export default {
  name: "Contact",
  data: function() {
    return {
      name: "Contact",
      vm: this
    };
  },
  computed: {
    ...mapMutations(["isCursorRed"])
  },
  components: {
    AppSubtitle: Subtitle,
    AppContactApplication: ContactApplication,
    AppContactQuestion: ContactQuestion
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.contact {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: $black;
  color: $light-gray;
  &__subtitle {
    color: $light-gray;
  }
  &__wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (min-width: $desktop) {
      margin-top: 3rem;
    }
  }
  &__application__paragraph,
  &__message__title {
    margin: 0 auto 2rem 0;
    padding: 0 2rem 0 0;
  }
}
</style>

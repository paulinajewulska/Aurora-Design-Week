<template>
  <section
    class="contact"
    @mouseover="changeCursor({ color: 'red', hover: false })"
  >
    <div class="contact__wrapper">
      <p
        class="contact__application__paragraph column is-12-mobile is-6-tablet is-5-desktop is-5-fullhd"
      >
        Are you a designer, artist, creative, or a de facto art criminal? Join
        us!
      </p>
      <app-contact-application
        @validate-email="validateEmail"
      ></app-contact-application>
    </div>
    <div class="contact__wrapper">
      <p
        class="contact__message__paragraph column is-12-mobile is-6-tablet is-5-desktop is-5-fullhd"
      >
        Or just say hello!
      </p>
      <app-contact-message
        @validate-email="validateEmail"
      ></app-contact-message>
    </div>
  </section>
</template>

<script>
import ContactApplication from "../components/Contact/ContactApplication.vue";
import ContactMessage from "../components/Contact/ContactMessage.vue";
import { mapActions } from "vuex";

export default {
  name: "Contact",
  data: function() {
    return {
      name: "Contact",
      vm: this
    };
  },
  methods: {
    ...mapActions(["changeCursor"]),
    validateEmail(email) {
      const val = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return val.test(String(email).toLowerCase());
    }
  },
  components: {
    AppContactApplication: ContactApplication,
    AppContactMessage: ContactMessage
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
  background-color: $white;
  background-position: center;
  background-size: cover;
  color: $black;
  &__subtitle {
    color: $black;
  }
  &__wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media only screen and (min-width: $desktop) {
      &:first-of-type {
        margin: 15vh 0 0;
      }
      &:last-of-type {
        margin: 5vh 0 0;
      }
    }
  }
  &__application__paragraph,
  &__message__paragraph {
    font-size: 1.5rem;
    line-height: 110%;
    @media only screen and (min-width: $tablet) {
      font-size: 3rem;
    }
    @media only screen and (min-width: $desktop) {
      height: 50%;
      font-size: 3.25rem;
    }
  }
  &__application__paragraph {
    padding: 15vh 0 1.5rem;
    @media only screen and (min-width: $desktop) {
      padding: 0;
    }
  }
  &__message__paragraph {
    padding: 1rem 0 1.55rem;
    @media only screen and (min-width: $desktop) {
      padding: 0;
    }
  }
}
</style>

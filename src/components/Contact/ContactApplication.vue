<template>
  <div
    class="contact__application column is-12-mobile is-7-tablet is-5-desktop is-5-fullhd"
  >
    <form method="post" class="contact__form" @submit.prevent="sendApplication">
      <input
        type="email"
        v-model="contactForm.email"
        class="contact__form__input"
        placeholder="YourEmail@email.com"
      />
      <input
        type="text"
        v-model="contactForm.address"
        class="contact__form__input"
        placeholder="Address"
      />
      <input
        type="tel"
        name="phone"
        v-model="contactForm.phone"
        class="contact__form__input"
        placeholder="123-456-789"
      />
      <button class="contact__button" type="submit">SEND</button>
    </form>
  </div>
</template>

<script>
import { setApplicant } from "../../../firebaseConfig";

export default {
  name: "ContactApplication",
  data: function() {
    return {
      contactForm: {
        email: "",
        address: "",
        phone: ""
      }
    };
  },
  methods: {
    sendApplication(e) {
      e.preventDefault();
      const email = this.contactForm.email;
      const address = this.contactForm.address;
      const phone = this.contactForm.phone;
      setApplicant(email, address, phone);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.contact {
  &__application {
    margin: 0 auto;
    padding: 0;
    form {
      margin: 0 0 2.25rem;
      @media only screen and (min-width: $tablet) {
        margin: 0 0 3rem;
      }
    }
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    &__input {
      width: 90%;
      height: 1.75rem;
      margin: 0.25rem 0;
      border: none;
      border-bottom: 1px solid $white;
      background-color: $black;
      font-size: 0.75rem;
      color: $white;
      letter-spacing: 0.05rem;
    }
  }
  &__button {
    width: fit-content;
    margin: 1.75rem 0;
    padding: 0;
    border-bottom: 1px solid $white;
    border: none;
    background-color: $black;
    color: $white;
  }
}
</style>

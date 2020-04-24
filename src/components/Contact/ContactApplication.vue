<template>
  <div
    class="contact__application column is-12-mobile is-7-tablet is-5-desktop is-5-fullhd"
  >
    <form
      method="post"
      class="contact__form"
      @submit.prevent="sendApplication"
      novalidate
    >
      <input
        type="text"
        v-model="applicationForm.name"
        class="contact__form__input"
        placeholder="Name"
      />
      <input
        type="email"
        v-model="applicationForm.email"
        class="contact__form__input"
        placeholder="YourEmail@email.com"
      />
      <input
        type="tel"
        name="phone"
        v-model="applicationForm.phone"
        class="contact__form__input"
        placeholder="123-456-789"
      />
      <p v-if="validationError" class="contact__form__error">
        {{ validationError }}
      </p>
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
      applicationForm: {
        name: "",
        email: "",
        phone: "",
        error: ""
      }
    };
  },
  computed: {
    validationError: {
      get: function() {
        return this.applicationForm.error;
      },
      set: function(error) {
        this.applicationForm.error = error;
      }
    }
  },
  methods: {
    sendApplication(e) {
      e.preventDefault();

      const name = this.applicationForm.name.trim();
      const email = this.applicationForm.email.trim();
      const phone = this.applicationForm.phone.trim();
      this.validationError = "";
      if (!name) {
        this.validationError = "Please enter your name";
        return;
      }
      if (!email) {
        this.validationError = "Please enter your email";
        return;
      } else {
        const val = this.validateEmail(email);
        if (!val) {
          this.validationError = "Please enter valid email";
          return;
        }
      }

      if (!phone) {
        this.validationError = "Please enter your phone number";
        return;
      } else {
        const val = this.validPhoneNumber(phone);
        if (!val) {
          this.validationError = "Please enter valid phone number";
          return;
        }
      }
      setApplicant(name, email, phone);
      this.applicationForm.name = "";
      this.applicationForm.email = "";
      this.applicationForm.phone = "";
    },
    validateEmail(email) {
      const val = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return val.test(String(email).toLowerCase());
    },
    validPhoneNumber(phoneNumber) {
      const val = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/;
      return val.test(phoneNumber);
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
      background-color: transparent;
      font-size: 0.75rem;
      color: $white;
      letter-spacing: 0.05rem;
    }
    &__error {
      margin-top: 0.05rem;
      font-size: 0.75rem;
      color: $red;
      letter-spacing: 0.05rem;
    }
  }
  &__button {
    width: fit-content;
    margin: 1.75rem 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid $white;
    background-color: transparent;
    color: $white;
    cursor: pointer;
  }
}
</style>

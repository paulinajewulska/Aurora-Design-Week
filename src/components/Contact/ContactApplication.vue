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
        placeholder="Your name"
      />
      <input
        type="email"
        v-model="applicationForm.email"
        class="contact__form__input"
        placeholder="YourEmail@email.com"
      />
      <input
        type="tel"
        name="phoneNumber"
        v-model="applicationForm.phoneNumber"
        class="contact__form__input"
        placeholder="123-456-789"
      />
      <p class="contact__form__error">{{ validationError }}</p>
      <button
        class="contact__application__button"
        type="submit"
        @mousemove="changeCursor({ color: 'red', hover: true })"
        @mouseleave="changeCursor({ color: 'red', hover: false })"
      >
        Send application
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ContactApplication",
  data: function() {
    return {
      applicationForm: {
        name: "",
        email: "",
        phoneNumber: "",
        error: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getBaseURL"]),
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
    ...mapActions(["changeCursor"]),
    sendApplication(e) {
      e.preventDefault();

      const name = this.applicationForm.name.trim();
      const email = this.applicationForm.email.trim();
      const phoneNumber = this.applicationForm.phoneNumber.trim();
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

      if (!phoneNumber) {
        this.validationError = "Please enter your phone number";
        return;
      } else {
        const val = this.validPhoneNumber(phoneNumber);
        if (!val) {
          this.validationError = "Please enter valid phone number";
          return;
        }
      }
      this.addApplication(name, email, phoneNumber);
      this.applicationForm.name = "";
      this.applicationForm.email = "";
      this.applicationForm.phoneNumber = "";
    },
    validateEmail(email) {
      return this.$emit("validate-email", email);
    },
    validPhoneNumber(phoneNumber) {
      const val = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/;
      return val.test(phoneNumber);
    },
    addApplication(name, email, phoneNumber) {
      const data = { name, email, phoneNumber };
      fetch(`${this.getBaseURL}/application`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).catch(error => console.error("Error:", error));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.contact {
  &__application {
    margin: 0;
    padding: 0;
    @media only screen and (min-width: $desktop) {
      margin: 0 auto;
    }
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
      border-bottom: 1px solid $black;
      background-color: transparent;
      font-size: 0.75rem;
      color: $black;
      letter-spacing: 0.05rem;
      @media only screen and (min-width: $tablet) {
        margin: 0.4rem 0;
      }
      @media only screen and (min-width: $desktop) {
        margin: 0.55rem 0;
      }
    }
    &__error {
      margin-top: 0.05rem;
      font-size: 0.75rem;
      color: $red;
      letter-spacing: 0.05rem;
      min-height: 1.5rem;
      width: 70%;
    }
  }
  &__application__button {
    width: fit-content;
    margin: 1rem 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid $black;
    background-color: transparent;
    color: $black;
    cursor: pointer;
    z-index: 99999;
  }
}
</style>

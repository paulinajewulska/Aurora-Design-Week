<template>
  <div
    class="contact__message column is-12-mobile is-7-tablet is-5-desktop is-5-fullhd"
  >
    <form
      method="post"
      class="contact__form"
      @submit.prevent="sendMessage"
      novalidate
    >
      <input
        type="text"
        v-model="messageForm.name"
        class="contact__form__input"
        placeholder="Your name"
      />
      <input
        type="email"
        v-model="messageForm.email"
        class="contact__form__input"
        placeholder="YourEmail123@email.com"
      />
      <textarea
        v-model="messageForm.message"
        class="contact__form__message"
        placeholder="Message"
      ></textarea>
      <p class="contact__form__error">{{ validationError }}</p>
      <button
        class="contact__message__button"
        type="submit"
        @mousemove="changeCursor({ color: 'red', hover: true })"
        @mouseleave="changeCursor({ color: 'red', hover: false })"
      >
        Send question
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
      messageForm: {
        name: "",
        email: "",
        message: "",
        error: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getBaseURL"]),
    validationError: {
      get: function() {
        return this.messageForm.error;
      },
      set: function(error) {
        this.messageForm.error = error;
      }
    }
  },
  methods: {
    ...mapActions(["changeCursor"]),
    sendMessage(e) {
      e.preventDefault();
      const name = this.messageForm.name.trim();
      const email = this.messageForm.email.trim();
      const message = this.messageForm.message.trim();
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

      if (!message) {
        this.validationError = "Please enter your question";
        return;
      }
      this.addMessage(name, email, message);
      this.messageForm.name = "";
      this.messageForm.email = "";
      this.messageForm.message = "";
    },
    validateEmail(email) {
      return this.$emit("validate-email", email);
    },
    addMessage(name, email, message) {
      const data = { name, email, question: message };
      fetch(`${this.getBaseURL}/message`, {
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
  &__message {
    margin: 0;
    padding: 0;
    @media only screen and (min-width: $desktop) {
      margin: 0 auto;
    }
    form {
      margin: 0 0 0.5rem;
      @media only screen and (min-width: $tablet) {
        margin: 0;
      }
    }
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    &__input,
    &__message {
      width: 90%;
      height: 1.75rem;
      margin: 0.25rem 0;
      border: none;
      border-bottom: 1px solid $black;
      background-color: transparent;
      color: $black;
      font-size: 0.75rem;
      letter-spacing: 0.05rem;
      @media only screen and (min-width: $tablet) {
        margin: 0.4rem 0;
      }
      @media only screen and (min-width: $desktop) {
        margin: 0.55rem 0;
      }
    }
    &__message {
      height: 3.5rem;
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
  &__message__button {
    width: fit-content;
    margin: 1rem 0 1rem;
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

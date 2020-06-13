<template>
  <div
    class="contact__message column is-12-mobile is-7-tablet is-5-desktop is-5-fullhd"
  >
    <form
      method="post"
      class="contact__form"
      @submit.prevent="sendQuestion"
      novalidate
    >
      <input
        type="text"
        v-model="questionForm.name"
        class="contact__form__input"
        placeholder="Name"
      />
      <input
        type="email"
        v-model="questionForm.email"
        class="contact__form__input"
        placeholder="YourEmail123@email.com"
      />
      <textarea
        v-model="questionForm.question"
        class="contact__form__question"
        placeholder="Question"
      ></textarea>
      <p v-if="validationError" class="contact__form__error">
        {{ validationError }}
      </p>
      <button
        class="contact__button"
        type="submit"
        @mousemove="changeCursor({ color: 'red', hover: true })"
        @mouseleave="changeCursor({ color: 'red', hover: false })"
      >
        SEND
      </button>
    </form>
  </div>
</template>

<script>
import { sendQuestion } from "../../../firebaseConfig";
import { mapActions } from "vuex";

export default {
  name: "ContactApplication",
  data: function() {
    return {
      questionForm: {
        name: "",
        email: "",
        question: "",
        error: ""
      }
    };
  },
  computed: {
    validationError: {
      get: function() {
        return this.questionForm.error;
      },
      set: function(error) {
        this.questionForm.error = error;
      }
    }
  },
  methods: {
    ...mapActions(["changeCursor"]),
    sendQuestion(e) {
      e.preventDefault();
      const name = this.questionForm.name.trim();
      const email = this.questionForm.email.trim();
      const question = this.questionForm.question.trim();
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

      if (!question) {
        this.validationError = "Please enter your question";
        return;
      }
      sendQuestion(name, email, question);
      this.questionForm.name = "";
      this.questionForm.email = "";
      this.questionForm.question = "";
    },
    validateEmail(email) {
      const val = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return val.test(String(email).toLowerCase());
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.contact {
  &__message {
    margin: 0 auto;
    padding: 0;
    form {
      margin: 1rem 0 0.5rem;
      @media only screen and (min-width: $tablet) {
        margin: 0 0 3rem;
      }
    }
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    &__input,
    &__question {
      width: 90%;
      height: 1.75rem;
      margin: 0.25rem 0;
      border: none;
      border-bottom: 1px solid $white;
      background-color: transparent;
      color: $white;
      font-size: 0.75rem;
      letter-spacing: 0.05rem;
    }
    &__question {
      height: 3.5rem;
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
    z-index: 99999;
  }
}
</style>

<template>
  <div
    class="contact__message column is-12-mobile is-7-tablet is-5-desktop is-5-fullhd"
  >
    <form method="post" class="contact__form" @submit.prevent="sendQuestion">
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
      <button class="contact__button" type="submit">SEND</button>
    </form>
  </div>
</template>

<script>
import { sendQuestion } from "../../../firebaseConfig";

export default {
  name: "ContactApplication",
  data: function() {
    return {
      questionForm: {
        name: "",
        email: "",
        question: ""
      }
    };
  },
  methods: {
    sendQuestion(e) {
      e.preventDefault();
      const name = this.questionForm.name;
      const email = this.questionForm.email;
      const question = this.questionForm.question;
      sendQuestion(name, email, question);
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
      background-color: $black;
      color: $white;
      font-size: 0.75rem;
      letter-spacing: 0.05rem;
    }
    &__question {
      height: 3.5rem;
    }
  }
  &__button {
    width: fit-content;
    margin: 1.75rem 0;
    padding: 0;
    border: none;
    border-bottom: 1px solid $white;
    background-color: $black;
    color: $white;
  }
}
</style>

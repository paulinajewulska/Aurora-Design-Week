<template>
  <section
    class="FAQ"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <h1 class="FAQ__title">{{ name }}</h1>
    <div class="FAQ__questions-wrapper">
      <app-f-a-q-question
        v-for="question in questions"
        :key="question.id"
        :question="question.question"
        :answer="question.answer"
        >}}</app-f-a-q-question
      >
    </div>
  </section>
</template>

<script>
import FAQQuestion from "../components/FAQ/FAQQuestion.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "FAQ",
  data: function() {
    return {
      name: "Got some question?",
      vm: this
    };
  },
  computed: { ...mapState(["questions"]) },
  methods: {
    ...mapActions(["changeCursor"])
  },
  components: {
    AppFAQQuestion: FAQQuestion
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.FAQ {
  &__title {
    padding: 3rem 0;
  }
  &__questions-wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>

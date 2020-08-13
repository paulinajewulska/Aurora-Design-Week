<template>
  <section
    class="FAQ"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <h1 class="FAQ__title">{{ name }}</h1>
    <h2 v-if="loading">Loading loading ..</h2>
    <h2 v-if="error">Oh no! {{ error }}</h2>
    <div class="FAQ__questions-wrapper">
      <app-f-a-q-question
        v-for="question in questions"
        :key="question.id"
        :question="question.question"
        :answer="question.answer"
      ></app-f-a-q-question>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
const FAQQuestion = () => import("../components/FAQ/FAQQuestion.vue");

export default {
  name: "FAQ",
  data: function() {
    return {
      name: "Got some question?",
      vm: this,
      loading: false,
      error: null
    };
  },
  computed: { ...mapState(["questions"]) },
  methods: {
    ...mapActions(["changeCursor"]),
    fetchData() {
      this.error = null;
      this.loading = true;
      try {
        this.$store.dispatch("loadQuestions");
      } catch (err) {
        this.error = err.toString();
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
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
    padding: 1rem 0 4rem;
    font-size: 3rem;
    @media only screen and (min-width: $tablet) {
      padding: 0 0 6rem;
      font-size: 4rem;
    }
  }
  &__questions-wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>

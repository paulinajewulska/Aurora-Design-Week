<template>
  <section class="FAQ">
    <app-subtitle :subtitle="this.name"></app-subtitle>
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
import Subtitle from "../components/Others/Subtitle.vue";
import { mapState } from "vuex";
import FAQQuestion from "../components/FAQ/FAQQuestion.vue";

export default {
  name: "FAQ",
  data: function() {
    return {
      name: "Got some question?"
    };
  },
  computed: { ...mapState(["questions"]) },
  components: {
    AppSubtitle: Subtitle,
    AppFAQQuestion: FAQQuestion
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.FAQ {
  &__questions-wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>

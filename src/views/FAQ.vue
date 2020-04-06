<template>
  <section class="FAQ" @mouseover="vm.$store.state.isCursorRed = false">
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
import FAQQuestion from "../components/FAQ/FAQQuestion.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "FAQ",
  data: function() {
    return {
      name: "Got some question?",
      vm: this
    };
  },
  computed: { ...mapState(["questions"]), ...mapMutations(["isCursorRed"]) },
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

<template>
  <section
    class="buy-ticket"
    @mouseover="
      (vm.$store.state.isCursorRed = true),
        (vm.$store.state.cursorHover = false)
    "
  >
    <p
      class="buy-ticket__title column is-12-mobile is-6-tablet is-5-desktop is-5-fullhd"
    >{{ title }}</p>
    <app-buy-ticket-form></app-buy-ticket-form>
  </section>
</template>

<script>
import BuyTicketForm from "../components/Calendar/BuyTicketForm.vue";
import { mapMutations } from "vuex";

export default {
  name: "buy-ticket",
  data: function() {
    return {
      vm: this
    };
  },
  props: {
    title: {
      type: String
    }
  },
  computed: {
    ...mapMutations(["isCursorRed"])
  },
  components: {
    AppBuyTicketForm: BuyTicketForm
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.buy-ticket {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  max-height: fit-content;
  background-color: $black;
  color: $light-gray;
  @media only screen and (min-width: $tablet) {
    padding-top: 8rem;
  }
  &__title {
    padding: 0;
    margin-top: 4rem;
    font-size: 3.5rem;
    text-transform: uppercase;
    line-height: 3.25rem;
    word-break: break-word;
    @media only screen and (min-width: $tablet) {
      margin-top: 2rem;
      font-size: 5rem;
      line-height: 4.75rem;
    }
  }
}
</style>

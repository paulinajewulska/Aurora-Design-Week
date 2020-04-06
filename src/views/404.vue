<template>
  <section
    class="unknown-route"
    @mouseover="vm.$store.state.isCursorRed = false"
  >
    <p class="unknown-route__title">Page not found :(</p>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "UnknownRoute",
  data: function() {
    return {
      vm: this
    };
  },
  omputed: { ...mapMutations(["isCursorRed"]) }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.unknown-route {
  display: grid;
  width: 100vw;
  height: 100vh;
  &__title {
    place-self: center;
    width: fit-content;
    height: fit-content;
    font-size: 5rem;
  }
}
</style>

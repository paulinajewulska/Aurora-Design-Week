<template>
  <section
    class="unknown-route"
    @mouseover.native="changeCursor({ color: 'black', hover: true })"
  >
    <p class="unknown-route__title">Page not found :(</p>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UnknownRoute",
  data: function() {
    return {
      vm: this
    };
  },
  methods: { ...mapActions(["changeCursor"]) }
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

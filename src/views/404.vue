<template>
  <section class="unknown-route">
    <p class="unknown-route__title">Page not found :(</p>
  </section>
</template>

<script>
export default {
  name: "UnknownRoute"
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

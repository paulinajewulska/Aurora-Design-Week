<template>
  <section class="event">
    <h2 class="event__title">{{ $route.params.event }}</h2>
  </section>
</template>

<script>
export default {
  name: "Event"
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";
</style>

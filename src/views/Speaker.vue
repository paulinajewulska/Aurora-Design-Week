<template>
  <section class="speaker">
    <h2 class="speaker__title">
      {{ $route.params.name }} {{ $route.params.surname }}
    </h2>
    <img :src="getSpeaker($route.params.name, $route.params.surname)" alt />
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "speaker",
  computed: {
    ...mapGetters(["getSpeaker"])
  }
};
</script>
<style lang="scss" scoped>
@import "../sass/main.scss";
.speaker {
  background-color: $black;
  width: 100vw;
  height: 100vh;
  color: $light-gray;
}
</style>

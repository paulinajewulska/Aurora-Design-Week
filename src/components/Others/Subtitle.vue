<template>
  <h2 class="subtitle">{{ this.subtitle }}</h2>
</template>

<script>
export default {
  name: "Subtitle",
  props: {
    subtitle: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";
.subtitle {
  padding-bottom: 2rem;
  @media only screen and (min-width: $desktop) {
    padding-bottom: 3rem;
  }
  color: $black;
  text-align: left;
  text-transform: uppercase;
}
</style>

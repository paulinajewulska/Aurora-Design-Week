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
  font-size: $font-mobile / 1.25;
  margin: 4rem 0 3rem;
  @media only screen and (min-width: $desktop) {
    font-size: $font-fullhd / 1.25;
    margin: 5rem 0 6rem;
  }
  color: $black;
  text-align: left;
  text-transform: uppercase;
}
</style>

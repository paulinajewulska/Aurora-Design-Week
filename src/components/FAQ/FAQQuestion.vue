<template>
  <div class="FAQ">
    <div class="FAQ__question">
      <div class="FAQ__line is-hidden-touch"></div>

      <div class="FAQ__question__icon">Q</div>
      <div class="FAQ__question__text">{{ question }}</div>
    </div>
    <div class="FAQ__answer">
      <div class="FAQ__line"></div>
      <div class="FAQ__answer__wrapper">
        <div class="FAQ__answer__icon is-hidden-touch">A</div>
        <div class="FAQ__answer__text">{{ answer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  data: function() {
    return {};
  },
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";
$circle-size-mobile: 1rem;
$circle-size-tablet: 1.25rem;
$circle-size-desktop: 1.5rem;

@mixin icon($color) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: $circle-size-mobile;
  height: $circle-size-mobile;
  margin-right: 0.5rem;
  border: 0.05rem solid $color;
  border-radius: 50%;
  font-size: 0.75rem;
  @media only screen and (min-width: $tablet) {
    width: $circle-size-tablet;
    height: $circle-size-tablet;
    font-size: 1rem;
  }
  @media only screen and (min-width: $fullhd) {
    width: $circle-size-desktop;
    height: $circle-size-desktop;
    font-size: 1.25rem;
  }
}

.FAQ {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  &__question {
    display: flex;
    align-items: baseline;
    width: 100%;
    font-size: 0.95rem;
    @media only screen and (min-width: $desktop) {
      flex-wrap: wrap;
      align-content: baseline;
      width: 45%;
    }
    &__icon {
      @include icon($black);
    }
  }
  &__line {
    @include line(100%);
    margin: 0.5rem 0;
  }
  &__answer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    @media only screen and (min-width: $desktop) {
      width: 45%;
      margin-left: 2rem;
    }
    &__wrapper {
      display: flex;
    }
    &__icon {
      @include icon($black);
      background-color: $black;
      color: $white;
    }
    &__text {
      width: fit-content;
    }
  }
}
</style>

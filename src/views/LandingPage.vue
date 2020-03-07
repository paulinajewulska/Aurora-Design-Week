<template>
  <section class="landing-page">
    <div class="landing-page__title-wrapper">
      <h1 class="landing-page__title columns is-mobile is-full-desktop">
        <span class="column landing-page__title__word">Aurora</span>
        <span
          class="column is-offset-3-touch is-offset-2-desktop landing-page__title__word"
          >Design</span
        >
        <span
          class="column is-offset-1-touch is-offset-1-desktop landing-page__title__word"
          >Week</span
        >
        <span class="column landing-page__title__word">2019</span>
      </h1>
    </div>
    <div class="landing-page__data columns is-mobile is-full">
      <p class="column landing-page__data__word">JUNE 13 - 20</p>
    </div>
    <div class="landing-page__arrow-container">
      <div class="landing-page__arrow"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingPage",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

@keyframes arrow-animation {
  from,
  to,
  65% {
    transform: translate(-50%, 0);
  }
  25% {
    transform: translate(-50%, 6rem);
  }
  26% {
    transform: translate(-50%, -6rem);
  }
}

.landing-page {
  width: 100vw;
  height: 100vh;
  &__title {
    position: absolute;
    top: 5%;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    &__word {
      margin: 0 initial;
      padding: 0;
      &:last-of-type {
        margin-top: 2.5rem;
      }
    }
  }
  &__data {
    position: absolute;
    top: 75%;
    width: 100%;
    font-size: 2em;
    @media only screen and (min-width: $tablet) {
      font-size: 3em;
    }
    @media only screen and (min-width: $desktop) {
      font-size: 4em;
    }
  }
  &__arrow-container {
    position: absolute;
    right: calc(2rem + 0.625rem / 2);
    bottom: calc(2rem + 0.1rem);
    width: 2rem;
    height: 4rem;
    overflow: hidden;
  }
  &__arrow {
    position: absolute;
    left: calc(50% - (0.25rem / 4));
    width: calc(0.25rem / 2);
    height: 3rem;
    background-color: $black;
    animation: arrow-animation 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 75%;
      width: 100%;
      height: 30%;
      background-color: $black;
    }
    &::before {
      left: calc(0.55rem / 2);
      transform: rotate(45deg);
    }
    &::after {
      right: calc(0.55rem / 2);
      transform: rotate(-45deg);
    }
  }
}
</style>

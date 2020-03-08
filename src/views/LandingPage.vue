<template>
  <section class="landing-page">
    <h1 class="landing-page__title columns is-mobile">
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
    <p class="column is-half landing-page__date">JUNE 13 - 20</p>
    <p
      class="column is-3-desktop is-offset-7-desktop is-hidden-touch landing-page__paragraph"
    >
      7 days of free for all talks, designs, installations & performances.
    </p>
    <ul class="landing-page__social-media__list is-hidden-touch">
      <li class="landing-page__social-media__list-item">Facebook</li>
      <li class="landing-page__social-media__list-item">Twitter</li>
      <li class="landing-page__social-media__list-item">Instagram</li>
    </ul>
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

    width: 75%;
    &__word {
      margin: 0 initial;
      padding: 0;
      &:last-of-type {
        margin-top: 2.5rem;
      }
    }
  }
  &__date {
    position: absolute;
    bottom: 5%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 2em;
    @media only screen and (min-width: $tablet) {
      font-size: 2.25em;
    }
  }
  &__paragraph {
    position: absolute;
    top: 50%;
  }
  &__arrow-container {
    position: absolute;
    right: calc(2rem + 0.625rem / 2);
    bottom: 4%;
    width: 2rem;
    height: 4rem;
    overflow: hidden;
    @media only screen and (min-width: $desktop) {
      right: calc(50% - 1rem);
    }
  }
  &__arrow {
    position: absolute;
    left: calc(50% - (0.25rem / 4));
    width: calc(0.25rem / 2);
    height: 3rem;
    background-color: $black;
    // animation: arrow-animation 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
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
  &__social-media {
    &__list {
      position: absolute;
      right: 6rem;
      bottom: 5%;
      display: flex;
      transform: rotate(-180deg);
      writing-mode: vertical-rl;
    }
    &__list-item {
      padding: 0.25rem 0;
      font-size: 0.7em;
    }
  }
}
</style>

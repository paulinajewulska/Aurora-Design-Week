<template>
  <div
    class="burger"
    :class="{ active: isBurgerActive }"
    @click.prevent="toggle"
  >
    <button type="button" class="burger-button">
      <span class="burger-button__bar burger-button__bar--top"></span>
      <span class="burger-button__bar burger-button__bar--bottom"></span>
    </button>
  </div>
</template>

<script>
import { store, mutations } from "../../store/index.js";

export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

$space-bar-mobile: 0.25rem;
$space-bar-tablet: 0.4rem;
$space-bar-fullhd: 0.55rem;

.burger-button {
  @include set-property-and-value(
    top,
    $padding-tablet,
    $padding-mobile,
    $padding-fullhd
  );
  @include set-property-and-value(
    right,
    $padding-tablet,
    $padding-mobile,
    $padding-fullhd
  );
  @include set-property-and-value(width, 4rem, 3rem, 4.5rem);
  position: fixed;
  display: block;
  width: fit-content;
  height: fit-content;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 0;
  border-radius: 0;
  background-color: transparent;
  z-index: 99;
  pointer-events: all;

  &__bar {
    position: absolute;
    top: 50%;
    left: 6px;
    right: 6px;
    width: auto;
    height: 0.1rem;
    margin-top: -1px;
    border-radius: 1px;
    background-color: $light-gray;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    &--top {
      @include translate(
        -$space-bar-mobile,
        -$space-bar-tablet,
        -$space-bar-fullhd
      );
    }
    &--bottom {
      @include translate(
        $space-bar-mobile,
        $space-bar-tablet,
        $space-bar-fullhd
      );
    }
  }
}

.active {
  .burger-button {
    transform: rotate(-180deg);
    &__bar--top {
      transform: rotate(45deg);
    }
    &__bar--bottom {
      transform: rotate(-45deg);
    }
  }
}
</style>

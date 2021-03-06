<template>
  <div
    class="burger"
    :class="{ active: isBurgerActive }"
    @click.prevent="toggle"
    @mouseover="changeCursor({ hover: true })"
    @mouseleave="changeCursor({ hover: false })"
  >
    <button type="button" class="burger-button">
      <span class="burger-button__bar burger-button__bar--top"></span>
      <span class="burger-button__bar burger-button__bar--bottom"></span>
    </button>
  </div>
</template>

<script>
import { store, mutations } from "../../store/index.js";
import { mapActions } from "vuex";

export default {
  data: function() {
    return {
      vm: this
    };
  },
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    ...mapActions(["changeCursor"]),
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
    $margin-tablet * 0.75,
    $margin-mobile * 0.75,
    $margin-fullhd * 0.75
  );
  @include set-property-and-value(
    right,
    $margin-tablet * 0.75,
    $margin-mobile * 0.75,
    $margin-fullhd * 2
  );
  @include set-property-and-value(width, 4rem, 3rem, 4.5rem);
  @include set-property-and-value(min-height, 4rem, 3rem, 4.5rem);
  position: fixed;
  display: block;
  padding: 0;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 0;
  border-radius: 0;
  background-color: transparent;
  z-index: 9999999;
  pointer-events: all;
  cursor: pointer;

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

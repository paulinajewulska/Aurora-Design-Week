<template>
  <div class="sidebar" @mouseover="vm.$store.state.isCursorRed = true">
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar__panel">
        <nav>
          <ul class="sidebar__menu">
            <li
              v-for="item in this.$store.state.menu"
              :key="item.id"
              class="sidebar__menu__item"
              @mouseover="vm.$store.state.cursorHover = true"
              @mouseleave="vm.$store.state.cursorHover = false"
            >
              <router-link :to="item">{{ item }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "../../store/index.js";
import { mapMutations } from "vuex";

export default {
  data: function() {
    return {
      vm: this
    };
  },
  methods: {
    closeSidebarPanel: mutations.toggleNav
  },
  computed: {
    ...mapMutations(["setCursorHover", "isCursorRed"]),
    isPanelOpen() {
      return store.isNavOpen;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../sass/main.scss";

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 0.3s ease 0s;
}

.sidebar {
  &__panel {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: $black;
    text-align: center;
    z-index: 9999;
  }
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @include set-property-and-value(
      margin-left,
      $padding-tablet,
      $padding-mobile,
      $padding-fullhd
    );
    @media only screen and (min-width: $tablet) {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      margin: auto 6rem;
    }
    li {
      @media only screen and (min-width: $tablet) {
        margin: 1rem;
      }
    }
    &__item {
      border-bottom: 1px solid $light-gray;
      color: $light-gray;
      font-size: 2.5rem;
      text-align: left;
      text-transform: uppercase;
      &:hover {
        border-bottom: 1px solid $red;
        color: $red;
      }
    }
  }
}
</style>

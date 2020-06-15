<template>
  <div
    class="sidebar"
    @mouseover="changeCursor({ color: 'red', hover: false })"
  >
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar__panel">
        <nav>
          <ul class="sidebar__menu">
            <li
              v-for="item in this.$store.state.menu"
              :key="item.id"
              class="sidebar__menu__item"
              @click.prevent="toggleBurger()"
              @mousemove="changeCursor({ color: 'red', hover: true })"
              @mouseleave="changeCursor({ color: 'red', hover: false })"
            >
              <router-link :to="getPath(item)">{{ item }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "../../store/index.js";
import { mapMutations, mapActions } from "vuex";

export default {
  data: function() {
    return {
      vm: this
    };
  },
  methods: {
    ...mapActions(["changeCursor"]),
    closeSidebarPanel: mutations.toggleNav,
    toggleBurger() {
      mutations.toggleNav();
    },
    getPath(path) {
      return `/${path}`;
    }
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
  transition: transform 0.05s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transition: all 0.05s ease-in-out 0s;
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
    z-index: 999999;
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
      position: relative;
      border-bottom: 1px solid $light-gray;
      color: $light-gray;
      font-size: 2.5rem;
      text-align: left;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 99999999;
    }
  }
}
</style>

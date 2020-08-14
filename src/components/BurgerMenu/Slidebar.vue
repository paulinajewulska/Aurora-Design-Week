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
              <router-link
                :to="getPath(item)"
                class="sidebar__menu__item-link"
                >{{ item }}</router-link
              >
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
import { gsap } from "gsap";

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
    },
    animate() {
      gsap.to("body", 0, { css: { visibility: "visible" } });
      const menuItems = document.querySelectorAll(".sidebar__menu__item");

      const tl = gsap.timeline();
      tl.staggerFrom(
        menuItems,
        1.5,
        {
          y: 100,
          ease: "power4.inOut",
          skewY: 2,
          opacity: 0,
          stagger: {
            amount: 0.3
          }
        },
        0.05
      );
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

.slide-enter-active {
  animation: coming 0.25s;
}
.slide-leave-active {
  animation: going 0.25s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100vw);
  }
}
@keyframes coming {
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
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
      margin: 0;
      padding: 0.5rem 0.5rem 0.5rem 0;
      cursor: pointer;
      z-index: 9999;
    }
    &__item-link {
      margin: 0;
      padding: 0;
      border-bottom: 1px solid $light-gray;
      color: $light-gray;
      font-size: 2.5rem;
      text-align: left;
      text-transform: uppercase;
      @media only screen and (min-width: $desktop) {
        font-size: 3rem;
      }
    }
  }
}
</style>

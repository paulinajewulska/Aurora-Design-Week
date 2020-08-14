<template>
  <div id="app">
    <app-cursor></app-cursor>
    <app-burger></app-burger>
    <app-slidebar></app-slidebar>
    <transition name="router-animation" v-if="!isMenuOpen">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppCursor from "@/components/Others/Cursor.vue";
import Burger from "@/components/BurgerMenu/Burger.vue";
import Slidebar from "@/components/BurgerMenu/Slidebar.vue";
import { store } from "./store/index.js";

export default {
  name: "app",
  components: {
    AppCursor: AppCursor,
    AppBurger: Burger,
    AppSlidebar: Slidebar
  },
  computed: {
    isMenuOpen() {
      return store.isNavOpen;
    }
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";

.router-animation__block {
  width: 50vw;
  height: 100vh;
  background-color: $black;
}
.router-animation__block-enter-active {
  animation: coming 0.5s;
  animation-delay: 0.25s;
}
.router-animation__block-leave-active {
  animation: going 0.5s;
}

@keyframes going {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(100vw);
  }
}
@keyframes coming {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(100vw);
  }
}
</style>

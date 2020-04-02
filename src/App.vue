<template>
  <div id="app">
    <app-cursor></app-cursor>
    <app-burger></app-burger>
    <app-slidebar></app-slidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppCursor from "@/components/Others/Cursor.vue";
import Burger from "@/components/BurgerMenu/Burger.vue";
import Slidebar from "@/components/BurgerMenu/Slidebar.vue";

export default {
  name: "app",
  components: {
    AppCursor: AppCursor,
    AppBurger: Burger,
    AppSlidebar: Slidebar
  }
};
</script>

<style lang="scss">
@import "./sass/main.scss";
</style>

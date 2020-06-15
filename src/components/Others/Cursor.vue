<template>
  <div
    :class="[
      'cursor',
      { cursor__hover: cursorHover },
      { cursor__hide: hideCursor },
      { cursor__red: isCursorRed },
      { cursor__menu: isPanelOpen },
      'is-hidden-touch'
    ]"
  >
    <div class="cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { store } from "../../store/index.js";

export default {
  name: "app-cursor",
  data: function() {
    return {
      xPosition: 0,
      yPosition: 0,
      hideCursor: true,
      centerPosition: 0
    };
  },
  computed: {
    ...mapState(["cursorHover", "cursorColor"]),
    cursorPoint() {
      return `transform: translateX(${this.xPosition -
        this.centerPosition}px) translateY(${this.yPosition -
        this.centerPosition}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    isCursorRed() {
      return this.cursorColor === "red";
    },
    isPanelOpen() {
      return store.isNavOpen;
    }
  },
  methods: {
    moveCursor(e) {
      this.xPosition = e.clientX;
      this.yPosition = e.clientY;
      this.centerPosition = this.$refs.point.clientHeight / 2;
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", () => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", () => {
      this.hideCursor = false;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";
.cursor {
  &__menu {
    position: fixed;
    z-index: 9999999;
  }
  &__hover {
    & div {
      width: 3.5rem;
      height: 3.5rem;
      transition: width 0.25s ease, height 0.25s ease;
    }
  }

  &__red {
    & div {
      background-color: $red;
    }
  }

  &__hide {
    width: 0;
    height: 0;
    transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
    opacity: 0;
  }

  &__point {
    position: fixed;
    top: 0;
    left: 0;
    width: 0.15rem;
    height: 0.15rem;
    border-radius: 100%;
    padding: 0.5rem;
    transition: width 0.25s ease, height 0.25s ease;
    background-color: $black;
    z-index: 99999;
    pointer-events: none;
    user-select: none;
    backface-visibility: hidden;
    pointer-events: none;
  }
}
</style>

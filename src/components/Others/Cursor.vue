<template>
  <div
    :class="[
      'cursor',
      { cursor__hover: cursorHover },
      { cursor__hide: hideCursor }
    ]"
  >
    <div class="cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app-cursor",
  data: function() {
    return {
      xPosition: 0,
      yPosition: 0,
      hideCursor: true
    };
  },
  computed: {
    ...mapState(["cursorHover"]),
    cursorPoint() {
      return `transform: translateX(${this.xPosition - 13}px) translateY(${this
        .yPosition - 13}px) translateZ(0) translate3d(0, 0, 0);`;
    }
  },
  methods: {
    moveCursor(e) {
      this.xPosition = e.clientX;
      this.yPosition = e.clientY;
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
  &__hover {
    & div {
      width: 3.5rem;
      height: 3.5rem;
      transition: width 0.2s ease, height 0.2s ease;
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
    transition: width 0.2s ease, height 0.2s ease;
    background-color: $black;
    z-index: 9999;
    pointer-events: none;
    user-select: none;
    backface-visibility: hidden;
    pointer-events: none;
  }
}
</style>

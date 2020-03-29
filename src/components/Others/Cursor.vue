<template>
  <div
    :class="['cursor', { cursor__hover: hover }, { cursor__hide: hideCursor }]"
  >
    <div class="cursor__point" ref="point" :style="cursorPoint"></div>
  </div>
</template>

<script>
export default {
  name: "app-cursor",
  data: function() {
    return {
      xPosition: 0,
      yPosition: 0,
      hover: false,
      hideCursor: true
    };
  },
  computed: {
    cursorPoint() {
      return `transform: translateX(${this.xPosition - 5}px) translateY(${this
        .yPosition - 5}px) translateZ(0) translate3d(0, 0, 0);`;
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
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 100%;
    padding: 0.5rem;
    transition: transform 0.05s ease;
    background-color: $black;
    z-index: 55555555;
    pointer-events: none;
    user-select: none;
    backface-visibility: hidden;
    pointer-events: none;
  }
}
</style>

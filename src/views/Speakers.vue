<template>
  <section
    class="speakers"
    @mouseover="vm.$store.state.isCursorRed = false"
    @mouseenter="setInitialImagePosition"
  >
    <app-subtitle :subtitle="this.name"></app-subtitle>
    <ul
      class="speakers__list"
      @mousemove="moveImage"
      @mouseleave="cursorOnList = false"
    >
      <li
        v-for="speaker in speakers"
        :key="speaker.name"
        class="speakers__list-item"
        @mousemove="
          (vm.$store.state.isCursorRed = true),
            (vm.$store.state.cursorHover = true)
        "
        @mouseleave="
          (vm.$store.state.isCursorRed = false),
            (vm.$store.state.cursorHover = false)
        "
        @mouseover="vm.imageSrcPath = speaker.image"
      >
        <router-link
          class="speakers__router-link"
          :to="{
            name: 'speakers',
            params: {
              nameSurname: `${speaker.name}-${speaker.surname}`,
              name: speaker.name,
              surname: speaker.surname
            }
          }"
        >
          <div class="speakers__list-item__name">{{ speaker.name }}</div>
          <div class="speakers__list-item__surname">{{ speaker.surname }}</div>
          <div class="speakers__list-item__circle">{{ speaker.country }}</div>
        </router-link>
      </li>
    </ul>
    <img
      :src="imageSrcPath"
      ref="image"
      :class="[
        'speakers__image',
        'is-hidden-touch',
        { 'speakers__image--invisible': !isCursorOnList }
      ]"
      :style="imagePosition"
    />
  </section>
</template>

<script>
import Subtitle from "../components/Others/Subtitle.vue";
import { mapMutations } from "vuex";

export default {
  name: "Speakers",
  data: function() {
    return {
      name: "Speakers",
      isCursorOnList: false,
      xPhotoCenterPosition: 0,
      yPhotoCenterPosition: 0,
      imageHeightCenter: 0,
      imageWidthCenter: 0,
      vm: this,
      imagePath: "",
      speakers: this.$store.state.speakers
    };
  },
  computed: {
    ...mapMutations(["setCursorHover", "isCursorRed"]),
    cursorOnList: {
      get: function() {
        return this.isCursorOnList;
      },
      set: function(value) {
        this.isCursorOnList = value;
      }
    },
    imageSrcPath: {
      get: function() {
        return this.imagePath;
      },
      set: function(value) {
        this.imagePath = value;
      }
    },
    imagePosition() {
      return `transform: translateX(${this.xPhotoCenterPosition}px) translateY(${this.yPhotoCenterPosition}px) translateZ(0) translate3d(0, 0, 0);`;
    }
  },
  methods: {
    moveImage(e) {
      this.isCursorOnList = true;
      this.imageHeightCenter = this.$refs.image.clientHeight / 2;
      this.imageWidthCenter = this.$refs.image.clientWidth / 2;
      this.xPhotoCenterPosition = e.clientX;
      this.yPhotoCenterPosition = e.clientY;
    },
    setInitialImagePosition() {
      const x = document.querySelector(".speakers__list-item").offsetTop;
      const y = document.querySelector(".speakers__list-item").offsetLeft;
      const image = document.querySelector(".speakers__image");
      this.imageHeightCenter = this.$refs.image.clientHeight / 2;
      this.imageWidthCenter = this.$refs.image.clientWidth / 2;
      this.xPhotoCenterPosition = x - this.imageHeightCenter;
      this.yPhotoCenterPosition = y - this.imageWidthCenter;
      image.style.top = `${x - this.imageHeightCenter}px`;
      image.style.left = `${y - this.imageWidthCenter}px`;
      this.imageSrcPath = this.speakers[0].image;
    }
  },
  components: {
    AppSubtitle: Subtitle
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

$circle-size-mobile: 2.1rem;
$circle-size-tablet: 3rem;
$circle-size-desktop: 3.2rem;

.speakers {
  min-height: 100vh;
  &__router-link {
    display: block;
    color: $black;
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;
    text-transform: uppercase;
    z-index: 99;
    &:hover {
      cursor: pointer;
      color: $red;
    }
  }
  &__list {
    width: fit-content;
    &-item {
      font-size: 1.25rem;
      @media only screen and (min-width: $tablet) {
        font-size: 3.5rem;
      }
      @media only screen and (min-width: $desktop) {
        font-size: 3rem;
      }
      &__name,
      &__surname {
        width: fit-content;
        margin-right: 0.75rem;
      }
      &__circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: $circle-size-mobile;
        height: $circle-size-mobile;
        font-size: 1.1rem;
        border: 0.15rem solid $black;
        border-radius: 50%;
        @media only screen and (min-width: $tablet) {
          width: $circle-size-tablet;
          height: $circle-size-tablet;
          font-size: 1.9rem;
        }
      }
    }
  }
  &__image {
    position: absolute;
    max-height: 15rem;
    transition: opacity 0.25s ease-in-out;
    z-index: 9;
  }
  &__image--invisible {
    opacity: 0;
  }
}
</style>

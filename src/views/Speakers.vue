<template>
  <section
    class="speakers"
    @mouseover="changeCursor({ color: 'black', hover: false })"
    @mouseenter="setInitialImagePosition"
  >
    <h1 v-if="$route.path === '/speakers'" class="speakers__title">
      {{ name }}
    </h1>
    <h2 v-if="loading">Loading loading ..</h2>
    <h2 v-if="error">Oh no! {{ error }}</h2>
    <ul
      class="speakers__list"
      @mousemove="moveImage"
      @mouseleave="cursorOnList = false"
    >
      <li
        v-for="speaker in speakers"
        :key="speaker.name"
        class="speakers__list-item"
      >
        <router-link
          class="speakers__router-link"
          @mousemove.native="
            (vm.imageSrcPath = speaker.image),
              changeCursor({ color: 'black', hover: true })
          "
          @mouseleave.native="changeCursor({ color: 'black', hover: false })"
          :to="{
            name: 'speaker',
            params: {
              nameSurname: `${speaker.name}-${speaker.surname}`,
              name: speaker.name,
              surname: speaker.surname
            }
          }"
        >
          <div class="speakers__list-item__name">{{ speaker.name }}</div>
          <div class="speakers__list-item__surname">{{ speaker.surname }}</div>
        </router-link>
        <div class="speakers__list-item__circle">{{ speaker.country }}</div>
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
import { mapActions, mapGetters } from "vuex";

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
      loading: false,
      error: null
    };
  },
  computed: {
    ...mapGetters({ speakers: "getSpeakers" }),
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
    ...mapActions(["changeCursor"]),
    moveImage(e) {
      this.isCursorOnList = true;
      this.imageHeightCenter = this.$refs.image.clientHeight / 2;
      this.imageWidthCenter = this.$refs.image.clientWidth / 2;
      this.xPhotoCenterPosition = e.clientX;
      this.yPhotoCenterPosition = e.clientY;
    },
    setInitialImagePosition() {
      const item = document.querySelector(".speakers__list-item");
      if (item) {
        const x = item.offsetTop;
        const y = item.offsetLeft;
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
    fetchData() {
      this.error = null;
      this.loading = true;
      try {
        this.$store.dispatch("loadSpeakers");
      } catch (err) {
        this.error = err.toString();
      } finally {
        this.loading = false;
      }
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

$circle-size-mobile: 3.25rem;
$circle-size-tablet: 3rem;
$circle-size-desktop: 3.2rem;

.speakers {
  min-height: 100vh;
  &__title {
    padding: 1rem 0 4rem;
    font-size: 3rem;
    @media only screen and (min-width: $tablet) {
      padding: 0 0 6rem;
      font-size: 4rem;
    }
  }
  &__router-link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    color: $black;
    text-transform: uppercase;
    z-index: 9999;
    @media only screen and (min-width: $tablet) {
      flex-direction: row;
      align-items: center;
    }
    &:hover {
      color: $red;
      cursor: pointer;
    }
  }
  &__list {
    width: 100%;
    @media only screen and (min-width: $desktop) {
      padding: 0 $margin-fullhd 15vh 0;
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 1rem 0;
      width: 100%;
      font-size: 2.2rem;
      line-height: 2rem;
      @media only screen and (min-width: $tablet) {
        margin: 0;
        font-size: 3.5rem;
        line-height: 1.5;
      }
      @media only screen and (min-width: $desktop) {
        font-size: 3rem;
      }
      &__name,
      &__surname {
        margin-right: 0.75rem;
        width: fit-content;
        letter-spacing: 0.05rem;
      }
      &__circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: $circle-size-mobile;
        height: $circle-size-mobile;
        font-size: 1.8rem;
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
    width: 15rem;
    height: auto;
    transition: opacity 0.25s ease-in-out;
    z-index: 9;
  }
  &__image--invisible {
    opacity: 0;
  }
}
</style>

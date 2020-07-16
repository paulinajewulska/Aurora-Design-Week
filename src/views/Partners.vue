<template>
  <section
    class="partners"
    @mouseover="changeCursor({ color: 'black', hover: false })"
  >
    <h2 class="partners__title">{{ name }}</h2>
    <p class="partners__paragraph">
      Thanks everyone partners for helping make Aurora Design Week happen!
    </p>
    <ul class="partners__list">
      <li
        v-for="partner in partnerLogoSrcPath"
        :key="partner.name"
        class="partners__list__item"
      >
        <v-lazy-image
          :src="
            require(`@/assets/partners/${partner.name}.${partner.fileExtension}`)
          "
          :alt="partner.name"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "partners",
  data: function() {
    return {
      name: "Partners",
      partnerLogoSrcPath: [
        { name: "Antalis", fileExtension: "png" },
        { name: "Antilope de bie", fileExtension: "png" },
        { name: "Heavyweight Digital Type Foundry", fileExtension: "png" },
        { name: "Reputations", fileExtension: "png" },
        { name: "Speciale belge", fileExtension: "png" },
        { name: "SSNN Creative Agency", fileExtension: "png" },
        { name: "Tibbaa", fileExtension: "png" },
        { name: "University of Antwerp", fileExtension: "png" },
        { name: "Vige", fileExtension: "png" }
      ],
      vm: this
    };
  },
  methods: {
    ...mapActions(["changeCursor"])
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.partners {
  &__title {
    padding: 2rem 0;
    font-size: 3rem;
  }
  &__paragraph {
    margin: 1rem 0;
    @media only screen and (min-width: $tablet) {
      font-size: 1.75rem;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 3rem auto 2rem;
    @media only screen and (min-width: $tablet) {
      margin: 4rem auto 3rem;
    }
    @media only screen and (min-width: $desktop) {
      justify-content: center;
      margin: 7rem auto;
    }
    &__item {
      margin: 0.75rem;
      width: 27%;
      height: auto;
      &:nth-child(3n - 2) {
        margin-left: 0;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
      @media only screen and (min-width: $tablet) {
        margin: 1rem;
        width: 25%;
        &:nth-child(3n - 2) {
          margin-left: 1rem;
        }
        &:nth-child(3n) {
          margin-right: 1rem;
        }
        img {
          display: block;
          margin: auto;
        }
      }
      @media only screen and (min-width: $desktop) {
        width: 10%;
        margin: 1.5rem;
        &:nth-child(3n - 2) {
          margin-left: 1.5rem;
        }
        &:nth-child(3n) {
          margin-right: 1.5rem;
        }
      }
    }
  }
}
</style>

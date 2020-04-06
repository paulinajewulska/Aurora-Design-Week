<template>
  <section class="partners" @mouseover="vm.$store.state.isCursorRed = false">
    <app-subtitle :subtitle="this.name" v-parallax="0.1"></app-subtitle>
    <p class="partners__paragraph" v-parallax="0.3">
      Thanks everyone partners for helping make Aurora Design Week happen!
    </p>
    <ul class="partners__list">
      <li v-for="partner in partnerLogoSrcPath" :key="partner.name">
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
import Subtitle from "../components/Others/Subtitle.vue";
import { mapMutations } from "vuex";

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
  computed: {
    ...mapMutations(["isCursorRed"])
  },
  components: {
    AppSubtitle: Subtitle
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/main.scss";

.partners {
  &__paragraph {
    margin: 1rem 0;
    text-align: right;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 4rem auto;
    @media only screen and (min-width: $tablet) {
      margin: 6rem auto;
    }
    @media only screen and (min-width: $desktop) {
      margin: 10rem auto;
    }
  }
}
</style>

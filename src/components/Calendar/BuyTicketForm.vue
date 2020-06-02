<template>
  <div
    class="buy-ticket__form-wrapper column is-12-mobile is-7-tablet is-5-desktop is-5-fullhd"
  >
    <form
      method="post"
      class="buy-ticket__form"
      @submit.prevent="buyTickets"
      novalidate
    >
      <input
        type="text"
        class="buy-ticket__form__input"
        placeholder="First Name"
        v-model="buyTicketForm.firstName"
      />
      <input
        type="text"
        class="buy-ticket__form__input"
        placeholder="Last Name"
        v-model="buyTicketForm.lastName"
      />
      <input
        type="email"
        class="buy-ticket__form__input"
        placeholder="Email"
        v-model="buyTicketForm.email"
      />
      <input
        type="number"
        class="buy-ticket__form__input"
        placeholder="Number of tickets"
        min="1"
        id="numberOfTickets"
        v-model="buyTicketForm.numberOfTickets"
      />
      <p v-if="validationError" class="buy-ticket__form__error">
        {{ validationError }}
      </p>
      <p class="buy-ticket__price-title">SUBTOTAL</p>
      <p class="buy-ticket__price">{{ price }}</p>
      <router-link
        class="buy-ticket__button"
        v-if="!isMenuOpen"
        @mousemove.native="
          (vm.$store.state.isCursorRed = true),
            (vm.$store.state.cursorHover = true)
        "
        @mouseleave.native="
          (vm.$store.state.isCursorRed = false),
            (vm.$store.state.cursorHover = false)
        "
        :to="{
          name: 'buyTicket'
        }"
        >BUY TICKETS</router-link
      >
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { store } from "../../store/index.js";

export default {
  name: "buy-ticket",
  data: function() {
    return {
      vm: this,
      startPrice: 10,
      buyTicketForm: {
        firstName: "",
        lastName: "",
        email: "",
        numberOfTickets: 1,
        error: ""
      }
    };
  },
  props: {
    title: {
      type: String
    }
  },
  computed: {
    ...mapMutations(["isCursorRed"]),
    price() {
      const finalPrice = this.startPrice * this.buyTicketForm.numberOfTickets;
      return `$${finalPrice}.00`;
    },
    validationError: {
      get: function() {
        return this.buyTicketForm.error;
      },
      set: function(error) {
        this.buyTicketForm.error = error;
      }
    },
    isMenuOpen() {
      return store.isNavOpen;
    }
  },
  methods: {
    buyTickets(e) {
      e.preventDefault();
      const firstName = this.buyTicketForm.firstName.trim();
      const lastName = this.buyTicketForm.lastName.trim();
      const email = this.buyTicketForm.email.trim();
      const numberOfTickets = +this.buyTicketForm.numberOfTickets;
      console.log(numberOfTickets);
      this.validationError = "";
      const maxNumberOfBoughtTickets = 30;

      if (!firstName) {
        this.validationError = "Please enter your first name";
        return;
      }
      if (!lastName) {
        this.validationError = "Please enter your last name";
        return;
      }
      if (!email) {
        this.validationError = "Please enter your rmail";
        return;
      } else {
        const val = this.validateEmail(email);
        if (!val) {
          this.validationError = "Please enter valid email";
          return;
        }
      }
      if (!numberOfTickets) {
        this.validationError = "Please enter number of tickets";
        return;
      } else if (numberOfTickets <= 0 || !Number.isInteger(numberOfTickets)) {
        this.validationError = "Please enter valid number of tickets";
        return;
      } else if (numberOfTickets > maxNumberOfBoughtTickets) {
        this.validationError = `Sorry, you can't buy more than ${maxNumberOfBoughtTickets}`;
        return;
      }
      console.log(
        `You bought ${numberOfTickets} tickets. Price: ${this.price}`
      );
      this.buyTicketForm.firstName = "";
      this.buyTicketForm.lastName = "";
      this.buyTicketForm.email = "";
      this.buyTicketForm.numberOfTickets = 1;
    },
    validateEmail(email) {
      const val = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return val.test(String(email).toLowerCase());
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/main.scss";

.buy-ticket {
  &__form-wrapper {
    margin: 2rem auto 0;
    padding: 0;
    form {
      margin: 0;
    }
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    &__input {
      width: 90%;
      height: 1.75rem;
      margin: 0.25rem 0;
      border: none;
      border-bottom: 1px solid $white;
      background-color: transparent;
      font-size: 0.75rem;
      color: $white;
      letter-spacing: 0.05rem;
    }
    &__error {
      margin-top: 0.05rem;
      font-size: 0.75rem;
      color: $red;
      letter-spacing: 0.05rem;
    }
  }
  &__button {
    width: fit-content;
    margin: 1.75rem 0;
    border: none;
    border-bottom: 1px solid $white;
    padding: 0;
    background-color: transparent;
    color: $white;
    cursor: pointer;
    z-index: 99999;
  }
  &__price {
    font-size: 3.25rem;
    letter-spacing: 0.05rem;
    &-title {
      letter-spacing: 0.05rem;
      margin-top: 2rem;
    }
  }
}
</style>

import Vue from "vue";
import VueRouter from "vue-router";
import OpeningPage from "@/views/OpeningPage.vue";
import About from "@/views/About.vue";
import Calendar from "@/views/Calendar.vue";
import Event from "@/views/Event.vue";
import BuyTicket from "@/views/BuyTicket.vue";
import Speakers from "@/views/Speakers.vue";
import Speaker from "@/views/Speaker.vue";
import FAQ from "@/views/FAQ.vue";
import Contact from "@/views/Contact.vue";
import UnknownRoute from "@/views/404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: OpeningPage },
  { path: "/home", redirect: "/" },
  { path: "/about", component: About },
  { path: "/calendar", component: Calendar, name: "calendar" },
  {
    path: "/calendar/:month/:date",
    component: Event,
    name: "event",
    props: true
  },
  {
    path: "/calendar/:month/:event/buy-ticket",
    component: BuyTicket,
    name: "buyTicket",
    props: true
  },
  { path: "/speakers", component: Speakers, name: "speakers" },
  { path: "/speakers/:nameSurname", component: Speaker, name: "speaker" },
  { path: "/faq", component: FAQ },
  { path: "/contact", component: Contact },
  { path: "*", component: UnknownRoute }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

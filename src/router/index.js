import Vue from "vue";
import VueRouter from "vue-router";
import OpeningPage from "@/views/OpeningPage.vue";
import About from "@/views/About.vue";
import Calendar from "@/views/Calendar.vue";
import Speakers from "@/views/Speakers.vue";
import Partners from "@/views/Partners.vue";
import FAQ from "@/views/FAQ.vue";
import Contact from "@/views/Contact.vue";
import UnknownRoute from "@/views/404.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: OpeningPage },
  { path: "/about", component: About },
  { path: "/calendar", component: Calendar },
  { path: "/speakers", component: Speakers },
  { path: "/partners", component: Partners },
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

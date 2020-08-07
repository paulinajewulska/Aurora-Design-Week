import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  { path: "/", component: lazyLoad("OpeningPage") },
  { path: "/home", redirect: "/" },
  { path: "/about", component: lazyLoad("About") },
  { path: "/calendar", component: lazyLoad("Calendar"), name: "calendar" },
  {
    path: "/calendar/:month/:date",
    component: lazyLoad("Event"),
    name: "event",
    props: true
  },
  {
    path: "/calendar/:month/:event/buy-ticket",
    component: lazyLoad("BuyTicket"),
    name: "buyTicket",
    props: true
  },
  { path: "/speakers", component: lazyLoad("Speakers"), name: "speakers" },
  {
    path: "/speakers/:nameSurname",
    component: lazyLoad("Speaker"),
    name: "speaker",
    props: true
  },
  { path: "/faq", component: lazyLoad("FAQ") },
  { path: "/contact", component: lazyLoad("Contact") },
  { path: "*", component: lazyLoad("404") }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

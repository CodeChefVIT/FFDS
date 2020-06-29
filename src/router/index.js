import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Timetable from "../views/Timetable.vue";
import Verify from "../views/Verify.vue";
import ResendVerify from "../views/ResendVerify.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: Timetable
  },
  {
    path: "/verify",
    name: "Verify",
    component: Verify
  },
  {
    path: "/resend-verify",
    name: "ResendVerify",
    component: ResendVerify
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

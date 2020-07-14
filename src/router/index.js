import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";
// import Signup from "../views/Signup.vue";
// import Dashboard from "../views/Dashboard.vue";
// import Profile from "../views/Profile.vue";
// import Timetable from "../views/Timetable.vue";
// import Verify from "../views/Verify.vue";
// import ResendVerify from "../views/ResendVerify.vue";
// import P404 from "../views/P404.vue";
import NProgress from "nprogress";
import "../assets/css/custom/nprogress-custom.css";

NProgress.configure({ showSpinner: false });

Vue.use(VueRouter);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView("Home"),
    meta: { requiresAuth: false }
  },
  {
    path: "/login",
    name: "Login",
    component: loadView("Login"),
    meta: { requiresAuth: false }
  },
  {
    path: "/signup",
    name: "Signup",
    component: loadView("Signup"),
    meta: { requiresAuth: false }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: loadView("Dashboard"),
    meta: { requiresAuth: true }
  },
  {
    path: "/profile",
    name: "Profile",
    component: loadView("Profile"),
    meta: { requiresAuth: true }
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: loadView("Timetable"),
    meta: { requiresAuth: false }
  },
  {
    path: "/verify",
    name: "Verify",
    component: loadView("Verify"),
    meta: { requiresAuth: false }
  },
  {
    path: "/resend-verify",
    name: "ResendVerify",
    component: loadView("ResendVerify"),
    meta: { requiresAuth: false }
  },
  {
    path: "/404",
    name: "P404",
    component: loadView("P404"),
    meta: { requiresAuth: false }
  },
  {
    path: "*",
    redirect: "/404",
    meta: { requiresAuth: false }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     // Check if user is authenticated or not
//     // eslint-disable-next-line no-constant-condition
//     if (true) {
//       next({
//         path: "/login",
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
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
    meta: { title: "Welcome to FFDS!", requiresAuth: false }
  },
  {
    path: "/login",
    name: "Login",
    component: loadView("Login"),
    meta: { title: "Login | FFDS", requiresAuth: false }
  },
  {
    path: "/signup",
    name: "Signup",
    component: loadView("Signup"),
    meta: { title: "Register | FFDS", requiresAuth: false }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: loadView("Dashboard"),
    meta: { title: "Dashboard | FFDS", requiresAuth: true }
  },
  {
    path: "/profile",
    name: "Profile",
    component: loadView("Profile"),
    meta: { title: "Profile | FFDS", requiresAuth: true }
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: loadView("Timetable"),
    meta: { title: "Time Table | FFDS", requiresAuth: false }
  },
  {
    path: "/verify",
    name: "Verify",
    component: loadView("Verify"),
    meta: { title: "Verify Email | FFDS", requiresAuth: false }
  },
  {
    path: "/resend-verify",
    name: "ResendVerify",
    component: loadView("ResendVerify"),
    meta: { title: "Resend Verification Email | FFDS", requiresAuth: false }
  },
  {
    path: "/first",
    name: "First",
    component: loadView("First"),
    meta: { title: "First Login | FFDS", requiresAuth: true }
  },
  {
    path: "/404",
    name: "P404",
    component: loadView("P404"),
    meta: { title: "404 Not Found | FFDS", requiresAuth: false }
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

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  next();
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   // Check if user is authenticated or not
  //   // eslint-disable-next-line no-constant-condition
  //   if (true) {
  //     next({
  //       path: "/login",
  //       query: { redirect: to.fullPath }
  //     });
  //   } else {
  //     next();
  //   }
  // } else {
  //   next(); // make sure to always call next()!
  // }
});

export default router;

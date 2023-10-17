import { createRouter, createWebHistory } from "vue-router";
import store from "./store.js";

import SpaceList from "./components/SpaceList.vue";
import CardView from "./components/CardView.vue";
import LoginView from "./registration/LoginView.vue";
import SignupView from "./registration/SignupView.vue";
import NotFound from './NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/signin" },
    { path: "/launches", component: SpaceList, meta: { requiresAuth: true } },
    { path: "/details", component: CardView, meta: { requiresAuth: true } },
    { path: "/signup", component: SignupView },
    { path: "/signin", component: LoginView },
    { path: '/:notFound(.*)', component: NotFound }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authCheck = store.getters["user"];
    if (authCheck) {
      next();
    }
     else {
      console.log(store.getters['user'], "authCheck")
      next("/signin");
    }
  } else {
    next();
  }
});

export default router;

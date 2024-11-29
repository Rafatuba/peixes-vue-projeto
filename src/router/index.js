import { createRouter, createWebHistory } from "vue-router";
import PaginaInicial from "../views/PaginaInicial.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "inicio",
      component: PaginaInicial,
    },
    {
      path: "/pescaesportiva",
      name: "pescaesportiva",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PescaView.vue"),
    },
    {
      path: "/peixe/:id(\\d+)",
      name: "peixe",
      component: () => import("../views/PeixeView.vue"),
    },
  ],
});

export default router;

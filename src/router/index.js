import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/admin/:action",
      name: "admin-action",
      component: () => import("@/views/AdminAction.vue"),
    }
  ],
})

export default router

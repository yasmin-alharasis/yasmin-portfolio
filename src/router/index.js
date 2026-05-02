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
router.beforeEach((to) => {
  const token = to.query.token;

  if (to.path.startsWith("/admin")) {
    if (!token || token.length < 10) {
      return "/unauthorized";
    }
  }

  return true;
});

export default router;



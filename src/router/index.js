import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import CadastroLogin from "@/views/CadastroLogin.vue";
import { useUserStore } from "@/store/userStore";

const routes = [
  {
    path: "/",
    name: "all",
    component: Home,
  },
  {
    path: "/done",
    name: "done",
    component: Home,
  },
  {
    path: "/undone",
    name: "undone",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: CadastroLogin,
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: CadastroLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  if (to.path != "/cadastro" && to.path != "/login" && useUserStore().user == null) {
  return { path: "/login" };
  }
});

export default router;

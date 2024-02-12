import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),

    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/pages/home.vue"),
      },
    ],
  },
  {
    path: "/questions:type?",
    name: "question",
    component: () => import(`@/layouts/ViewQuestions.vue`),
    props: (route) => ({ typeList: route.query.type }),
  },
  { path: "/:catchAll(.*)", component: () => import("@/pages/404.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

router.beforeEach(async (to) => {
  window.scrollTo(0, 0);
});

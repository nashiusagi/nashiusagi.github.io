import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: MainPage,
    },
    {
        path: "/interest",
        name: "InterestingPage",
        component: ()=>import('@/pages/InterestingPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

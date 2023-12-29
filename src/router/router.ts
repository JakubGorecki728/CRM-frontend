import { createWebHistory, createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HelloWorldVue from "../components/HelloWorld.vue";
import TestDB from "../components/TestDB.vue"
import TestVuetify from "../components/TestVuetify.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/hello",
        name: "Hello",
        component: HelloWorldVue
    },
    {
        path: "/test-db",
        name: "TestDB",
        component: TestDB
    },
    {
        path: "/test-vuetify",
        name: "TestVueity",
        component: TestVuetify
    }
];

const router = createRouter({
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    routes,
});

export default router;
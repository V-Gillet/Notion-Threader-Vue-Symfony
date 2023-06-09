import {createApp} from "vue";
import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../components/Home.vue";
import helloWorld from "../components/HelloWorld.vue";

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: helloWorld
    },
    {
        path: '/test',
        name: 'test',
        component: Home
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router
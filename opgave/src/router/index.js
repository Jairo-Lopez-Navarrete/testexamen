import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MoviesToWatch from "@/views/MoviesToWatch.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/movies',
            name: 'moviesToWatch',
            component: MoviesToWatch
        },
    ]
});

export default router
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import StrategyHome from '../views/StrategyHome.vue';
import StrategyBlog from '../views/StrategyBlog.vue';


const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/Strateg', name: 'StrategyHome', component: StrategyHome },
    // { path: '/StrategyHome', name: 'StrategyHome', component: StrategyHome },
    // { path: '/StrategyBlog', name: 'StrategyBlog', component: StrategyBlog },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import StrategyHome from '../views/StrategyHome.vue';
import StrategyBlog from '../views/StrategyBlog.vue';


const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/guide', name: 'Strategy', component: StrategyHome },
    { path: '/guide/blog', name: 'Strategy/Blog', component: StrategyBlog },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import College from '@/views/College.vue';
import Foods from '@/views/Foods.vue';
import Park from '@/views/Park.vue';
import Sky from '@/views/Sky.vue';
import Street from '@/views/Street.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/attractions/college', name: 'College', component: College },
    { path: '/attractions/foods', name: 'Foods', component: Foods },
    { path: '/attractions/park', name: 'Park', component: Park },
    { path: '/attractions/sky', name: 'Sky', component: Sky },
    { path: '/attractions/street', name: 'Street', component: Street },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
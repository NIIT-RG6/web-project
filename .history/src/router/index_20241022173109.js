import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import College from '@/views/College.vue';
import Foods from '@/views/Foods.vue';
import Park from '@/views/Park.vue';
import Sky from '@/views/Sky.vue';
import Street from '@/views/Street.vue';

const routes = [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/Attractions/College', name: 'College', component: College },
    { path: '/Attractions/Foods', name: 'Foods', component: Foods },
    { path: '/Attractions/Park', name: 'Park', component: Park },
    { path: '/Attractions/Sky', name: 'Sky', component: Sky },
    { path: '/Attractions/Street', name: 'Street', component: Street },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
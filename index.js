import { createRouter, createWebHistory } from 'vue-router';

// import vue from 'vue';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);
//Static import
import HomePage from '../views/HomePage.vue';
import College from '@/views/College.vue';
import Foods from '@/views/Foods.vue';
import Park from '@/views/Park.vue';
import Sky from '@/views/Sky.vue';
import Street from '@/views/Street.vue';
import StrategyHome from '../views/StrategyHome.vue';
import StrategyBlog from '../views/StrategyBlog.vue';
import InteractiveCommunity from '../views/InteractiveCommunity.vue';

//Dynamic import(lazy loading)
// const LoginPage = () => import('@/views/LoginPage.vue');
// const RegisterPage = () => import('@/views/RegisterPage.vue');
// const ForgotPassword = () => import('@/views/ForgotPassword.vue');
// const ContractPage = () => import('@/views/ContractPage.vue');
// const PrivacyPolicy = () => import('@/views/PrivacyPolicy.vue');
// const TeamPage = () => import('@/views/TeamPage.vue');

const routes = [
    //Static routes
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/attractions/college', name: 'College', component: College },
    { path: '/attractions/foods', name: 'Foods', component: Foods },
    { path: '/attractions/park', name: 'Park', component: Park },
    { path: '/attractions/sky', name: 'Sky', component: Sky },
    { path: '/attractions/street', name: 'Street', component: Street },
    { path: '/guide', name: 'Strategy', component: StrategyHome },
    { path: '/guide/blog', name: 'Strategy/Blog', component: StrategyBlog },
    { path: "/community", name: "community", component: InteractiveCommunity },

    //Dynamic routes(lazy loading)
    // { path: '/login', name: 'LoginPage', component: LoginPage },
    // { path: '/register', name: 'RegisterPage', component: RegisterPage },
    // { path: '/forgot', name: 'ForgotPassword', component: ForgotPassword },
    // { path: '/contract', name: 'ContractPage', component: ContractPage },
    // { path: '/privacy', name: 'PrivacyPolicy', component: PrivacyPolicy },
    // { path: '/team', name: 'TeamPage', component: TeamPage },
    
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginPage.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterPage.vue')
      },
      {
        path:'/forgot',
        name: 'forgot',
        component: () => import('@/views/ForgotPassword.vue')
      },
      {
        path:'/Contract',
        name: 'Contract',
        component: () => import('@/views/ContractPage.vue')
      },
      {
        path:'/Privacy',
        name: 'Privacy',
        component: () => import('@/views/PrivacyPolicy.vue')
      },
      {
        path:'/Team',
        name: 'Team',
        component: () => import('@/views/TeamPage.vue')
      }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;

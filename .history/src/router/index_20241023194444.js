<<<<<<< HEAD
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
=======
import { createWebHistory, createRouter } from "vue-router";
import App from "../App.vue";
import InteractiveCommunity from "../../pages/mainPage/InteractiveCommunity.vue";

const routes = [
  {
    path: "/App",
    name: "App",
    component: App,
  },
  {
    path: "/community",
    name: "community",
     component: InteractiveCommunity,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
>>>>>>> origin/InteractiveCommunity
});

export default router;
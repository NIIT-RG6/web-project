import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

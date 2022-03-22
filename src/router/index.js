import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/users/index.vue')
  },
  {
    path: '/lunchs',
    name: 'Lunchs',
    component: () => import('../views/lunchs/index.vue')
  },
  {
    path: '/menus',
    name: 'Menus',
    component: () => import('../views/menus/index.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../views/reports/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

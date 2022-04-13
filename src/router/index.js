import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import('../views/restaurant/index.vue')
  },
  {
    path: '/product/:id',
    name: 'product-id',
    component: () => import('../views/products/index.vue')
  },
  {
    path: '/my-orders',
    name: 'MyOrders',
    component: () => import('../views/myOrders/index.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

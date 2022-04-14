import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
// import goTo from 'vuetify/lib/services/goto'

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
    path: '/product/:id/orders',
    name: 'order-product-id',
    component: () => import('../views/order/index.vue')
  },
  {
    path: '/product/:id/orders/success/:order_guid',
    name: 'order-product-success',
    component: () => import('../views/order/orderSuccess.vue')
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
  // scrollBehavior: (to, from, savedPosition) => {
  //   let scrollTo = 0

  //   if (to.hash) {
  //     scrollTo = to.hash
  //   } else if (savedPosition) {
  //     scrollTo = savedPosition.y
  //   }

  //   return goTo(scrollTo, {
  //     duration: 1000,
  //     easing: 'linear'
  //   })
  // },
  routes
})

export default router

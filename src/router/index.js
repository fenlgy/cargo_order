import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {title: 'hehehehehhe'},
      component: Hello
    },
    {
      path: '/home',
      meta: {title: 'home'},
      component: Home
    },
    {
      path: '/booking',
      meta: {title: 'booking'},
      component: require('@/components/Booking.vue')
    },
    {
      path: '/booking-iview',
      meta: {title: 'booking'},
      component: require('@/components/BookingIview.vue')
    }
  ]
})

export default router

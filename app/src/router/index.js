import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Haircut from '@/components/Haircut'
import Appointements from '@/components/Appointments'
import Products from '@/components/Products.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/haircuts',
      name: 'Haircuts',
      component: Haircut
    },
    {
      path: '/appointments',
      name: 'Appointments',
      component: Appointements
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})

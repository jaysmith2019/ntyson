import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Haircut from '@/components/Haircut'
import Products from '@/components/Products.vue'
import Testimonial from '@/components/Testimonial.vue'
import Product from '@/components/Product.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/Signup.vue'
import Cart from '@/components/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/testimonials',
      name: 'Testimonial',
      component: Testimonial
    },
    {
      path: '/haircuts',
      name: 'Haircuts',
      component: Haircut
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})

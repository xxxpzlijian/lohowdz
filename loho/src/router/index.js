import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import List from '@/components/List'
import Login from '@/components/Login'
import Address from '@/components/Address'
import Regist from '@/components/Regist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    }

  ]
})

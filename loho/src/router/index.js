import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import GoodsList from '@/components/GoodsList'
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
      path: '/goodslist',
      name: 'GoodsList',
      component: GoodsList
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

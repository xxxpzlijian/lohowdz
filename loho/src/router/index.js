import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import GoodsList from '@/components/GoodsList'
import Login from '@/components/Login'
import Address from '@/components/Address'
import Regist from '@/components/Regist'
import Shop from '@/components/Shop'
import Service from '@/components/Service'
import Detail from '@/components/Detail'
import Purchase from '@/components/Purchase'

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
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/detail/:fid',
      name: 'Detail',
      component: Detail
    }
  ]
})

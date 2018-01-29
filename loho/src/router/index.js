import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import gouwuce from '@/components/gouwuce'
import list from '@/components/list'
import denglu from '@/components/denglu'
import didianye from '@/components/didianye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/go',
      name: 'gouwuce',
      component: gouwuce
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/den',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/di',
      name: 'didianye',
      component: didianye
    }

  ]
})

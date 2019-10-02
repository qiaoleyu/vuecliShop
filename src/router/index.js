import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import userLogin from '@/components/userLogin'
import userRegist from '@/components/userRegist'
import userCart from '@/components/userCart'
import userOrder from '@/components/userOrder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/userLogin',
      name: 'userLogin',
      component: userLogin
    },
    {
      path: '/userRegist',
      name: 'userRegist',
      component: userRegist
    },
    {
      path: '/userCart',
      name: 'userCart',
      component: userCart
    },
    {
      path: '/userOrder',
      name: 'userOrder',
      component: userOrder
    }
  ]
})

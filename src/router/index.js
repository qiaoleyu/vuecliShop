import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import userLogin from '@/components/userLogin'
import userRegist from '@/components/userRegist'
import userCart from '@/components/userCart'
import userOrder from '@/components/userOrder'
import shopDetial from '@/components/shopDetial'
import userDetial from '@/components/userDetial'
import shops from '@/components/shops'
import applyText from '@/components/applyText'
import modifyPassword from '@/components/modifyPassword'
import checkUser from '@/components/checkUser'
import updatePassword from '@/components/updatePassword'


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
    },
    {
      path: '/shopDetial/:shopId',
      name: 'shopDetial',
      component: shopDetial
    },
    {
      path: '/userDetial',
      name: 'userDetial',
      component: userDetial
    },
    {
      path: '/shops/:searchName',
      name: 'shops',
      component: shops
    },
    {
      path: '/applyText',
      name: 'applyText',
      component: applyText
    },
    {
      path: '/modifyPassword',
      name: 'modifyPassword',
      component: modifyPassword
    },
    {
      path: '/checkUser',
      name: 'checkUser',
      component: checkUser
    },
    {
      path: '/updatePassword/:uid',
      name: 'updatePassword',
      component: updatePassword
    }
  ]
})

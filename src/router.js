import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Mail from './views/Mail.vue'
import Sort from './views/Sort.vue'
import Shopcar from './views/Shopcar.vue'
import Info from './views/Info.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/mail',
      name: 'mail',
      component: Mail
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/',
      name: '',
      redirect: '/home',
    },












    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

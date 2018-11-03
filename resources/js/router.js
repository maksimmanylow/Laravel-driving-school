import Vue from 'vue'
import Router from 'vue-router'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'user',
      component: User
    },
    {
      path: '/group',
      name: 'group',
      // route level code-splitting
      // this generates a separate chunk (group.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "group" */ './views/Group.vue')
    },
  ]
})

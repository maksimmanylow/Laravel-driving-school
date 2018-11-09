import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/dashboard',
			name: 'home',
			component: Home
		},
		{
		  path: '/dashboard/user',
		  name: 'user',
		  // route level code-splitting
		  // this generates a separate chunk (group.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "group" */ './views/User.vue')
		},
		{
		  path: '/dashboard/group',
		  name: 'group',
		  // route level code-splitting
		  // this generates a separate chunk (group.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "group" */ './views/Group.vue')
		},
	]
});

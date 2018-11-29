import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
		  path: '/sign-up',
		  name: 'user',
		  // route level code-splitting
		  // this generates a separate chunk (group.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "group" */ './views/SignUp.vue')
		},
		{
		  path: '/login',
		  name: 'group',
		  // route level code-splitting
		  // this generates a separate chunk (group.[hash].js) for this route
		  // which is lazy-loaded when the route is visited.
		  component: () => import(/* webpackChunkName: "group" */ './views/Login.vue')
		},
	]
});

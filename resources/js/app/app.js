import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';

import phoneNumberValidator from '~/resources/js/helpers/phoneNumberValidator';
VeeValidate.Validator.extend('phoneNumber', phoneNumberValidator);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import interceptorsSetup from '../auth/interceptors';
interceptorsSetup();

window.Vue = require('vue');

Vue.use(VeeValidate);

new Vue({
	router,
	store,
	// beforeCreate() {
	// 	this.$store.commit('initialiseStore');
	// },
	render: h => h(App),
}).$mount('#app');

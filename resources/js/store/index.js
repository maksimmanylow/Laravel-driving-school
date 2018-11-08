import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import group from './modules/group';
import actions from './actions';
import mutations from './mutations';
// import createLogger from '../../../src/plugins/logger';
import {version} from '../../../package.json';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
	modules: {
		user,
		group
	},
	strict: debug,
	actions,
	mutations
	// plugins: debug ? [createLogger()] : []
});


// Subscribe to store updates
// store.subscribe((mutation, state) => {
// 	// Store the state object as a JSON string
// 	localStorage.setItem('store', JSON.stringify(state));
// });

export default store;

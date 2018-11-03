import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import group from './modules/group';
// import createLogger from '../../../src/plugins/logger';
import {version} from '../package.json';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	modules: {
		user,
		group
	},
	strict: debug,
	// plugins: debug ? [createLogger()] : []
});

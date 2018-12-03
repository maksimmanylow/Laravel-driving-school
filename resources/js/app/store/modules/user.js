import API from '../../api/user';
import C from './constants';
import {
	Store
} from 'vuex';

// initial state
const state = {
	all: [],
	modalShow: false,
	modalMode: null,
	query: null,
	errors: [],
	constants: C,
	model: {
		value: C.defaultUser,
		required: ['name', 'phone', 'group_id'],
		validationErrors: [],
	},
	message: {
		text: 'Default text',
		heading: 'Default text',
		type: C.message.type.OK,
		show: false,
		image: null,
	},
	search: {
		query: '',
		debounceTimeout: 500,
		group: null,
		exportLink: ''
	},
	paginator: {
		from: 0,
		to: 0,
		total: 0,
		current_page: 0,
		last_page: 0,
	},
	userLabels: C.userLabels,
};

// getters
const getters = {
};

// actions
const actions = {
	save({
		state,
		getters,
		commit,
		dispatch
	}) {
		// commit('validateNotEmpty');
		// if (state.model.validationErrors.length) {
		// 	return;
		// }
		dispatch('create');
		commit('closeModal');
	},
	async create({
		commit,
		dispatch,
		state
	}) {
		try {
			const {
				data,
				status
			} = await API.signup(state.model.value);
			if (status == 201) {
				dispatch('showMessageOK', {
					heading: 'Вы записаны!',
					text: 'В ближайшее время мы свяжемся с Вами',
				});
				dispatch('getPage');
			}
		} catch (error) {
			dispatch('showMessageError');
			commit('addErrors', error);
		}
	},
	showMessageOK({
		commit
	}, message) {
		commit('showMessageOK', message);
		setTimeout(() => commit('closeMessage'), 2000);
	},
	showMessageError({
		commit
	}, message) {
		commit('showMessageError', message);
		setTimeout(() => commit('closeMessage'), 2000);
	},
};

// mutations
const mutations = {
	setEmail(state, val) {
		state.model.value.email = val;
	},
	setName(state, val) {
		state.model.value.name = val;
	},
	setFilterByGroup(state, val) {
		state.search.group = val;
		state.search.exportLink = `/export?group_id=${val.id}`;
	},
	setSurname(state, val) {
		state.model.value.surname = val;
	},
	setGroup(state, val) {
		state.model.value.group_id = val;
	},
	setPhone(state, val) {
		state.model.value.phone = val;
	},
	setModelValue(state, id) {
		state.model.value = { ...state.all.find(model => model.id == id)
		};
	},
	addErrors(state, e) {
		state.errors.push(e);
		console.log(e);
	},
	validateNotEmpty() {
		state.model.validationErrors = [];
		for (let key of state.model.required) {
			if (!state.model.value[key] || state.model.value[key].length == 0) {
				state.model.validationErrors.push(key);
			}
		}
		return state.model.validationErrors.length === 0;
	},
	showMessageOK(state, message) {
		state.message = {
			...message,
			type: C.message.type.OK,
			show: true,
		};
	},
	showMessageError(state, message) {
		state.message = {
			text: message,
			type: C.message.type.ERROR,
			show: true,
		};
	},
	closeMessage(state) {
		state.message.show = false;
	},
	showCreateModal(state) {
		state.modalMode = C.mode.SIGNUP;
		state.modalShow = true;
	},
	showModal(state, show) {
		state.modalShow = show;
	},
	closeModal(state) {
		// for (var key in state.model.value) {
		// 	state.model.value[key] = null;
		// }
		state.modalShow = false;
		state.model.validationErrors = [];
	},
	setFound(state, found) {
		state.found = found;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

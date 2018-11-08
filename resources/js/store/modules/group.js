import API from '../../api/group';
import C from './constants';

// initial state
const state = {
	all: [],
	modalShow: false,
	errors: [],
	model: {
		value: C.defaultGroup,
		required: ['name', 'phone', 'group_id'],
		validationErrors: [],
	},
	constants: C
};

// getters
const getters = {};

// actions
const actions = {
	async getAll ({ commit }) {
		try {
		  const {data, status} = await API.getAll();
			if (status == 200) {
				commit('setGroups', data.data);
			}
		} catch (error) {
			mutations.addErrors(error);
		}
	},
	async create ({commit}) {
		if (!mutations.validateNotEmpty()) {
			return;
		}

		state.model.value.timetable = JSON.stringify(state.model.value.timetable);
		state.model.value.status = state.model.value.status.key;
		state.model.value.category = state.model.value.category.key;

		try {
		  const {data, status} = await API.create(state.model.value);
			if (status == 200) {
				commit('setUsers', [...state.all, state.model.value]);
				commit('clearAndCloseModal');
			}
		} catch (error) {
			mutations.addErrors(error);
		}
	},
	async update ({commit}) {
		const {data} = await API.update(state.model.value);
		if (data.status == 200) {
			commit('setUsers', data);
		}
	},
	async delete ({commit}) {
		const {data} = await API.delete(state.model.value);
		if (data.status == 200) {
			commit('setUsers', state.all.filter(user => user.id != state.model.value.id));
		}
	},
};

// mutations
const mutations = {
	setGroups (state, groups) {
		state.all = groups;
	},
	showModal(state, show) {
		state.modalShow = show;
	},
	addErrors(state, e) {
		state.errors.push(e);
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
	defaultAndCloseModal(state) {
		state.model.value = C.defaultGroup;
		state.modalShow = false;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

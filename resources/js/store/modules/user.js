import  API from '../../api/user';
import C from './constants';

// initial state
const state = {
	all: [],
	modalShow: false,
	errors: [],
	model: {
		value: C.defaultUser,
		required: ['name', 'phone', 'group_id'],
		validationErrors: [],
	},
};

// getters
const getters = {
	modalModeLabel: (state, getters, rootState) => {
		switch (state.modalMode) {
		case C.mode.CRAETE:
			return 'Добавить';
		case C.mode.UPDATE:
			return 'Редактировать';
		}
	}
};

// actions
const actions = {
	async getAll ({ commit }) {
		try {
		  const {data, status} = await API.getAll();
			if (status == 200) {
				commit('setUsers', data.data);
			}
		} catch (error) {
			mutations.addErrors(error);
		}
	},
	async create ({commit}) {
		if (!mutations.validateNotEmpty()) {
			return;
		}
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
	showUpdateModal (state, id) {
		state.model.value = {...state.all.find(model => model.id == id)};
		state.modalMode = C.mode.UPDATE;
		state.modalShow = true;
	},
	showCreateModal (state) {
		state.model.value = C.defaultUser;
		state.modalMode = C.mode.CRAETE;
		state.modalShow = true;
	},
	setModelValue (state, id) {
		state.model.value = {...state.all.find(model => model.id == id)};
	},
	setUsers (state, users) {
		state.all = users;
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
	closeModal(state) {
		// for (var key in state.model.value) {
		// 	state.model.value[key] = null;
		// }
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

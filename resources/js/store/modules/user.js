import API from '../../api/user';
import C from './constants';
import { Store } from 'vuex';

// initial state
const state = {
	all: [],
	modalShow: false,
	modalMode: null,
	errors: [],
	constants: C,
	model: {
		value: C.defaultUser,
		required: ['name', 'phone', 'group_id'],
		validationErrors: [],
	},
	message: {
		text: 'Default text',
		type: C.message.type.OK,
		show: false,
		image: null,
	}
};

// getters
const getters = {
	modalModeLabel: (state, getters, rootState) => {
		switch (state.modalMode) {
		case C.mode.CREATE:
			return 'Добавить';
		case C.mode.UPDATE:
			return 'Редактировать';
		}
	}
};

// actions
const actions = {
	async getAll({commit, dispatch, state}) {
		try {
			const {
				data,
				status
			} = await API.getAll();
			if (status == 200) {
				commit('setAll', data.data);
			}
		} catch (error) {
			mutations.addErrors(error);
		}
	},
	save({state, getters, commit, dispatch}) {
		commit('validateNotEmpty');
		if (state.model.validationErrors.length) {
			return;
		}
		switch (state.modalMode) {
		case C.mode.CREATE:
			dispatch('create');
			break;
		case C.mode.UPDATE:
			dispatch('update');
			break;
		}
		commit('closeModal');
	},
	async create({commit, dispatch, state}) {
		try {
			const {
				data,
				status
			} = await API.create(state.model.value);
			if (status == 201) {
				dispatch('showMessageOK', 'Учащийся добавлен!');
				commit('setAll', [...state.all, state.model.value]);
			}
		} catch (error) {
			dispatch('showMessageError', 'Код ошибки: ' + status);
			commit('addErrors', error);
		}
	},
	async update({commit, dispatch, state}) {
		try {
			const {
				data,
				status
			} = await API.update(state.model.value);
			if (status == 200) {
				dispatch('showMessageOK', 'Учащийся обновлен!');
				commit('setAll', state.all.map(user => {
					if (user.id === data.data.id) {
						return data.data;
					} else {
						return user;
					}
				}));
			}
		} catch (error) {
			dispatch('showMessageError', 'Код ошибки: ' + status);
			commit('addErrors', error);
		}
	},
	async delete({commit, dispatch, state}) {
		try {
			if (!state.model.value.id) {
				throw new Error('Please, provide user id');
			}
			const {
				data,
				status
			} = await API.delete(state.model.value.id);
			if (status == 204) {
				commit('setAll', state.all.filter(user => user.id != state.model.value.id));
				dispatch('showMessageOK', 'Учащийся удален!');
			}
		} catch (error) {
			dispatch('showMessageError', 'Код ошибки: ' + status);
			commit('addErrors', error);
		}
		commit('closeModal');
	},
	showMessageOK({commit}, message) {
		commit('showMessageOK', message);
		setTimeout(() => commit('closeMessage'), 1500);
	},
	showMessageError({commit}, message) {
		commit('showMessageError', message);
		setTimeout(() => commit('closeMessage'), 1500);
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
	setAll(state, users) {
		state.all = users;
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
	showMessageOK(state, message) {
		state.message = {
			text: message,
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
		state.message = {
			text: '',
			type: null,
			show: false,
		};
	},
	showUpdateModal(state, id) {
		state.model.value = { ...state.all.find(model => model.id == id)};
		state.modalMode = C.mode.UPDATE;
		state.modalShow = true;
	},
	showCreateModal(state) {
		state.model.value = C.defaultUser;
		state.modalMode = C.mode.CREATE;
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
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

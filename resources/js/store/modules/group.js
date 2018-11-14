import API from '../../api/group';
import C from './constants';

// initial state
const state = {
	all: [],
	modalShow: false,
	modalMode: null,
	errors: [],
	constants: C,
	model: {
		value: C.defaultGroup,
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
	async getAll({
		commit
	}) {
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
	async get({
		commit
	}, id) {
		try {
			const {
				data,
				status
			} = await API.get(id);
			if (status == 200) {
				commit('setModel', data.data);
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
		state.model.value.timetable = JSON.stringify(state.model.value.timetable);
		state.model.value.status = state.model.value.status.key;
		state.model.value.category = state.model.value.category.key;

		try {
			const {
				data,
				status
			} = await API.create(state.model.value);
			if (status == 201) {
				dispatch('showMessageOK', 'Группа добавлена!');
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
				dispatch('showMessageOK', 'Группа обновлена!');
				commit('setAll', state.all.map(model => {
					if (model.id === data.data.id) {
						return data.data;
					} else {
						return model;
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
				throw new Error('Please, provide model id');
			}
			const {
				data,
				status
			} = await API.delete(state.model.value.id);
			if (status == 204) {
				commit('setUsers', state.all.filter(model => model.id != state.model.value.id));
				dispatch('showMessageOK', 'Группа удалена!');
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
	setAll(state, groups) {
		state.all = groups;
	},
	setModel(state, value) {
		state.model.value = value;
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
	showUpdateModal(state, id) {
		state.model.value = { ...state.all.find(model => model.id == id)};
		state.modalMode = C.mode.UPDATE;
		state.modalShow = true;
	},
	showCreateModal(state) {
		state.model.value = C.defaultGroup;
		state.modalMode = C.mode.CREATE;
		state.modalShow = true;
	},
	setModelValue(state, id) {
		state.model.value = { ...state.all.find(model => model.id == id)
		};
	},
	showModal(state, show) {
		state.modalShow = show;
	},
	closeModal(state) {
		state.modalShow = false;
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
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

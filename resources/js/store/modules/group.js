import group from '../../api/group';

// initial state
const state = {
	all: []
};

// getters
const getters = {};

// actions
const actions = {
	getAllGroups ({ commit }) {
		group.getAll(groups => {
			commit('setGroups', groups);
		});
	}
};

// mutations
const mutations = {
	setGroups (state, groups) {
		state.all = groups;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};

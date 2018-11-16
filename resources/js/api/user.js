import axios from 'axios';
import C from './constants';

export default {
	getAll: () => axios.get(C.REST.user),
	getPage: (page = 1, query = '') => axios.get(`${C.REST.user}?page=${page}&q=${query}` ),
	search: (query = '') => axios.get(`${C.REST.user}?q=${query}` ),
	create: (user) => axios.post(C.REST.user, user),
	update: (user) => axios.put(`${C.REST.user}/${user.id}`, user),
	delete: (userId) => axios.delete(`${C.REST.user}/${userId}`),
};

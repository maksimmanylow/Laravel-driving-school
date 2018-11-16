import axios from 'axios';
import C from './constants';

export default {
	getAll: () => axios.get(C.REST.user),
	getPage: (page = 1) => axios.get(`${C.REST.user}?page=${page}` ),
	create: (user) => axios.post(C.REST.user, user),
	update: (user) => axios.put(`${C.REST.user}/${user.id}`, user),
	delete: (userId) => axios.delete(`${C.REST.user}/${userId}`),
};

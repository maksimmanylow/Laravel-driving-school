import axios from 'axios';
import C from './constants';

export default {
	getAll: () => axios.get(C.REST.user),
	getPage: (params) => axios.get(C.REST.user, {params}),
	create: (user) => axios.post(C.REST.user, user),
};

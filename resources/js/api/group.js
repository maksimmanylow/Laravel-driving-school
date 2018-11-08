import axios from 'axios';
import C from './constants';

export default {
	getAll: () => axios.get(C.REST.group)
};

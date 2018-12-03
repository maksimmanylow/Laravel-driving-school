import axios from 'axios';
import C from './constants';

export default {
	signup: (user) => axios.post(C.REST.auth.signup, user),
};

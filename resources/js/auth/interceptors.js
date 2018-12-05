import axios from 'axios';
import ls from '../helpers/localStorage';

export default function setup() {
// Add a request interceptor
	axios.interceptors.request.use(function (config) {
		const access = ls.get('access');
		if (access) {
			const {access_token} = access;
			if (access_token) {
				config.headers.Authorization = `Bearer ${access_token}`;
			}
		}
		return config;
	}, function (error) {
		return Promise.reject(error);
	});
}

import axios from 'axios';
import ls from '../helpers/localStorage';

export default function setup() {
// Add a request interceptor
	axios.interceptors.request.use(function (config) {
		const {access_token} = ls.get('access');
		if(access_token) {
			config.headers.Authorization = `Bearer ${access_token}`;
		}
		// Do something before request is sent
		return config;
	}, function (error) {
	// Do something with request error
		return Promise.reject(error);
	});
}

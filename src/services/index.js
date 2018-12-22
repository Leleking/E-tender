import { AsyncStorage } from 'react-native';
import Axios from 'axios';
import {API_DOMAIN} from '../constants/config'

export const axios = Axios.create({
	baseURL: API_DOMAIN,

	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	}
});

// Intercept each request and set the bearer token for user
axios.interceptors.request.use( async config => {
	let apiToken = await AsyncStorage.getItem('api_token');

	if (apiToken && !config.headers.common.Authorization) {
		config.headers.common.Authorization = `Bearer ${apiToken}`;
	}

	return config;
});


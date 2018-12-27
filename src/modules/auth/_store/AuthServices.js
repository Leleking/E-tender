import {axios} from '../../../services'
export default {
    authenticate(credentials) {
		const user = {
			client_id:"2",
			client_secret:"wCADFSV2ySPTkL59VOixIFHMDZb12e1ztlG1Kz5w",
			grant_type:"password",
			username:credentials.email,
			password:credentials.password,
			scope:""

		}
		return axios.post('oauth/token', user)
					.then(response => Promise.resolve(response))
					.catch(error => Promise.reject(error));
	},
}
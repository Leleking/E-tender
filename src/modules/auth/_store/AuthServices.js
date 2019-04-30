import {axios} from '../../../services'
//import {Facebook} from 'expo'
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
	register(credentials){
		return axios.post('oauth/token', credentials)
					.then(response => Promise.resolve(response))
					.catch(error => Promise.reject(error));
	},
	getUser(){
		let url = "api/user"
		return axios.get(url)
								.then(response => Promise.resolve(response))
								.catch(error =>Promise.reject(error)
		)
},
}
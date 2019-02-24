import {axios} from '../../../services'
export default {
    getProjects(){
        return axios.get('api/project/getProjects')
					.then(response => Promise.resolve(response))
					.catch(error => Promise.reject(error));
    },
    getProjectDetail(id){
        let url = "api/project/"+id
        return axios.get(url)
					.then(response => Promise.resolve(response))
					.catch(error => Promise.reject(error));
    },
    getUser(){
        let url = "api/user"
        return axios.get(url)
                    .then(response => Promise.resolve(response))
                    .catch(error =>Promise.reject(error)
        )
    }
}
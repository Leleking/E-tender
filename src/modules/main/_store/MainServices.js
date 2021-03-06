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
    getProjectByCategory(name){
        let url = "api/project/category/" + name
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
    },
    getUserBids(){
        let url = "api/user/bids"
        return axios.get(url)
                    .then(response => Promise.resolve(response))
                    .catch(error =>Promise.reject(error)
        )
    },
    getUserCompletedBids(){
        let url = "api/user/bids/completed"
        return axios.get(url)
                    .then(response => Promise.resolve(response))
                    .catch(error =>Promise.reject(error)
        )
    },
    searchProject(payload){
        let url = "api/project/search"
        return axios.post(url,payload)
        .then(response => Promise.resolve(response))
        .catch(error =>Promise.reject(error))

    }
}
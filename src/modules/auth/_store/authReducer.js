import {EMAIL_CHANGED,PASSWORD_CHANGED,RENDER_LOGIN,LOGIN_SUCCESS,LOGIN_FAIL} from './authTypes'
const INITIAL_STATE ={email:'',password:'',user:null,error:'',loading:false}
export default (state=INITIAL_STATE,{payload,type}) => {
    switch(type){
        case EMAIL_CHANGED :
            return {...state,email:payload}
        case PASSWORD_CHANGED:
            return {...state,password:payload}
        case RENDER_LOGIN:
            return {...state,loading:true}
        case LOGIN_SUCCESS:
            return {...state,loading:false}
        case LOGIN_FAIL:
            return {...state,loading:false}
        default:
            return state
    }
}
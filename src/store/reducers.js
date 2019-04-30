import {combineReducers} from 'redux'
import {authReducer,registerReducer} from '../modules'
export const rootReducers =  combineReducers({
    auth:authReducer,
    register:registerReducer
})
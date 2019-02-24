import {combineReducers} from 'redux'
import {authReducer} from '../modules'
export const rootReducers =  combineReducers({
    auth:authReducer
})
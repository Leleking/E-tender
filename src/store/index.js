import {rootReducers} from './reducers'
import { createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
export const store = createStore(rootReducers,{},applyMiddleware(reduxThunk))
import {rootReducers} from './reducers'
import { createStore,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig,rootReducers)
export const store = createStore(persistedReducer,{},applyMiddleware(reduxThunk))
export const persistor = persistStore(store)
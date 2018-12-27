import React, { Component } from 'react';
//import { Ionicons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import {View} from 'react-native'
import {store,persistor} from './src/store'
import {AppContainer} from './src/router'
import {PersistGate} from 'redux-persist/integration/react'
export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer/>
      </PersistGate>
     </Provider>
    );
  }
}
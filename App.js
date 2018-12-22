import React, { Component } from 'react';
//import { Ionicons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import {View} from 'react-native'
import {store} from './src/store'
import {AppContainer} from './src/router'
export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <AppContainer/>
     </Provider>
    );
  }
}
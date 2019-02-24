import React, { Component } from 'react';
//import { Ionicons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import {View,Text, StatusBar,ActivityIndicator,StyleSheet} from 'react-native'
import {store,persistor} from './src/store'
import {AppContainer} from './src/router'
import {PersistGate} from 'redux-persist/integration/react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFetching:false
    }
  }
  render() {
    return (
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {this.state.isFetching ? (
        <ActivityIndicator/>
      ) :(
        <AppContainer/>
      )

      }
      <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
              networkActivityIndicatorVisible={true}
            />
            
        
      </PersistGate>
     </Provider>
    );
  }
}
const styles = StyleSheet.create({
  isFetch: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

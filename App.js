import React, { Component } from 'react';
import {Root} from 'native-base'
import { Font, AppLoading } from "expo";
import {Provider} from 'react-redux'
import {View,Text, StatusBar,ActivityIndicator,StyleSheet} from 'react-native'
import {store,persistor} from './src/store'
import {AppContainer} from './src/router'
import {PersistGate} from 'redux-persist/integration/react'
import Expo from 'expo'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isFetching:true
    }
  }
  register = async () => {
    const {status} = await Expo.Permissions.askAsync(Expo.Permissions.NOTIFICATIONS)
    console.log(status)
    if(status !== 'granted'){
      return
    }
    const token = await Expo.Notifications.getExpoPushTokenAsync()
    const id = await Expo.Constants.installationId
    console.log(status,token,id)
  }
  listen = ({origin,data}) => {
    console.log("cool data",data,origin )
  }
  async componentWillMount() {
    this.register()
    this.listener = Expo.Notifications.addListener(this.listen)
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isFetching: false });
  }
  componentWillUnmount(){
    this.listener && Expo.Notifications.removeListener(this.listen)
  }
  render() {
    return (
     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      {this.state.isFetching ? (
        <ActivityIndicator/>
      ) :(
      <Root>
        <AppContainer/>
      </Root>
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

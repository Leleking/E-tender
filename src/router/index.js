import React from 'react'
import {WelcomeScreen,LoginScreen} from '../modules'
import {createStackNavigator,createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator({
    Home:{
        screen:WelcomeScreen
    },
    LoginScreen
},{
    //initialRouteName:'LoginScreen',
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'teal',
            
        },
        headerTintColor:'#fff',
    },
    navigationOptions: {
        tabBarLabel: 'Home!',
      },
})

export  const AppContainer = createAppContainer(AppNavigator)
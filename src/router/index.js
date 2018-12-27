import React from 'react'
import {Text} from 'react-native'
import {WelcomeScreen,LoginScreen,ProjectScreen,RegisterScreen} from '../modules'
import {createStackNavigator, createAppContainer,createBottomTabNavigator,TabNavigator} from 'react-navigation'

const AppNavigator = createStackNavigator({
    Home:{
        screen:WelcomeScreen
    },
    LoginScreen,
    RegisterScreen,
    Main: createBottomTabNavigator({
       
        Project: {
            screen: createStackNavigator({
                ProjectScreen: {
                    screen: ProjectScreen,
                    navigationOptions:()=>({
                        headerStyle:{
                            backgroundColor:'teal',
                            
                            //textAlign:'center'
                            
                        },
                        headerTintColor:'#fff',
                    })
                },
                WelcomScreen: {
                    screen: WelcomeScreen,
                    navigationOptions: ({navigation}) => ({
                        title: "test",
                        headerTitle: "test 2"
                    })
                }
            }, {
                headerMode: 'screen',
                //navigationOptions: bottomStackNavigationOptions('Chat')
            }),
      //navigationOptions: bottomScreenNavigationOptions('Chat', Entypo, 'chat')
        },
        
    }),
    
    
},{
    headerMode:'none',
    //initialRouteName:'LoginScreen',
    defaultNavigationOptions:{
        
        //mode:'modal',
        headerStyle:{
            backgroundColor:'teal',
            
        },
        headerTintColor:'#fff',
    },
    navigationOptions: {
        headerMode:'float',
      },
})

export  const AppContainer = createAppContainer(AppNavigator)
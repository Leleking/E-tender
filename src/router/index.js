import React from 'react'
import Colors from '../constants/Colors'
import {
    WelcomeScreen,
    LoginScreen,
    SettingsScreen,
    UserBidScreen,
    ProjectScreen,
    ProjectDetailScreen,
    RegisterScreen,
    AuthLoadingScreen,
    IntroSlider,
    AccountScreen,
    BidScreen,
    ProjectCategoryScreen,
    NotificationScreen,
    TermsScreen,
    PrivacyScreen,
    SearchScreen,
    ThankYouScreen
} from '../modules'
import {createStackNavigator, createAppContainer,createBottomTabNavigator,createSwitchNavigator} from 'react-navigation'
import {Ionicons}from '@expo/vector-icons'

const AppStack = createStackNavigator({
    Home:{
        screen:WelcomeScreen
    },
    LoginScreen:{
        screen:LoginScreen
    },
    Intro:{
        screen:IntroSlider
    },
    RegisterScreen,
    Main: createBottomTabNavigator({
        Projects: {
            screen: createStackNavigator({
                ProjectScreen: {
                    screen: ProjectScreen,
                    navigationOptions:()=>({
                        headerStyle:{
                            backgroundColor:'white',
                            height: 60,
                        },
                        headerTitleStyle: {flex: 1, textAlign: 'center'}
                        
                    })
                },
                ProjectDetail:{
                    screen:ProjectDetailScreen
                },
                ProjectCategory:{
                    screen:ProjectCategoryScreen
                },
                Bid:{
                    screen:BidScreen,

                },
                ThankYou:{
                    screen:ThankYouScreen
                }
                

            }, {
                headerMode: 'none',
            }),
            navigationOptions: () =>({
                tabBarIcon: () => <Ionicons name="ios-business" size={24} color={Colors.primary} />,

            })
        },
        
        UserBidsScreen:{
            screen: UserBidScreen,
            navigationOptions: ({navigation}) => ({
                title: "My Bids",
                tabBarIcon: () => <Ionicons name="md-folder" size={24} color={Colors.primary} />

            })
        },
        Search:{
            screen: SearchScreen,
            navigationOptions: ({navigation}) => ({
                title: "Search",
                tabBarIcon: () => <Ionicons name="md-search" size={24} color={Colors.primary} />
            })

        },
        SettingsScreen:{
            screen: createStackNavigator({
                Settings:{
                    screen:SettingsScreen,
                },
                Terms:{
                    screen:TermsScreen
                },
                Privacy:{
                    screen:PrivacyScreen
                },
                Notification:{
                    screen:NotificationScreen
                }
            }),
            navigationOptions: ({navigation}) => ({
                title: "Settings",
                tabBarIcon: () => <Ionicons name="md-settings" size={24} color={Colors.primary} />

            })
        },
        
        AccountScreen:{
            screen:AccountScreen,
            navigationOptions: ({navigation}) => ({
                title: "Account",
                tabBarIcon: () => <Ionicons name="md-person" size={24} color={Colors.primary} />,

            })

        },
        
       
        
    },{
        tabBarOptions:{
            activeTintColor:Colors.primary,
            inactiveTintColor:'grey',
            style:{
                backgroundColor:'white',
                borderTopWidth: 0,
                shadowOffset:{width:5,height:3},
                shadowColor:'black',
                shadowOpacity:0.5,
                elevation:5
            }
        },
    }),
    
    
},{
    
    headerMode:'none',
    initialRouteName:'Main',
    defaultNavigationOptions:{
        
        //mode:'modal',
        headerStyle:{
            backgroundColor:'white',
            
        },
        headerTintColor:'black',
    },
    
    navigationOptions: {
        headerMode:'float',
      },
})
const AuthStack = createStackNavigator({
    WelcomeScreen,
    LoginScreen,
    RegisterScreen
},{
        headerMode:'none',
        defaultNavigationOptions:{
        
            //mode:'modal',
            headerStyle:{
                backgroundColor:'white',
                
            },
            headerTintColor:'black',
        },
        navigationOptions: {
            headerMode:'float',
          },
})
export const AppContainer = createAppContainer(createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));
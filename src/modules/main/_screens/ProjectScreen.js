import React, { Component } from 'react'
import { Text, Image,View,Platform,SafeAreaView,TextInput,StatusBar,ScrollView} from 'react-native'
import {LogoTitle} from '../../../component'
//import {Container,Content,Tabs,Tab} from 'native-base'
//import {Ionicons} from '@expo/vector-icons'
import MainServices from '../_store/MainServices'
import {Category,NewProjects} from '../_component/'
class ProjectScreen extends Component {
  /* static navigationOptions = {
    headerLeft:Platform.OS ==='ios'? <View></View> : <View style={{width: 100}}></View>,
    headerTitle: <LogoTitle size={40} color="white"/>,
    headerTitleStyle: {flex: 1, textAlign: 'center'},
  }; */
  componentWillMount(){
    this.startHeaderHeight =  80
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.cureentHeight
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{height:80,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#fff'}}>
            <View style={{flexDirection:'row',
                  padding:10,backgroundColor:'white',
                  marginHorizontal:20,shadowOffset:{width:0,height:0},
                  shadowColor:'black',shadowOpacity:0.2,elevation:1,
                  marginTop:Platform.OS == 'android'  ? 30:20}}>
              <LogoTitle size={20} />
              <TextInput
                  underlineColorAndroid="transparent"
                  placeholder=" Search for tenders"
                  placeholderTextColor="grey"
                  style={{flex:1,fontWeight:'700',backgroundColor:'white'}}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
                <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                  What can we help you find
                </Text>
                <View style={{height:130,marginTop:20}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Category imageUrl={require('../../../../assets/img/landing.gif')} name="Construction"/>
                        <Category imageUrl={require('../../../../assets/img/food.gif')} name="Goods and Services"/>
                        <Category imageUrl={require('../../../../assets/img/developer-dribbble.gif')} name="IT"/>
                    </ScrollView>
                </View>
                <View style={{marginTop:40,paddingHorizontal:20}}>
                  <Text style={{fontSize:24,fontWeight:'700'}}>
                    Latest Projects in PPA
                  </Text>
                  <Text style={{fontWeight:'100',marginTop:10}}>PPA maintains a database of common items for the use of government...</Text>
                  <View>
                    <NewProjects navigate={this.props.navigation}/>
                  </View>
                </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
     /*  <View style={styles.container}>

         
           <Tabs  tabBarUnderlineStyle={{backgroundColor:'teal'}}>
            <Tab heading="All"  activeTextStyle={styles.tabStyle}>
                <AllProjects/>
            </Tab>
            <Tab heading="New" activeTextStyle={styles.tabStyle}>
                <NewProjects navigate={this.props.navigation}/>
            </Tab>
            <Tab heading="Recommended" activeTextStyle={styles.tabStyle}>
                <View><Text>recommended</Text></View>
            </Tab>
           
        </Tabs> 
      </View> */
    )
  }
}
const styles ={
  container:{
    flex:1
  },
  tabStyle:{
    color: Platform.OS ==='ios' ? 'teal':'white',
    fontWeight: 'normal'}
}
export  {ProjectScreen}
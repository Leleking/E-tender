import React, { Component } from 'react'
import { Text, RefreshControl,View,Platform,SafeAreaView,TextInput,StatusBar,ScrollView,Image} from 'react-native'
import {LogoTitle} from '../../../component'
import MainServices from '../_store/MainServices'
import {Category,NewProjects} from '../_component/'
import Colors from '../../../constants/Colors'
import {ProjectList} from '../../../component'
class ProjectScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      refreshing:false,
      projects:{},
      isFetching:true,
      connection:true,
      search:""
    }
    this._getProjects()
  }
  _onRefresh = () => {
    this.setState({
      refreshing:true
    })
    this._getProjects()
    this.setState({refreshing:false})
  }
  handleKeyDown = async () => {

    if(this.state.search == ""){
      alert("Search filled is empty")
    }else{
      const data = {
        name:this.state.search
      }
      this.setState({searchState:true})
      let result = await MainServices.searchProject(data)
      this.setState({searchState:false})        
      let projects = result.data.data;
      if(Object.keys(projects).length == 0){
        this.setState({searchFound:false})
        alert("No tender found")
        
      }else{
        this.setState({projects,searchFound:true})
      }

      
    }
  }
  componentWillMount(){
    this.startHeaderHeight =  80
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.cureentHeight
    }
  }
  async _getProjects(){
    try{
   let objData = await MainServices.getProjects()/* 
   //Note, getting the data is stored in the object Data
   in this case, our data is also called data  */
   let projects = objData.data.data;
   this.setState({projects,isFetching:false})
    }catch(err){
      alert("There seems to be a problem ")
    }
  
   
 }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{height:80,backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#fff'}}>
            <View style={{flexDirection:'row',
                  padding:10,backgroundColor:'white',borderRadius:5,
                  marginHorizontal:20,shadowOffset:{width:0,height:0},
                  shadowColor:'black',shadowOpacity:0.2,elevation:1,
                  marginTop:Platform.OS == 'android'  ? 30:20}}>
              <TextInput
                  underlineColorAndroid="transparent"
                  placeholder=" Search for tenders"
                  placeholderTextColor="grey"
                  style={{flex:1,fontWeight:'700',backgroundColor:'white'}}
                  onChangeText={(search)=>{this.setState({search})}}
                  returnKeyType="done"
                  onSubmitEditing={this.handleKeyDown}
              />
              <LogoTitle color="grey" size={18} />
            </View>
          </View>
          <ScrollView
           scrollEventThrottle={16}
           refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            /> 
          }
           >
            <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
                <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                  What can we help you find
                </Text>
                <View style={{height:130,marginTop:20}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Category imageUrl={require('../../../../assets/img/landing.gif')} name="Construction" navigate={this.props.navigation}/>
                        <Category imageUrl={require('../../../../assets/img/food.gif')} name="Goods and Services" navigate={this.props.navigation}/>
                        <Category imageUrl={require('../../../../assets/img/developer-dribbble.gif')} name="IT" navigate={this.props.navigation}/>
                    </ScrollView>
                </View>
                <View style={{marginTop:40,paddingHorizontal:20}}>
                  <View style={styles.logoStyle}>
                      <Image source={require('../../../../assets/logo.png')} style={{width:50,height:60}}/>
                      <Text style={{fontSize:20,fontWeight: 'bold',color:Colors.primary}}> Lastest projects in Vector</Text>
                  </View>
                  <Text style={{fontWeight:'100',marginTop:10}}>Vector maintains a database of common items for the use of government...</Text>
                  <View>
                    <ProjectList navigation={this.props.navigation} projects={this.state.projects}/>
                  </View>
                </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    
    )
  }
}
const styles ={
  container:{
    flex:1
  },
  tabStyle:{
    color: Platform.OS ==='ios' ? 'teal':'white',
    fontWeight: 'normal'
  },
  logoStyle:{
    
    paddingTop:20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
}
    
}
export  {ProjectScreen}
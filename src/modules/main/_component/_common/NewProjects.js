import React, { Component } from 'react'
import { Text, View,ActivityIndicator } from 'react-native'
import {Container,Content,Card,CardItem,List,Body,H3,ListItem} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import { withNavigation } from 'react-navigation';
import MainServices from '../../_store/MainServices'
export default class NewProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:{},
      isFetching:true
    };
    this._getProjects()
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
    const {navigate} = this.props.navigate
    return (
      <View style={styles.container}>
         
              {this.state.isFetching ? 
               (<ActivityIndicator size={"large"}/>) :
                (<List dataArray={this.state.projects}
                      renderRow={(project) =>
                      <ListItem button onPress={()=>{navigate('ProjectDetail',{id:project.id})}}>
                        <View style={styles.CardItemStyle}>
                                <View style={{width:300}}>
                                  <H3>{project.name}</H3>
                                  <Text style={{paddingTop:5,color:'#8E9C8F'}}>{project.budget} {project.currency} , 4 days left</Text>
                                </View>
                          
                            </View>  
                  </ListItem>
                    
                            
                        }>
                </List>)
              }
          
      </View>
    )
  }
}
const styles ={
  container:{
    flex:1,
    paddingTop:20,
  },
  CardItemStyle:{
    //borderBottomWidth:0.5,
    //borderBottomColor: 'black',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  }
}

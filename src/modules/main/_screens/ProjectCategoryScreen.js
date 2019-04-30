import React, { Component } from 'react'
import { Text, View,ActivityIndicator} from 'react-native'
import MainServices from '../_store/MainServices'
import {Card, CardItem, Body } from 'native-base'
import {ProjectList} from '../../../component'
class ProjectCategoryScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:{},
            empty:true,
            isFetching:true
        }
    }
    componentWillMount() {
        this._getProjects()
    }
   
    /* componentWillReceiveProps() {
        this._getProjectDetail()
    } */ 
    async _getProjects() {
        try {
            let category = this.props.navigation.getParam('category')
            let objData = await MainServices.getProjectByCategory(category)
            let projects = objData.data.data;
            let empty = false
            if(projects !== null){
                empty = true
            }
            this.setState({ projects,empty,isFetching: false })
           /*  console.warn(objData.data.project_detail)
            console.warn(this.state) */

        } catch (err) {
            alert("No internect connection or slow network")
        }
    }
    

  render() {
    return (
      <View style={{flex:1}}>
       <Card>
       <CardItem header style={{flex:1,alignItems: 'center',justifyContent:'center',backgroundColor:'#2c3e50',borderRadius:5,paddingTop:20,paddingBottom:20,marginTop:30}}>
            <Text style={{fontSize:20,color:'white'}}> {this.props.navigation.getParam('category')}</Text>
        </CardItem>
       </Card>
          {
              this.state.isFetching ?
              (<ActivityIndicator size={"large"}/>) :
                     (this.state.empty) ? (
                        <View style={{flex:1}}>
                            <ProjectList projects={this.state.projects} navigation={this.props.navigation}/>
                        </View>
                     ) :(
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{paddingHorizontal:20}}>Sorry, no projects found under the category : {this.props.navigation.getParam('category')}</Text>
                        </View>
                     )
          }
      </View>
    )
  }
}

export {ProjectCategoryScreen}
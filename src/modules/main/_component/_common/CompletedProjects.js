import React, { Component } from 'react'
import { Text, View ,Image,ActivityIndicator} from 'react-native'
import MainServices  from '../../_store/MainServices'
import EmptyBid from './EmptyBid'
import {ProjectList} from '../../../../component'

export default class CompletedProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bids:{},
            isFetching:false,
            isEmpty:true,
            projects:{}
        };
        //this.getUserBids()
      }
   /*  getUserBids = async () => {
        
    } */
    
    async componentWillMount(){
        this.setState({isFetching:true})
        try{
            let result = await MainServices.getUserCompletedBids()
            let projects = result.data.data;
            if(Object.keys(projects).length == 0){
                this.setState({isEmpty:true})
            }else{
               this.setState({isEmpty:false})
               this.setState({projects})
                
            }
        }catch(e){
            console.warn(e)
        }
        this.setState({isFetching:false})

    }
  render() {
    return (
       <View style={{flex:1}}>
           {
               this.state.isFetching ? 
               (
                <View style={styles.loadingStyle}>
                    <ActivityIndicator size={"large"}/>
                </View>
               )
               :
               (
                   this.state.isEmpty ?
                   (
                       <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                         <Text style={{fontWeight:'bold',color:'#BDC2BE'}}>"You are what you do, not what you say you'll do."</Text>
                         <Text style={{textDecorationLine:'underline',color:'#959996',paddingTop:5}}>-C.G. Jung</Text>
                       </View>
                   )
                   :
                   (
                    <View style={{flex:1}}>
                         <ProjectList projects={this.state.projects} navigation={this.props.navigation}/>                          
                    </View>
                   )
               )
           }
       </View>
    )
  }
}
const styles = {
    loadingStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
}
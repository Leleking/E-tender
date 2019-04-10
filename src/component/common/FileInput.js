import React, { Component } from 'react'
import { Text, Platform,View,TouchableWithoutFeedback } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {CheckBox} from 'native-base'
class FileInput extends Component {
  render() {
    return (
        <View style={{backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#fff'}}>
            <TouchableWithoutFeedback onPress={() => {this.props.onPress()}}>
                <View style={{flexDirection:'row',
                        padding:15,backgroundColor:'white',borderRadius:5,
                        marginHorizontal:20,shadowOffset:{width:0,height:0},
                        shadowColor:'black',shadowOpacity:0.2,elevation:6,
                        marginTop:Platform.OS == 'android'  ? 30:20}}>                       
                    <Ionicons name={this.props.icon} color={this.props.color || "red"} size={22} style={{width:'20%'}} />          
                    <Text style={{flex:1,alignItems:'center',justifyContent:'center'}}>{this.props.name}</Text>
                    {
                        this.props.checked ?
                        (
                            <Ionicons name="ios-checkmark" color="blue" size={25} style={{width:'20%'}} />          
                        ):
                        (
                            <Ionicons name="ios-archive" color='#2c3e50' size={20} style={{width:'20%'}} />          
                        )
                    }
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
  }
}
export {FileInput}
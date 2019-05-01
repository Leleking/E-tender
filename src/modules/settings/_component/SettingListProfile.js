import React, { Component } from 'react';
import { View, Text,ActivityIndicator,AsyncStorage } from 'react-native';
import {ListItem} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import MainServices from '../../main/_store/MainServices'
export default class SettingListProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user:{},
        isFetching:true,
        access_token:null
    };
    this._getUser()
  }
  async _getUser() {
    try {
        let objData = await MainServices.getUser()
        let user = objData.data;
        this.setState({ user,isFetching: false })


    } catch (err) {
        console.log(err)
        alert("No internect connection or slow network")

    } 
}

  render() {
    return (
        <View>
            {
                this.state.isFetching ? (
                    <ActivityIndicator size={"large"}/>
                ) : (
                    <ListItem onPress={this.props.onPress}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{width:'20%'}}>
                                <Ionicons name="ios-contact" size={50}/>
                            </View>
                            <View style={{width:'70%'}}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>{this.state.user.name}</Text>
                                <Text style={{fontSize:11}}>View your profile</Text>
                            </View>
                            <View style={{width:'10%',justifyContent: 'center',}}>
                                <Ionicons name="ios-arrow-dropright" size={20}/>
                            </View>
                        </View>
                    </ListItem>
                )
            }
        </View>
    );
  }
}

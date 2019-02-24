import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ListItem} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
class SettingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ListItem>
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{width:'90%'}}>
              <Text style={{fontWeight:'bold',fontSize:14}}>{this.props.title}</Text>
              <Text style={{fontSize:11}}>{this.props.children}</Text>
            </View>
            <View style={{width:'10%',justifyContent: 'center',}}>
              <Ionicons name="ios-arrow-dropright" size={20}/>
            </View>
          </View>
        </ListItem>
      </View>
    );
  }
}
export {SettingList}
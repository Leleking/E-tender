import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import {ProjectDetail} from '../_component'
//import { ScrollView } from 'react-native-gesture-handler';
class ProjectDetailScreen extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {navigation} = this.props
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <ProjectDetail navigation={navigation}/>
        </View>
      </SafeAreaView>
    );
  }
}
export {ProjectDetailScreen}
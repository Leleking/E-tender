import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {ProjectDetail} from '../_component'
class ProjectDetailScreen extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {navigation} = this.props
    return (
      <View>
        <ProjectDetail navigation={navigation}/>
      </View>
    );
  }
}
export {ProjectDetailScreen}
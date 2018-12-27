import React, { Component } from 'react'
import { Text, View } from 'react-native'

class ProjectScreen extends Component {
  static navigationOptions = {
    title: 'Login',
    headerTitle:'man'
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
export  {ProjectScreen}
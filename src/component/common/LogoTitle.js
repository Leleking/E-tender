import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class LogoTitle extends Component {
  render() {
    return (
      <View>
        <Ionicons name="ios-search" size={this.props.size} color={this.props.color} />
      </View>
    )
  }
}
export {LogoTitle}
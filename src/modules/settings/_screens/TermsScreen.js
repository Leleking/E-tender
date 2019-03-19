import React, { Component } from 'react'
import { Text, View } from 'react-native'

class TermsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Terms and Conditions go here </Text>
      </View>
    )
  }
}
const styles = {
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
}
export {TermsScreen}
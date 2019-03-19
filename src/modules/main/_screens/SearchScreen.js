import React, { Component } from 'react'
import { View,TouchableWithoutFeedback,Keyboard,StyleSheet,ScrollView} from 'react-native'
import {Search}  from '../_component'
class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={styles.innerContainer}>
                    <Search navigation={this.props.navigation} />
                </ScrollView>
        </TouchableWithoutFeedback>
      </View>
     
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  innerContainer: {
      flex: 1,
      width: '100%',
  }
});

export {SearchScreen}
import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Keyboard,ScrollView } from 'react-native'
import {RegisterForm} from '../_components/index'
 class RegisterScreen extends Component {
  render() {
    return (
    <ScrollView>
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.innerContainer}>
                    <RegisterForm navigation={this.props.navigation} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    </ScrollView>
    )
  }
}
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    }
}
export {RegisterScreen}
import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback,Keyboard,ScrollView,KeyboardAvoidingView} from 'react-native'
import {RegisterForm} from '../_components/index'
 class RegisterScreen extends Component {
  render() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={styles.innerContainer}>
                            <RegisterForm navigation={this.props.navigation} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
import React,{Component} from 'react'
import {View,TouchableWithoutFeedback,KeyboardAvoidingView,ScrollView,StyleSheet,Keyboard} from 'react-native'
import {LoginForm} from '../_components/index'
class LoginScreen extends Component{
    static navigationOptions = {
        title: 'Login',
      };
    
    state = {
        email:''
    }
    onEmailChange = () => {

    }
    render(){
        return(
        <View style={{flex:1}}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.innerContainer}>
                        <LoginForm navigation={this.props.navigation} />
                    </View>
            </TouchableWithoutFeedback>
        </View>
      
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    }
});

export {LoginScreen}
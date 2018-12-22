import React,{Component} from 'react'
import {View,Text,TouchableWithoutFeedback,StyleSheet } from 'react-native'
import {CardButton} from '../../_components'
import { connect } from 'react-redux'
import {Container,Form,Item,Input,Label,Content,Button,Spinner} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
class LoginForm extends Component{
    static navigationOptions = {
       
    }
    state = {
        email:''
    }
    onEmailChange = () => {

    }
    render(){
        return(
        //<KeyboardAvoidingView enabled style={styles.container} behavior="padding">
        <Container style={styles.container}>
            <Content>
                <Form>
                   <Item stackedLabel>
                       <Label>Username</Label>
                       <Input />
                   </Item>
                   <Item stackedLabel last>
                       <Label>Password</Label>
                       <Input onChangeText={password=>{}} secureTextEntry />
                   </Item>
                  
                </Form>
            </Content>
            <Content>
               <CardButton text="LOGIN"/>
            </Content>
           </Container>
      
        )
    }
}
const styles = StyleSheet.create({
    container: {
       marginLeft:20,
       marginRight:20
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    }
});
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth
    return {
        email,password,error,loading
    }
}
export default connect(mapStateToProps)(LoginForm)
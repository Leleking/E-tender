import React,{Component} from 'react'
import {View,Text,TouchableWithoutFeedback,StyleSheet } from 'react-native'
import {CardButton} from '../../_components'
import { connect } from 'react-redux'
import {emailChanged,passwordChanged,renderLogin} from '../../_store/authAction'
import {Container,Form,Item,Input,Label,Content,Button,Spinner} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
class LoginForm extends Component{
    state = {
        email:''
    }
   
     renderLogin = () => {
        const {email,password} = this.props
        this.props.renderLogin({email,password})

    }
    render(){
        return(
        //<KeyboardAvoidingView enabled style={styles.container} behavior="padding">
        
        <Container style={styles.container}>
            <Content>
                <View style={styles.logoStyle}><Ionicons name="md-cube" size={60} color="teal" /></View>
                <Form style={{paddingTop:30}}>
                   <Item stackedLabel>
                       <Label><Ionicons name="md-person" size={20} color="teal" />   Email</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel last>
                       <Label><Ionicons name="md-key"  size={20} color="teal" />   Password</Label>
                       <Input value={this.props.password} onChangeText={password=>{this.props.passwordChanged(password)}} secureTextEntry />
                   </Item>
                   
                   <Button onPress={()=>{this.renderLogin()}} style={{backgroundColor:'teal'}}>
                  {
                      this.props.loading
                      ?   <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                            <Spinner/>
                          </View>    
                  :   <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                        <Ionicons name="md-log-in" size={20} color="white" /><Text style={{paddingLeft:5,color:'white'}}>LOGIN</Text>
                      </View>    
                  }            
                </Button>
                  
                  
                </Form>
                
            </Content>
            <Content>
                  <TouchableWithoutFeedback>
                      <View style={styles.bottomText}>
                          <Text>I don't have an account yet, create one</Text>
                      </View>
                  </TouchableWithoutFeedback>
               
                
            </Content>
           </Container>
      
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //paddingTop: ,
    
       paddingLeft:20,
       paddingRight:20,
      backgroundColor:'white'
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    bottomText:{
        marginTop:200,
        alignSelf: 'center',
        justifyContent:'center'
    },
    logoStyle:{
        alignSelf:'center',
        justifyContent:'center'
    }

});
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth
    return {
        email,password,error,loading
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,renderLogin})(LoginForm)
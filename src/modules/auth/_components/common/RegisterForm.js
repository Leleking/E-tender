import React,{Component} from 'react'
import {View,Text,TouchableWithoutFeedback,StyleSheet,ScrollView} from 'react-native'
import { connect } from 'react-redux'
import {emailChanged,passwordChanged,renderLogin,facebookLogin} from '../../_store/authAction'
import {Container,Form,Item,Input,Label,Content,Button,Spinner} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors'
class RegisterForm extends Component{
    state = {
        email:''
    }
     renderLogin = () => {
        const {email,password} = this.props
        this.props.renderLogin({email,password})

    }
    componentWillMount(){

    }
    render(){
        return(
        //<KeyboardAvoidingView enabled style={styles.container} behavior="padding">
        <ScrollView style={styles.container}>
            <Content>
                <View style={styles.logoStyle}><Ionicons name="md-cube" size={60} color={Colors.primary} /></View>
                <Form style={{paddingTop:30}}>
                    <Item stackedLabel>
                       <Label><Ionicons name="md-contact" size={20} color={Colors.primary} />  Name</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel>
                       <Label><Ionicons name="md-business" size={20} color={Colors.primary} />   Company Name</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel>
                       <Label><Ionicons name="md-build" size={20} color={Colors.primary} />   Industry</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel>
                       <Label><Ionicons name="md-globe" size={20} color={Colors.primary} />   Country</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel>
                       <Label><Ionicons name="md-call" size={20} color={Colors.primary} />   Phone</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel>
                       <Label><Ionicons name="md-at" size={20} color={Colors.primary} />   Email</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel last>
                       <Label><Ionicons name="md-key"  size={20} color="teal" />   Password</Label>
                       <Input value={this.props.password} onChangeText={password=>{this.props.passwordChanged(password)}} secureTextEntry />
                   </Item>
                   <Item stackedLabel last>
                       <Label><Ionicons name="md-key"  size={20} color="teal" /> Confirm Password</Label>
                       <Input value={this.props.password} onChangeText={password=>{this.props.passwordChanged(password)}} secureTextEntry />
                   </Item>
                   
                   <Button onPress={()=>{}} style={{backgroundColor:'teal'}}>
                  {
                      this.props.loading
                      ?   <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                            <Spinner/>
                          </View>    
                  :   <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                        <Text style={{paddingLeft:5,color:'white'}}>REGISTER</Text>
                      </View>    
                  }            
                </Button>
                </Form>
                {/* <Text style={{alignSelf:'center', marginTop:52}}>Or register with</Text>
                <TouchableWithoutFeedback>
                    <View style={styles.bottomText}>
                        <Button onPress={()=>{this.props.facebookLogin()}} style={{backgroundColor:'#3b5998'}}>
                            <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                                <Text style={{paddingLeft:5,color:'white'}}><Ionicons name="logo-facebook" size={20}/> Facebook</Text>
                            </View>    
                        </Button>
                        <Text></Text>
                        <Button onPress={()=>{this.renderLogin()}} style={{backgroundColor:'#DB4437'}}>
                            <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                                <Text style={{paddingLeft:5,color:'white'}}><Ionicons name="logo-google" size={20}/> Google</Text>
                            </View>    
                        </Button>
                    </View>
                </TouchableWithoutFeedback> */}
            </Content>
        </ScrollView>
      
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:10,
       paddingLeft:20,
       paddingRight:20,
      backgroundColor:'white',
      paddingBottom:10
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center'
    },
    bottomText:{
        marginTop:100,
        alignSelf: 'center',
        justifyContent:'center'
    },
    logoStyle:{
        alignSelf:'center',
        justifyContent:'center',
        marginTop:20
    }

});
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth
    return {
        email,password,error,loading
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,renderLogin,facebookLogin})(RegisterForm)
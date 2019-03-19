import React,{Component} from 'react'
import {View,Text,TouchableWithoutFeedback,StyleSheet,AsyncStorage,Keyboard } from 'react-native'
import {CardButton} from '../../_components'
import { connect } from 'react-redux'
import {emailChanged,passwordChanged,renderLogin,loadingOff} from '../../_store/authAction'
import {Container,Form,Item,Input,Label,Content,Button,Spinner} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors'
class LoginForm extends Component{
    constructor(props) {
        super(props);
        //this._bootstrapAsync();
      }
    state = {
        email:''
    }
    
     renderLogin = () => {
        Keyboard.dismiss()
        const {email,password} = this.props
        this.props.renderLogin({email,password})

    }
    componentDidUpdate = async () => {
        const access_token = await AsyncStorage.getItem('access_token');
        const fb_token = await AsyncStorage.getItem('fb_token');
    
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate((access_token || fb_token)? 'App' : 'Auth');
    }
    componentWillMount = () => {
      /*  if(this.props.isFirstTime){
          this.props.navigation.navigate("Intro")
       } */
        
        this.props.loadingOff()
        //console.log(this.props)
    }
    render(){
        return(
        //<KeyboardAvoidingView enabled style={styles.container} behavior="padding">
        
        <Container style={styles.container}>
            <Content>
                <View style={styles.logoStyle}>
                    <Ionicons name="md-cube" size={60} color={Colors.primary} />
                    <Text style={{fontSize:20,fontWeight: 'bold',color:"#B9A085"}}> Public Procument Authority</Text>
                </View>
                <Form style={{paddingTop:30}}>
                   <Item stackedLabel>
                       <Label><Ionicons name="md-person" size={20} color={Colors.primary} />   Email</Label>
                       <Input value={this.props.email} onChangeText={email=>{this.props.emailChanged(email)}}/>
                   </Item>
                   <Item stackedLabel last>
                       <Label><Ionicons name="md-key"  size={20} color={Colors.primary} />   Password</Label>
                       <Input value={this.props.password} onChangeText={password=>{this.props.passwordChanged(password)}} secureTextEntry />
                   </Item>
                   
                   <Button onPress={()=>{this.renderLogin()}} style={{backgroundColor:Colors.primary}}>
                  {
                      this.props.loading
                      ?   <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                            <Spinner color="white"/>
                          </View>    
                  :   <View style={{flex: 1,flexDirection: 'row',justifyContent:'center'}}>
                        <Ionicons name="md-log-in" size={20} color="white" /><Text style={{paddingLeft:5,color:'white'}}>LOGIN</Text>
                      </View>    
                  }            
                </Button>
                  
                  
                </Form>
                
           
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
        justifyContent:'center',
        paddingTop:20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }

});
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading,isFirstTime,} = auth
    return {
        email,password,error,loading,isFirstTime
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,renderLogin,loadingOff})(LoginForm)
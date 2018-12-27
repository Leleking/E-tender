import React, { Component } from 'react';
import { View,ScrollView, Text,LayoutAnimation,TouchableWithoutFeedback} from 'react-native';
import {Container,Card,CardItem,Button,Content,Grid,Row} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import {AsyncStorage} from 'react-native'
 class WelcomeScreen extends Component {
   static navigationOptions = {
    // header:null
   }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  async componentWillMount(){
    //LayoutAnimation.spring()
   try{
    const token = await AsyncStorage.getItem('access_token');
    //console.warn(token)
    if(!token){
      this.props.navigation.navigate('LoginScreen')
    }
   }catch(e){
    console.warn(e)
   }
}

  render() {
    return (
      <Container style={styles.container}>
        <Content><View style={styles.logoStyle}><Ionicons name="md-cube" color="white" size={60}/></View></Content>
        <Content>
          <Content style={{paddingTop:150}}>
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('RegisterScreen')}>
            <Card  style={styles.textContainer}>
              <CardItem style={styles.cardItemStyle}>
                <View>
                  <Text>Create an Account</Text>
                </View>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('LoginScreen')}>
            <Card  style={styles.textContainer}>
              <CardItem style={styles.cardItemStyle}>
                <View>
                  <Text>Already have an account? Log in</Text>
                </View>
              </CardItem>
            </Card>
          </TouchableWithoutFeedback>
          </Content>
        </Content>
      </Container>
    );
  }
}
const styles = {
  textContainer:{
    alignSelf: 'center',
    alignItems: 'center',
    width:300
  },
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    
  },
  cardItemStyle:{
    borderRadius:2,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight:15,
  },
  logoStyle:{
    alignSelf:'center',
    justifyContent:'center',
    paddingTop:50
}
}
export {WelcomeScreen}




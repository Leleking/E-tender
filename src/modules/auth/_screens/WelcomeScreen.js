import React, { Component } from 'react';
import { View,ScrollView, Text,LayoutAnimation,TouchableWithoutFeedback} from 'react-native';
import {Container,Card,CardItem,Button,Content} from 'native-base'
import {axios} from '../../../services'
 class WelcomeScreen extends Component {
   static navigationOptions = {
    // header:null
   }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount(){
    LayoutAnimation.spring()
    axios.get("api/test").then(
      response => console.log(response)
    ).catch(err => console.log(err))
}

  render() {
    return (
      <ScrollView>
      <Container style={styles.container}>
        <Content><Text style={{color:'white'}}>Get the best tender experience here</Text></Content>
        <Content style={{paddingTop:200}}>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('LoginScreen')}>
        <Card  style={styles.textContainer}>
          <CardItem style={styles.cardItemStyle}>
              <View>
                <Text>
                  Create an Account
                </Text>
              </View>
          </CardItem>
        </Card>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('LoginScreen')}>
      <Card  style={styles.textContainer}>
          <CardItem style={styles.cardItemStyle}>
              <View>
                <Text>
                  Already have an account? Log in
                </Text>
              </View>
          </CardItem>
      </Card>
      </TouchableWithoutFeedback>

        </Content>

      </Container>
      </ScrollView>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal'
  },
  cardItemStyle:{
    borderRadius:2,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight:15,
  }
}
export {WelcomeScreen}
import React, { Component } from 'react';
import { View,Text,LayoutAnimation,TouchableWithoutFeedback} from 'react-native';
import {Container,Card,CardItem,Button,Content} from 'native-base'
 class CardButton extends Component {
   static navigationOptions = {
    // header:null
   }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 

  render() {
    return (
      <View>
      
        <TouchableWithoutFeedback>
      <Card  style={styles.textContainer}>
          <CardItem style={styles.cardItemStyle}>
              <View>
               
                  {this.props.text}
                
              </View>
          </CardItem>
      </Card>
      </TouchableWithoutFeedback>

       
      </View>
    );
  }
}
const styles = {
  textContainer:{
    alignSelf: 'center',
    alignItems: 'center',
    width:300,
    backgroundColor:'teal'
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
    backgroundColor:'teal'
  }
}
export {CardButton}
import React, { Component } from 'react';
import { View,ScrollView, Text,LayoutAnimation,TouchableWithoutFeedback,ImageBackground,Platform} from 'react-native';
import {Container,Card,CardItem,Button,Content,Grid,Row} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors'

export default class AndriodIntro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
         <ImageBackground source={require('../../../../../assets/img/a52d9ba54264337baa487a48141a1bcf.gif')} style={{width: '100%', height: '100%'}}> 
         <View style={{marginTop:255}}>
           <TouchableWithoutFeedback onPress={()=>this.props.navigate('RegisterScreen')}>
             <Card  style={styles.textContainer}>
               <CardItem style={styles.cardItemStyle}>
                 <View>
                   <Text style={{color:'white'}}>Create an Account</Text>
                 </View>
               </CardItem>
             </Card>
           </TouchableWithoutFeedback>
           <TouchableWithoutFeedback onPress={()=>this.props.navigate('LoginScreen')}>
             <Card  style={styles.textContainer}>
               <CardItem style={styles.cardItemStyle}>
                 <View>
                   <Text style={{color:'white'}}>Already have an account? Log in</Text>
                 </View>
               </CardItem>
             </Card>
           </TouchableWithoutFeedback>
         </View>
       
     </ImageBackground>
      </View>
    );
  }
}
const styles = {
    textContainer:{
      alignSelf: 'center',
      alignItems: 'center',
      width:300,
      backgroundColor:Colors.introButton,
      borderColor: Colors.introButton,
      //borderRadius:25
      
    },
    container: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
     
      
    },
    cardItemStyle:{
      borderRadius:2,
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 15,
      paddingRight:15,
      backgroundColor:Colors.introButton,
     
  
    },
    logoStyle:{
      alignSelf:'center',
      justifyContent:'center',
      paddingTop:50,
  
  }
  }
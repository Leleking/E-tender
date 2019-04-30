import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import {Button} from 'native-base'

 class UserBidScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  getUserBids(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems:'center'}}>
            <Text style={{fontWeight:'bold'}}>Explore Now</Text>
            <Text style={{fontSize:11,color:'grey'}}>Let's help you get your first tender</Text>
            <Image style={{width:400,height:450}} source={require('../../../../assets/img/Tools_gif.gif')}/>
        </View>

        <View>
            <Button rounded  bordered style={styles.button} onPress={() => {this.props.navigation.navigate("Search")}}>
                <Text>Explore Projects</Text>
            </Button>
        </View>
       
      </View>
    );
  }
}
const styles = {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        paddingHorizontal:50,
        
        
    }
}
export {UserBidScreen}
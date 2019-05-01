import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'
import {Button} from 'native-base'
 class ThankYouScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../../../../assets/logo.png')} style={{width:50,height:60}}/>
        </View>
        <View>
          <Text>Congratulations, your bid has been successfully placed.</Text>
        </View>
        <View style={{paddingTop:50}}>
          <Button full rounded danger onPress={() => {this.props.navigation.navigate('UserBids')}}>
            <Text style={{paddingLeft:100,paddingRight:100,color:"white"}}>
              Open my bids
            </Text>
          </Button>
        </View>
      </View>
    )
  }
}
const styles = {
  container : {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
}
export {ThankYouScreen}
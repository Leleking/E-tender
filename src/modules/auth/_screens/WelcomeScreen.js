import React, { Component } from 'react';
import { View,Text,Platform} from 'react-native';
import {IosIntro,AndriodIntro} from '../_components/'
 class WelcomeScreen extends Component {
  render() {
    return (
    <View>
      {(Platform.OS === 'android') ? <AndriodIntro navigate={this.props.navigation.navigate}/>:
        <IosIntro navigate={this.props.navigation.navigate}/>
      }
    </View>
    );
  }
}
export {WelcomeScreen}




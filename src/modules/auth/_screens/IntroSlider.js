import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 375,
    height: 730,
  },
  text:{
    color:'black',
  }
});

const slides = [
    /* {
      key: 'somethun',
      //title: 'Title 1',
      text: 'Description.\nSay something cool',
      textStyle: styles.text,
      image: require('../../../../assets/img/agenda-analysis-business-990818.jpg'),
      imageStyle: styles.image,
      textAlign: 'center',
      //backgroundColor: '#59b2ab',
      //textStyle
    }, */
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../../../assets/img/logo.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('../../../../assets/img/man.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    }
  ];
  
class IntroSlider extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    );
  }
}
export {IntroSlider}
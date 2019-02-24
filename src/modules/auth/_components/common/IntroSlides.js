import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});

export const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../../../assets/img/logo.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../../../assets/img/man.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../../../../../assets/img/man.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  }
];


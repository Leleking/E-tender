import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
const styles = {
    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        
    }
}
class Spinner extends Component {
  render() {
    return (
      <View style={styles.spinnerStyle}>
          <ActivityIndicator size={this.props.size || 'large'}/>
      </View>
    );
  }
}
export {Spinner}
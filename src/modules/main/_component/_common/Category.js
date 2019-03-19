import React, { Component } from 'react';
import { View, Text,Image,TouchableWithoutFeedback} from 'react-native';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigate} = this.props.navigate
    return (
      <View>
        <TouchableWithoutFeedback onPress={()=>{navigate('ProjectCategory',{category:this.props.name})}}>
          <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd',shadowOffset:{width:0,height:0},
                    shadowColor:'black',shadowOpacity:0.2,elevation:1,}}
                    >
            <View style={{flex:2}}>
                <Image source={this.props.imageUrl} style={{flex:1, width:null,height:null,resizeMode:'cover'}}/>
            </View>
            <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                <Text>{this.props.name}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

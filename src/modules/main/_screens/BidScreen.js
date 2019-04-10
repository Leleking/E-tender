import React, { Component } from 'react'
import { Text, View ,WebView,Platform,TouchableWithoutFeedback,ScrollView,Keyboard,KeyboardAvoidingView} from 'react-native'
import {Card,CardItem,Input,Form,Item,Label,Button,CheckBox} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
import {FileInput} from '../../../component'
import { DocumentPicker,ImagePicker, } from 'expo';
import {axios} from '../../../services'

class BidScreen extends Component {
    constructor(props) {
        super(props);

      }
    state = {
        experience:"",
        price:"",
        warranty:"",
        business:{},
        vat:{},
        tax:{},
        cv:{}
    }
    getBusiness= async () => {
      let result = await ImagePicker.launchImageLibraryAsync()
    
      if (result.cancelled) {
        return;
      }
    
      let localUri = result.uri;
      let filename = localUri.split('/').pop();
    
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let data = { uri: localUri, name: filename, type }
      this.setState({business:data})
      /* let formData = new FormData();
      formData.append('photo', { uri: localUri, name: filename, type });
      formData.append('name',"simeon")
      axios.post('api/postMedia',formData, {
        header: {
          'content-type': 'multipart/form-data',
        
        },
      }).then((res) => console.warn(res)).catch((err) => console.warn(err)); */
    }
    getVat = async () => {
      let result = await ImagePicker.launchImageLibraryAsync()
    
      if (result.cancelled) {
        return;
      }
    
      let localUri = result.uri;
      let filename = localUri.split('/').pop();
    
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let data = { uri: localUri, name: filename, type }
      this.setState({vat:data})
    }
    getTax = async () => {
      let result = await ImagePicker.launchImageLibraryAsync()
    
      if (result.cancelled) {
        return;
      }
    
      let localUri = result.uri;
      let filename = localUri.split('/').pop();
    
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      let data = { uri: localUri, name: filename, type }
      this.setState({tax:data})
    }
    uploadBid = () => {
      const {experience,price,warranty,business,vat,tax,cv} = this.state
      if(!experience || !price || warranty ){
        alert("a field is empty")
      }else{
      let formData = new FormData();
      formData.append('photo', { uri: localUri, name: filename, type });
      formData.append('name',"simeon")
      axios.post('api/postMedia',formData, {
        header: {
          'content-type': 'multipart/form-data',
        
        },
      }).then((res) => console.warn(res)).catch((err) => console.warn(err)); 
      }
    }
  render() {
    return (
    <ScrollView style={{flex:1}}>
      <KeyboardAvoidingView
      behavior="padding"
      enabled
    >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{marginRight:10,marginLeft:10,marginTop:Platform.OS == 'android'  ? 30:20,flex:1}}>
          <Card>
              <CardItem style={{
                  alignSelf: 'center',
                  alignItems: 'center'
              }}>
                  <Text>Bid Form for Project</Text>
              </CardItem>
          </Card>
          <Form style={{paddingTop:30}}>
                <Item stackedLabel>
                    <Label><Ionicons name="md-pie" size={20} color={Colors.primary} /> Years of experience</Label>
                    <Input onChangeText={(experience) => {this.setState({experience})}}  />
                </Item>
                <Item stackedLabel>
                    <Label><Ionicons name="md-cash" size={20} color={Colors.primary} /> Price Quotation</Label>
                    <Input onChangeText={(price) => {this.setState({price})}}  />
                </Item>
                <Item stackedLabel>
                    <Label><Ionicons name="md-analytics" size={20} color={Colors.primary} /> Warranty</Label>
                    <Input onChangeText={(warranty) => {this.setState({warranty})}} />
                </Item>
                <FileInput icon="ios-image" onPress={() => {alert()}} name="Business Registry Certificate" />
                <FileInput icon="ios-image" onPress={() => {alert()}} name="Vat Registry Certificate" color="blue" checked={false} />
                <FileInput icon="ios-image" onPress={() => {alert()}} name="Tax Registry Certificate" color="grey" checked={false} />
                <FileInput icon="ios-document" onPress={() => {alert()}} name="CV" color="yellow" checked={true} />
                <Item style={{paddingTop:10}} stackedLabel>
                  <Button full danger rounded onPress={() => {this.uploadBid()}}>
                    <Text style={{color:'white'}}>Submit</Text>
                  </Button>
                </Item> 
          </Form>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </ScrollView>
    )
  }
}

const styles = {
  fileStyle:{
    flex:1,
    flexDirection:'row'
  }
}
    
export {BidScreen}
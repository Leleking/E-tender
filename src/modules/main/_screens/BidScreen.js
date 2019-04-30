import React, { Component } from 'react'
import { Text, View ,Platform,TouchableWithoutFeedback,ScrollView,Keyboard,KeyboardAvoidingView} from 'react-native'
import {Card,CardItem,Input,Form,Item,Label,Button,Toast} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
import {FileInput} from '../../../component'
import { DocumentPicker,ImagePicker, } from 'expo';
import {axios} from '../../../services'
import {Spinner} from '../../../component'
import MainServices from '../../main/_store/MainServices'

class BidScreen extends Component {
    constructor(props) {
        super(props);

      }
    state = {
        experience:"",
        price:"",
        project_id:0,
        warranty:"",
        business:{},
        vat:{},
        tax:{},
        cv:{},
        check:{
          business:false,
          tax:false,
          vat:false,
          cv:false
        },
        loading:false
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
      this.setState({check:{
        ...this.state.check,
        business:true
      }})
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
      this.setState({check:{
        ...this.state.check,
        vat:true
      }})
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
      this.setState({check:{
        ...this.state.check,
        tax:true
      }})
    }
    uploadBid = () => {
      const {experience,price,warranty,business,vat,tax,cv} = this.state
      if(!experience || !price || warranty ){
        Toast.show({
          text: "One or more of t fields is empty",
          buttonText: 'Okay',
          duration: 5000,
          type:'danger',
          buttonTextStyle: { color: "#008000" },
          buttonStyle: { backgroundColor: "#2c3e50" }
        }) 
      }else{
      this.setState({loading:true})
      let formData = new FormData();
      formData.append('business', this.state.business);
      formData.append('vat', this.state.vat);
      formData.append('tax', this.state.tax);
      //formData.append('cv', this.state.cv);
      formData.append('experience',this.state.experience)
      formData.append('price',this.state.price)
      formData.append('project_id',this.props.navigation.getParam('id'))
      //formData.append('warranty',this.state.warranty)
      
      axios.post('api/postMedia',formData, {
        header: {
          'content-type': 'multipart/form-data',
        
        },
      }).then((res) => {
        this.setState({loading:false})
        console.warn(res)
      })
      .catch((err) => console.warn(err)); 
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
                <FileInput icon="ios-image" onPress={() => {this.getBusiness()}} name="Business Registry Certificate" color="#2c3e50" checked={this.state.check.business} />
                <FileInput icon="ios-image" onPress={() => {this.getVat()}} name="Vat Registry Certificate" color="#2c3e50" checked={this.state.check.vat} />
                <FileInput icon="ios-image" onPress={() => {this.getTax()}} name="Tax Registry Certificate" color="#2c3e50" checked={this.state.check.tax} />
                <FileInput icon="ios-document" onPress={() => {alert()}} name="CV" color="#2c3e50" checked={true} />
                <Item style={{paddingTop:10}} stackedLabel>
                  <Button full style={{backgroundColor:"#2c503e"}} rounded onPress={() => {this.uploadBid()}}>
                    {
                      this.state.loading ?
                      <Spinner color="white"/> :
                      <Text style={{color:'white'}}>Submit</Text>
                    }
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
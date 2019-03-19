import React, { Component } from 'react'
import { Text, View ,Image,Platform,TouchableWithoutFeedback,ScrollView,Keyboard,KeyboardAvoidingView} from 'react-native'
import {Card,CardItem,Input,Form,Item,Label} from 'native-base'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
class BidScreen extends Component {
  render() {
    return (
      <ScrollView style={{flex:1}}>
      <KeyboardAvoidingView
      behavior="padding"
      enabled
    >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{marginRight:20,marginLeft:20,marginTop:Platform.OS == 'android'  ? 30:20,flex:1}}>
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
                      <Input  />
                  </Item>
                  <Item stackedLabel>
                      <Label><Ionicons name="md-cash" size={20} color={Colors.primary} /> Price Quotation</Label>
                      <Input  />
                  </Item>
                  <Item stackedLabel>
                      <Label><Ionicons name="md-analytics" size={20} color={Colors.primary} /> Warranty</Label>
                      <Input  />
                  </Item>
                  <Item stackedLabel>
                      <Label>Business Registry Certificate</Label>
                      <Input type="file" />
                  </Item>
                  <Item stackedLabel>
                      <Label> Vat Registry Certificate</Label>
                      <Input  />
                  </Item>
                  <Item stackedLabel>
                      <Label><Ionicons name="md-cash" size={20} color={Colors.primary} /> Tax Registry Certificate</Label>
                      <Input  />
                  </Item>
                  <Item stackedLabel>
                      <Label><Ionicons name="md-cash" size={20} color={Colors.primary} /> CV</Label>
                      <Input  />
                  </Item>
          </Form>
            
          </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}
export {BidScreen}
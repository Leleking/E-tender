import React, { Component } from 'react';
import { View, Text ,AsyncStorage,ScrollView} from 'react-native';
import { Container, Header, Content,ListItem, Separator } from 'native-base';
import SettingListProfile from '../_component/SettingListProfile'
import {SettingList} from '../_component'
class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    //this.props.navigation.navigate("Account")
    
  }
  
  _logoutAsync = async () => {
    //alert(256)
    await AsyncStorage.clear()
   this.props.navigation.navigate('Auth')
    
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <Header style={{backgroundColor:'white'}} />
          <Content>
            
            <SettingListProfile/>
            <Separator bordered>
              <Text></Text>
            </Separator>
            <SettingList title="Notifications">
              Here is what is going on today!
            </SettingList>
            <Separator bordered>
              <Text>Account Settings</Text>
            </Separator>
            <SettingList title="Payments/Deposit Funds">
              Details regarding your payments account
            </SettingList>
            <Separator bordered>
              <Text>Other</Text>
            </Separator>
            <SettingList title="Privacy Policy">
              Opens our privacy policy
            </SettingList>
            <SettingList title="Terms and Conditions">
              Opens our terms and conditinos page
            </SettingList>
            <SettingList title="App Version">
              1.0.1(build 1)
            </SettingList>
            <ListItem onPress={()=>{this._logoutAsync()}} last>
              <View>
                <Text>Logout</Text>
              </View>
            </ListItem>
          </Content>
      </Container>
      </ScrollView>
    );
  }
}
export  {SettingsScreen}
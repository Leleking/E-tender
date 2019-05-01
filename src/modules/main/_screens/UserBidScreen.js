import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon,Button } from 'native-base';
import {AllBids,OngoingProjects,CompletedProjects} from '../_component'
import Colors from '../../../constants/Colors'
 class UserBidScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    return (
      <Container>
        <Header style={{backgroundColor:Colors.primary}} hasTabs/>
        <Tabs>
          <Tab   heading={ <TabHeading style={{backgroundColor:Colors.primary}}><Icon name="ios-business" /><Text style={{color:'white'}}> {' '}All Bids</Text></TabHeading>}>
            <AllBids navigation={this.props.navigation}/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:Colors.primary}}><Icon name="ios-alarm" /><Text style={{color:'white'}}> {' '}Work In Progress</Text></TabHeading>}>
            <OngoingProjects/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:Colors.primary}}><Icon name="filing" /><Text style={{color:'white'}}> {' '}Completed</Text></TabHeading>}>          
            <CompletedProjects/>
          </Tab>
        </Tabs>
    </Container>
    )
  }
}
const styles = {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        paddingHorizontal:50,
        
        
    }
}
export {UserBidScreen}
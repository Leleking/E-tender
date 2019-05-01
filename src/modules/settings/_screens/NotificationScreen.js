import React, { Component } from 'react'
import { Text, View,TouchableWithoutFeedback} from 'react-native'
import {Container,Header,Content,ListItem,Left,Button,Icon,Body,Right,Switch} from 'native-base'
class NotificationScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      push:false
    }
  }
  _push(){
    this.setState({push:!this.state.push})
  }
  render() {
    return (
      <Container>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="notifications" />
              </Button>
            </Left>
            <Body>
              <Text>Push Notifiction</Text>
            </Body>
            <Right>
              <TouchableWithoutFeedback onPress={()=>{this._push()}}>
                <Switch value={this.state.push} />
              </TouchableWithoutFeedback>
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#CB260F" }}>
                <Icon active name="mail" />
              </Button>
            </Left>
            <Body>
              <Text>Email Notification</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#3FB328" }}>
                <Icon active name="chatboxes" />
              </Button>
            </Left>
            <Body>
              <Text>Sms Notification</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    )
  }
}

export {NotificationScreen}
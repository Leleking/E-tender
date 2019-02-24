import React, { Component } from 'react'
import { Text, View ,Image,Platform} from 'react-native'
import {Card,CardItem} from 'native-base'
class BidScreen extends Component {
  render() {
    return (
      <View>
        <View style={{marginHorizontal:20,marginTop:Platform.OS == 'android'  ? 30:20}}>
            <Card>
                <CardItem style={{
                    alignSelf: 'center',
                    alignItems: 'center'
                }}>
                    <Text>Bid Form for Project</Text>
                </CardItem>
            </Card>
        </View>
      </View>
    )
  }
}
export {BidScreen}
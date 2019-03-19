import React, { Component } from 'react'
import { Text, View,SafeAreaView,Platform,TextInput,Image,ScrollView,Dimensions,Modal,TouchableHighlight} from 'react-native'
import {Button,Separator,ListItem,Header,Left,Body,Title,Right} from 'native-base'
import {FadeInView} from '../../../../component'
import { Ionicons } from '@expo/vector-icons';
class Search extends Component {  
  constructor(props) {
    super(props)
      this.state = {
        active: false,
        modalVisible: false,
      };
    }
    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }
  render() {

    const screenWidth = Dimensions.get('window').width
    return (
      <SafeAreaView style={{flex:1}}>
    
      <View style={{ flex:1 }}>
        <View style={{backgroundColor:'white',borderBottomWidth:1,borderBottomColor:'#fff'}}>
          <View style={{flexDirection:'row',
                padding:15,backgroundColor:'white',borderRadius:5,
                marginHorizontal:20,shadowOffset:{width:0,height:0},
                shadowColor:'black',shadowOpacity:0.2,elevation:6,
                marginTop:Platform.OS == 'android'  ? 30:20}}>
            <Text> </Text>                       
            <Ionicons name="ios-apps" color="grey" size={22} />
            <Text> </Text>           
            <TextInput
                underlineColorAndroid="transparent"
                placeholder=" Search for tenders"
                placeholderTextColor="grey"
                style={{flex:1,fontWeight:'700',backgroundColor:'white'}}
            />
            <Ionicons name="ios-search" color="grey" size={18} />
          </View>
        </View>


        <ScrollView style={{flex:1}} scrollEventThrottle={16}>
          <FadeInView style={{flex:1,backgroundColor:'white'}}>
              <View style={{marginTop:40,paddingHorizontal:20}}>
                <View style={styles.cardItemStyle}>
                  <View style={{width: '70%', height: 30}}>
                    <Text style={{fontSize:24,fontWeight:'700'}}>
                      Latest Projects in PPA
                    </Text>
                  </View>
                  <View>
                    <View style={{width:80 ,height: 30,borderRadius:100,backgroundColor:'#B92A65',justifyContent:'center',alignItems:'center'}}>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(true);
                        }}>
                        
                        <Text style={{color:'white'}}>
                          <Ionicons name="ios-options" color="white" size={20} />
                           {" "}filter
                        </Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
                <Text style={{fontWeight:'100',marginTop:10}}>Click on the filter button to filter your search</Text>
                <View style={{width:screenWidth - 40,height:200,marginTop: 20}}>
                  <Image
                  style={{
                    flex:1,
                    height:null,
                    width:null,
                    resizeMode:'cover',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#dddddd'
                  }}
                  source={require('../../../../../assets/img/search.jpg')}
                  />
                </View>
              </View>
          </FadeInView>
         
          
        </ScrollView>
      </View>
      <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View>
            <View>
              <Header>
                <Left>
                  <Button onPress={() => {
                    this.setModalVisible(!this.state.modalVisible)}}
                   transparent>
                    <Ionicons name="md-arrow-back" color="white" size={20} />
                  </Button>
                </Left>
                <Body>
                  <Title>Filter</Title>
                </Body>
                <Right>
                  <Button onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    }} transparent>
                    <Text style={{color:'white'}}>Cancel</Text>
                  </Button>
                </Right>
              </Header>
              <Separator bordered>
                <Text>Project Categories</Text>
              </Separator>
              <ListItem>
                <Text>Construction</Text>
              </ListItem>
              <ListItem>
                <Text>Goods and Services</Text>
              </ListItem>
              <ListItem last>
                <Text>IT</Text>
              </ListItem>
              <Separator bordered>
                <Text>Filter with Date</Text>
              </Separator>
              <ListItem>
                <Text>date</Text>
              </ListItem>
            </View>
          </View>
        </Modal>
    </SafeAreaView>
    )
  }
}
const styles ={
  cardItemStyle: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    flex:1
  }
}
export default Search
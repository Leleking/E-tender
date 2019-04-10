import React, { Component } from 'react'
import { Text, View ,ScrollView,Platform,SafeAreaView,ActivityIndicator} from 'react-native'
import MainServices from '../../_store/MainServices'
import {Button,Card,CardItem,Body,Container,Content} from 'native-base'
import { Ionicons } from '@expo/vector-icons';



export default class ProjectDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: {},
            project_detail:{},
            extra:{},
            isFetching: true
        }
        //props.navigation.navigate('Auth')
        //console.log(props.navigation)


    }
    
    componentWillMount() {
        this._getProjectDetail()
    }
    /* componentWillReceiveProps() {
        this._getProjectDetail()
    } */
    async _getProjectDetail() {
        try {
            let id = this.props.navigation.getParam('id')
            let objData = await MainServices.getProjectDetail(id)
            let project = objData.data.data;
            let project_detail = objData.data.project_detail
            this.setState({ project,project_detail,extra:objData.data.project_detail.data, isFetching: false })
            //console.warn(objData.data.project_detail)

        } catch (err) {
            console.warn(err)
            alert("No internect connection or slow network")
        }
    }
    
    render()
     {
        const {project,project_detail,extra,isFetching} = this.state
        return (
               <Container style={{flex:1}}>
               {
                   (isFetching)? (
                    <View style={styles.loadingStyle}>
                        <ActivityIndicator size={"large"}/>
                    </View>
                   )  : ( 
                   <Content>
                       <ScrollView>
                       <Card>
                                <CardItem header style={{flex:1,alignItems: 'center',justifyContent:'center',backgroundColor:'#2c3e50',borderRadius:5,paddingTop:20,paddingBottom:20,marginTop:30}}>
                                    <Text style={{fontSize:20,color:'white'}}> {project.name}</Text>
                                </CardItem>
                                <CardItem header>
                                <Ionicons name="ios-pin" size={20} color="black" />
                                    <Text style={{paddingLeft:10}}> {project_detail.region},{extra.agency}</Text>
                                </CardItem>
                                <CardItem>
                                    <Ionicons name="ios-call" size={20} color="black" />
                                    <Text style={{paddingLeft:10}}> {extra.contact}</Text>
                                </CardItem>
                                <CardItem>
                                    <Ionicons name="ios-filing" size={20} color="black" />
                                    <Text style={{paddingLeft:10}}> Tender Type : {project_detail.tender_type}</Text>
                                </CardItem>
                                <CardItem>
                                    <Ionicons name="ios-cash" size={20} color="black" />
                                    <Text style={{paddingLeft:10}}> Funding : {extra.funding}</Text>
                                </CardItem>
                                <CardItem>
                                    <Ionicons name="ios-card" size={20} color="black" />
                                    <Text style={{paddingLeft:10}}> Budget : {project.currency}{project.budget}</Text>
                                </CardItem>
                                
                               
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {project.body}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                            {project.skills_required}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Text>{project.end_date}</Text>
                                </CardItem>
                                <CardItem style={{alignItems: 'center',justifyContent:'center'}} footer>
                                    <Button  danger full onPress={ () => {this.props.navigation.navigate('Bid',{params:project.id})}}>
                                        <View style={{paddingRight:50,paddingLeft:50}}>
                                            <Ionicons name="ios-pricetags" size={20} color="white" />
                                            <Text style={styles.bidTextStyle}> Bid</Text>
                                        </View>
                                    </Button>
                                </CardItem>
                                
                            </Card>
                       </ScrollView>
                            
                    
                   </Content>
                   )
               }
               </Container>
        )
    }
}
const styles = {
    bidTextStyle:{
        color:"white"
    },
    loadingStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}

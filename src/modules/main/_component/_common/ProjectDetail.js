import React, { Component } from 'react'
import { Text, View ,ScrollView,Platform,SafeAreaView} from 'react-native'
import MainServices from '../../_store/MainServices'
import {Button,Card,CardItem,Body} from 'native-base'
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
        const {project,project_detail,extra} = this.state
        return (
            <View>
               <View>
                    <ScrollView>
                        <View style={{marginHorizontal:20,marginTop:Platform.OS == 'android'  ? 30:20}}>
                            <Card>
                            <CardItem header>
                                    <Text style={{alignItems: 'center',justifyContent:'center'}}> {project.name}</Text>
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
                                <CardItem footer>
                                    <Text>{project.end_date}</Text>
                                </CardItem>
                            </Card>
                        </View>
                        
                        <View style={{
                            paddingHorizontal:20,shadowOffset:{width:0,height:0},
                            shadowColor:'black',shadowOpacity:0.2,elevation:5,
                        }}>
                            <Button rounded danger full onPress={ () => {this.props.navigation.navigate('Bid',{params:project.id})}}>
                                <Ionicons name="ios-pricetags" size={20} color="white" />
                                <Text style={styles.bidTextStyle}> Bid</Text>
                            </Button>
                        </View>
                    </ScrollView>
               </View>
            </View>
        )
    }
}
const styles = {
    bidTextStyle:{
        color:"white"
    }
}

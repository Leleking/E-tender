import React, { Component } from 'react'
import { Text, View ,ScrollView,Platform,SafeAreaView,ActivityIndicator} from 'react-native'
import MainServices from '../../_store/MainServices'
import {Button,Card,CardItem,Body,Container,Content,Icon} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment'
export default class ProjectDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            project: {},
            project_detail:{},
            extra:{},
            isFetching: true,
            isNew:true
        }
        //props.navigation.navigate('Auth')
        //console.log(props.navigation)


    }
    getDate(date){
        return moment(date).format('MMMM Do YYYY');
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
            if(objData.data.new == false){
                this.setState({isNew:false})
            }
            this.setState({ project,project_detail,extra:objData.data.project_detail.data, isFetching: false })
            //console.warn(objData.data.project_detail)

        } catch (err) {
            console.log(err)
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
                                    <Text style={{paddingLeft:10}}> Budget : null</Text>
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
                                    <Text><Icon name="alarm" style={{fontSize:20,color:'#ff4c52'}}/> End Date: {' '}{this.getDate(project.end_date)}</Text>
                                </CardItem>
                                <View style={{alignItems: 'center',justifyContent:'center'}} footer>
                                    {
                                        this.state.isNew ?
                                        (
                                            <Button rounded danger block onPress={ () => {this.props.navigation.navigate('Bid',{id:project.id})}}>
                                                <View style={{paddingRight:50,paddingLeft:50}}>
                                                    <Text style={styles.bidTextStyle}> Place Your Bid</Text>
                                                </View>
                                            </Button>
                                        )
                                        :
                                        (
                                            <Button  success block>
                                                <View style={{paddingRight:50,paddingLeft:50}}>
                                                    <Text style={styles.bidTextStyle}>Bid Already Placed</Text>
                                                </View>
                                            </Button>
                                        )
                                    }
                                </View>
                                
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
    },
}

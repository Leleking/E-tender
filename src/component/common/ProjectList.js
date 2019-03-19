import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {List,ListItem,H3} from 'native-base'
class ProjectList extends Component {
    constructor(props){
        super(props)
        console.warn(props)
    }
  render() {
      const {projects,navigation} = this.props
    return (
        <View style={{flex:1}}>
            <Text>This is workign</Text>
            <List dataArray={projects}
                    renderRow={(project) =>
                        <ListItem button onPress={()=>{navigation.navigate('ProjectDetail',{id:project.id})}}>
                            <View style={styles.CardItemStyle}>
                                <View style={{width:300}}>
                                    <H3>{project.name}</H3>
                                    <Text style={{paddingTop:5,color:'#8E9C8F'}}>{project.budget} {project.currency} , </Text>
                                </View>
                            
                            </View>  
                        </ListItem>     
                            }>
            </List>
        </View>
    )
  }
}
const styles = {
    container:{
        flex:1,
        paddingTop:20,
      },
      CardItemStyle:{
        //borderBottomWidth:0.5,
        //borderBottomColor: 'black',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 10,
        paddingBottom: 10,
      }
}
export {ProjectList}
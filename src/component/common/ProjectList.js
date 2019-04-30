import React, { Component } from 'react'
import { Text, View,Dimensions} from 'react-native'
import {List,ListItem,H3} from 'native-base'
class ProjectList extends Component {
    constructor(props){
        super(props)
        
    }
    getInitials(string) {
        var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
        
        return initials;
      }
      getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
          }
          return "#404154";
      }
      
  render() {
    const screenWidth = Dimensions.get('window').width
      const {projects,navigation} = this.props
    return (
        <View style={{flex:1}}>
            <List dataArray={projects}
                    renderRow={(project) =>
                        <ListItem button onPress={()=>{navigation.navigate('ProjectDetail',{id:project.id})}}>
                            <View style={styles.CardItemStyle}>
                                <View style={{width: 50, height: 40,}}>
                                    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:this.getRandomColor(),borderRadius:50}}>
                                    <Text style={{color:'white'}}>{this.getInitials(project.name)}</Text>
                                    </View>
                                </View>
                                <View style={{width:  screenWidth -40, height: 50,marginLeft:10}}>
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
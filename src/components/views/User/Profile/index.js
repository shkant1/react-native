import React,{Component} from 'react';
import {StyleSheet,Text,View,ScrollView,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Navigation} from 'react-native-navigation';
import {navigatorDrawer} from '../../../utils/misc';


class Profile extends Component{
    
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent((event)=>{
            navigatorDrawer(event,this)

        })
    }
    
    render(){
        return(
         
            <View style={{
               flex:1,
               alignItems:'center',
               justifyContent:'center'

           }}>
              
               <Text>
                   You need to log in or register to DemoProject
               </Text>
              

           </View>
        )
    }
}

export default Profile;
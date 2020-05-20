import React,{Component} from 'react';
import {StyleSheet,Text,View,Button} from 'react-native';

class HomeComponent extends Component{

    render(){
        return(
            <View>
                <Text>This is Home</Text>
                <Button
                title="go to profile"
                onPress={()=>{
                    this.props.navigator.push({
                        screen:"DemoProject.ProfileScreen",
                        title:"Profile"
                    })

                }}>
                </Button>
            </View>
        )
    }

}
export default HomeComponent;
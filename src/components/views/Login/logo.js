import React,{Component} from 'react';
import {StyleSheet,Text,View,Animated,Easing} from 'react-native';


class Logo extends Component{
 state ={
     sellAnim: new Animated.Value(0),
     itAnim: new Animated.Value(0)
 }


componentWillMount(){
    Animated.sequence([
        Animated.timing(this.state.sellAnim,{
            toValue:1,
            duration:1000,
            easing:Easing.easeOutCubic
        }),

        Animated.timing(this.state.sellAnim,{
            toValue:1,
            duration:500,
            easing:Easing.easeOutCubic
        }),
    ]).start(()=>{
         this.props.showLogin()
       
    })
}

    render(){
        
        return(
            <View>
                <View style={
                    this.props.orientation=="portrait"
                    ? styles.logoStylesPortrait
                    :styles.LogoStylesLandscape
                }>
               <Animated.View style={{
                   opacity: this.state.sellAmim,
                   top:this.state.sellAnim.interpolate({
                       inputRange:[0,1],
                       outputRange:[100,0]

                   })
                   
               }}>
                   <Text style={styles.sports}>Sports </Text>
               </Animated.View>
               <Animated.View style={{
                   opacity: this.state.sellAmim}}>
                    <Text style={styles.club}>Club </Text>
               </Animated.View>
                </View>
            </View>
            
        )
    }
}

 const styles = StyleSheet.create({
    logoStylesPortrait:{
        flex:1,
        marginTop:50,  
        flexDirection: 'row',
        maxHeight:100
        
    },
    LogoStylesLandscape:{
        flex:1,
        marginTop:30,  
        flexDirection: 'row',
        maxHeight:50
        
    }, 
    sports:{
        fontSize:40,
        fontFamily: 'RobotoCondensed-Regular.ttf',
        color :'#555555'
    },
    club:{fontSize:40,
        fontFamily: 'RobotoCondensed-Regular.ttf',
        color:'#00ADA9'
    }
        
    
});
  
export default Logo;
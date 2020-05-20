import{
    Dimensions,
    Platform
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
export const FIREBASEURL =`https://demoproject-6c38e.firebaseio.com`;
export const APIKEY ='AIzaSyCSZcZqJ0oawfZWp26XgtCpBMoYLLBYlXg';
export const SIGNUP =`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`
export const SIGNIN =`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`
export const REFRESH =`https://securetoken.googleapis.com/v1/token?key=${APIKEY}`


import { placeholder } from '@babel/types';

export const getOrientation =(value)=>{
    return Dimensions.get("window").height > value ? "portrait" :"landscape"
}

export const setOrientationListener=(cb)=>{
     return Dimensions.addEventListener("change",cb)
}

/* const removeOrientationListener=()=>{
    return Dimensions.removeEventListerer("change")
} */

export const getPlatform =()=> {
    if(Platform.OS ==='ios'){  
        return "ios"

    }else{
        return"android"
    }
     
}

export const navigatorDrawer=(event,$this)=>{
  if (event.type==="NavBarButtonPress" && event.id ==="DrawerButton"){
    $this.props.navigator.toggleDrawer({
        side:'left',
        animated: true
    }) 

}
//alert('test application...');
} 
export const navigatorDeepLink =(event,$this)=>{
    if(event.type==='DeepLink'){
        $this.props.navigator.toggleDrawer({
            side:'left',
            animated: true
        });
        if(event.payload.typeLink==='tab'){
            $this.props.navigator.switchToTab({
                tabIndex:event.payload.indexLink
            });

        }else{
            $this.props.navigator.showModal({
                screen:event.link,
                animationType:'slide-horizontal',
                navigatorStyle:{
                    navBarBackgroundColor:'#00ADA9',
                    screenBackgroundColor:'#ffffff'
                },
                backButtonHidden:false
            })
        }
    }

}


export const getTokens =(cb) =>{
    AsyncStorage.multiGet([
        '@DemoProject@token',
        '@DemoProject@refreshToken',
        '@DemoProject@expireToken',
        '@DemoProject@uid',

    ]).then(value=>{
        cb(value)
    })
}

export const setTokens =(values,cb)=>{
const dateNow = new Date();
const expiration = dateNow.getTime()+ (36100 * 1000);
AsyncStorage.multiSet([
    ['@DemoProject@token',values.token],
    ['@DemoProject@refreshToken',values.refToken],
    ['@DemoProject@expireToken',expiration.toString()],
    ['@DemoProject@uid',values.uid],
]).then(Response =>{
    cb();
})

}

export const gridTwoColumns =(list)=> {
    let newArticles=[];
    let articles =list;
    let count =1;
    let vessel ={};
    if (articles){
        articles.forEach(element => {
            if(count==1){
                vessel["blockOne"]=element;
                count ++;
            }else{
                vessel["blockTwo"]=element;
                newArticles.push(vessel);
                count =1;
                vessel={};

            }
        });
    }
    return newArticles;
}
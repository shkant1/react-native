import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
//import FalseIcon from '../../assets/images/icons';
//import FalseIcon from '../../../assets/images/icons.png';
//import { white } from 'ansi-colors';

const navStyle={
    navBarTextFontSize:20,
    navBarTextColor:'#ffffff',
    navBarTextFontFamily:'RobotoCondensed-Bold',
    navBarTitleTextCentered :true,
    navBarBackgroundColor:'#00ADA9'
}
 
 const navLeftButton =(sources) =>{
     return{
         title:'Drawer',
         id:'DrawerButton',
         icon:sources[0],
         disableIconTint:true,
         buttonColor:'white'
     }
 }
 const LoadTabs =(allow) =>{

    Promise.all([
        Icon.getImageSource('bars',20,'white'),
        Icon.getImageSource('edit',20,'white'),
        Icon.getImageSource('home',20,'white'),
        Icon.getImageSource('user-circle',20,'white')
    ]).then(sources =>{

        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen:"DemoProject.Home",
                    label:"Home",
                    title:"Home",
                    icon:sources[2],
                    navigatorStyle:navStyle,
                    navigatorButtons:{
                        leftButtons:[navLeftButton(sources)]
                    }
                },
                {
                    screen: allow ? "DemoProject.AddPost" : "DemoProject.NotAllow",
                    label:"Post",
                    title:"Post",
                    icon:sources[1],
                    navigatorStyle:navStyle,
                    navigatorButtons:{
                        leftButtons:[navLeftButton(sources)]
                    }
                },
                {
                    screen:"DemoProject.Profile",
                    label:"Profile",
                    title:"Profile",
                    icon:sources[3],
                    navigatorStyle:navStyle,
                    navigatorButtons:{
                        leftButtons:[navLeftButton(sources)]
                    }
                },
            ],
            tabsStyle:{
                tabBarButtonColor:'grey',
                tabBarSelectedButtonColor:'#FFC636',
                tabBarTextFontFamily:'RobotoCondensed-Bold',
                tabBarBackgroundColor:'white',
                tabBarTranslucent:false

            }//only for IOS
            ,
            appStyle:{
                tabBarButtonColor:'grey',
                tabBarSelectedButtonColor:'#FFC636',
                tabBarTextFontFamily:'RobotoCondensed-Bold',
                tabBarBackgroundColor:'white',
                navBarButtonColor:'#ffffff',
                keepStyleAcrossPush: true


            }//only for android
             ,
            drawer:{
                left:{
                    screen:"DemoProject.Sidedrawer",
                    fixedWidth:500
                }
            } 
        })

    })  
} 

export default LoadTabs;
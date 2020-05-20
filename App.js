import {Navigation} from 'react-native-navigation';

import Login from './src/components/views/Login';
import Home from './src/components/views/Home';
import AddPost from './src/components/views/Admin/AddPost';
import Profile from './src/components/views/User/Profile';
import configureStore from './src/components/Store/config';
import{ Provider } from 'react-redux'; 
import Sidedrawer from './src/components/views/Sidedrawer';
import  UserPosts from './src/components/views/Admin/UserPosts';
import Article from './src/components/views/Article';
import NotAllow from './src/components/views/Admin/AddPost/notallow';
const store =configureStore();

Navigation.registerComponent(
  "DemoProject.Login",
  ()=> Login,
  store,
  Provider
);

Navigation.registerComponent(
  "DemoProject.Home",
  ()=> Home,
  store,
  Provider
);
Navigation.registerComponent(
  "DemoProject.AddPost",
  ()=> AddPost,
  store,
  Provider/*  */
);

Navigation.registerComponent(
  "DemoProject.Profile",
  ()=> Profile,
  store,
  Provider/*  */
);

Navigation.registerComponent(
  "DemoProject.Sidedrawer",
  ()=> Sidedrawer,
  store,
  Provider/*  */
);
Navigation.registerComponent(
  "DemoProject.UserPosts",
  ()=> UserPosts,
  store,
  Provider/*  */
);
Navigation.registerComponent(
  "DemoProject.Article",
  ()=> Article,
  store,
  Provider/*  */
);
Navigation.registerComponent(
  "DemoProject.NotAllow",
  ()=> NotAllow,
  store,
  Provider/*  */
);

/* 
 Navigation.registerComponent("DemoProject.Login",()=>Login);
Navigation.registerComponent("DemoProject.Home",()=>Home);
Navigation.registerComponent("DemoProject.AddPost",()=>AddPost);  */

export default()=> Navigation.startSingleScreenApp({
  screen:{
    screen:"DemoProject.Login",
    title:"Login",
    navigatorStyle:{
      navBarHidden:true
    }

  }
})










/* import HomeScreen from './scr/Home';
import ProfileScreen from './scr/Profile';
import PostsScreen from './scr/Posts';





Navigation.registerComponent("DemoProject.HomeScreen",()=>HomeScreen);
Navigation.registerComponent("DemoProject.ProfileScreen",()=>ProfileScreen);
Navigation.registerComponent("DemoProject.PostsScreen",()=>PostsScreen);
  
 Navigation.startSingleScreenApp( {
    screen:{
      screen:"DemoProject.HomeScreen", 
      title:"Home"
    }
  }
)   

  Navigation.startTabBasedApp({
  tabs:[
    {
      screen: "DemoProject.HomeScreen",
      label:"Home",
      title:"Home",
      icons:homeIcon
    }
  ]
})   */
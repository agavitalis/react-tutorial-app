import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator,createDrawerNavigator,createSwitchNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

//import my components here 
import Sidebar from './src/components/partials/Sidebar'
import SignInScreen from './src/components/auth/SignIn'
import HomeScreen from './src/components/home/Home'
import TopicsStack from './src/components/topics/TopicsStack'
import ES6Stack from './src/components/content/es6/ES6Stack'
import ReactStack from './src/components/content/react/ReactStack'


class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={Styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

//create a style sheet
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  }
});

//create the application stack
const AppStack = createStackNavigator(
{ 
  Home: HomeScreen,
  TopicsStack :{
    screen: TopicsStack,
    navigationOptions:{
      header:null
    }
  },
  ES6Stack:{
    screen: ES6Stack,
    navigationOptions:{
      header:null
    }
  },
  ReactStack:{
    screen: ReactStack,
    navigationOptions:{
      header:null
    }
  }

});

//create the authentication stack
const AuthStack = createStackNavigator(
{ 
  SignIn: SignInScreen 
});

//load the stackNavigators to a drawer
const MyDrawerNavigator = createDrawerNavigator({
 AppStack: AppStack,
},
{
  contentComponent:Sidebar
});

//use a switch navigator, to disable back ability
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: MyDrawerNavigator,   
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

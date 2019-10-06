import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Styles from './Content.style';
import { NavigationActions } from 'react-navigation';

//screns
import IntroductionScreen from './Introduction'
import BrowserSupportScreen from './BrowserSupport'
import JavaScriptLetScreen from './JavaScriptLet'
import JavaScriptConstScreen from './JavaScriptConst'
import ExponentiationScreen from './Exponentiation'

const defaultNavigationOptions = ({ navigation }) => {
        
    return {
      headerLeft:
        <TouchableOpacity  style={Styles.back_button} onPress={() => navigation.navigate(NavigationActions.navigate({routeName:'TopicsStack', action:NavigationActions.navigate({routeName:'ES6Topics'})}))}>
            <FontAwesomeIcon  icon={faArrowLeft} size={20} />
        </TouchableOpacity>
    }
};

//create the topics stack
const ES6Stack = createStackNavigator(
{  
    
    Introduction: IntroductionScreen,
    BrowserSupport: BrowserSupportScreen,
    JavaScriptLet:JavaScriptLetScreen,
    JavaScriptConst:JavaScriptConstScreen,
    Exponentiation:ExponentiationScreen,

},
{
    defaultNavigationOptions:  defaultNavigationOptions
}


);

export default ES6Stack;
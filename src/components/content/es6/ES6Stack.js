import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import IntroductionScreen from './Introduction'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Styles from './Content.style';


const defaultNavigationOptions = ({ navigation }) => {
        
    return {
      headerLeft:
        <TouchableOpacity  style={Styles.back_button} onPress={() => navigation.navigate('Home')}>
            <FontAwesomeIcon  icon={faArrowLeft} size={20} />
        </TouchableOpacity>
    }
};

//create the topics stack
const ES6Stack = createStackNavigator(
{  
    
    Introduction: IntroductionScreen,

},
{
    defaultNavigationOptions:  defaultNavigationOptions
}


);

export default ES6Stack;
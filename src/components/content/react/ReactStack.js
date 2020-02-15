import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import Styles from './Content.style';
import { NavigationActions } from 'react-navigation';

//screns
import ContentOverviewScreen from './ContentOverview'


const defaultNavigationOptions = ({ navigation }) => {
        
    return {
      headerLeft:
        <TouchableOpacity  style={Styles.back_button} onPress={() => navigation.navigate(NavigationActions.navigate({routeName:'TopicsStack', action:NavigationActions.navigate({routeName:'ReactTopics'})}))}>
            <FontAwesomeIcon  icon={faArrowLeft} size={20} />
        </TouchableOpacity>
    }
};

//create the topics stack
const ReactStack = createStackNavigator(
{  
    
    ContentOverview: ContentOverviewScreen,
   

},
{
    defaultNavigationOptions:  defaultNavigationOptions
}


);

export default ReactStack;
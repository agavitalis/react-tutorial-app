import { createStackNavigator} from 'react-navigation';
import ReactTopicScreen from './ReactTopics'
import ES6TopicScreen from './ES6Topics'
import JSXTopicScreen from './JSXTopics'


//create the topics stack
const TopicsStack = createStackNavigator(
{ 
    
    ReactTopics: ReactTopicScreen,
    ES6Topics: ES6TopicScreen,
    JSXTopics : JSXTopicScreen,
    
}

);

export default TopicsStack;
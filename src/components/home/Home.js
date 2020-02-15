import React from 'react';
import { Button, Image, ScrollView,View, Text,TouchableOpacity } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import LinearGradient from 'react-native-linear-gradient'
import Styles from './Home.style';
import { NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {
    //#E62B54
    static navigationOptions = ({ navigation }) => {
        
        return {
          headerTitle: 'HOME',
          
          headerLeft: 
            <TouchableOpacity  style={Styles.menu_button} onPress={() => navigation.openDrawer()}>
                <FontAwesomeIcon  icon={faBars} size={20} style={Styles.menu_button_text} />
            </TouchableOpacity>
          ,
          headerRight: 
          <TouchableOpacity  style={Styles.menu_pro}>
                <Button title="G0 PRO!" onPress={() => alert('This feature is comming soon!')}/>
          </TouchableOpacity>
         ,
          headerTitleStyle:{
              fontSize: 21,
              marginTop:2
          } 
        };
    };
      

    render() {
        return (
            <ScrollView style={Styles.container}>

                <LinearGradient colors={['#8137F0', '#192f6a']} style={Styles.category}>
                    <TouchableOpacity style={Styles.category_item} onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'TopicsStack', action:NavigationActions.navigate({routeName:'ReactTopics'})}))}>
                        <Image
                            source={require('../../images/react.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={Styles.category_item_text}>ReactJS</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={['#8137F0', '#192f6a']} style={Styles.category}>
                    <TouchableOpacity style={Styles.category_item} onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'TopicsStack', action:NavigationActions.navigate({routeName:'JSXTopics'})}))}>
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={Styles.category_item_text}>JSX</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <LinearGradient colors={['#8137F0', '#192f6a']} style={Styles.category}>
                    <TouchableOpacity style={Styles.category_item} onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'TopicsStack', action:NavigationActions.navigate({routeName:'ES6Topics'})}))}>
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={Styles.category_item_text}>ES6</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient colors={['#8137F0', '#192f6a']} style={Styles.category}>
                    <TouchableOpacity style={Styles.category_item} onPress={() => alert('This feature is comming soon!')}>
                        <Image
                            source={require('../../images/js.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={Styles.category_item_text}>Projects</Text>
                    </TouchableOpacity>
                </LinearGradient>

            </ScrollView>
        );
    }

   

    _openDrawer = () => {
        this.props.navigation.openDrawer();
    };

    _signOutAsync = async () => {
        this.props.navigation.navigate('Auth');
    };
}

export default HomeScreen;
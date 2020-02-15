import React from 'react';
import {View,ScrollView,Image,TouchableOpacity, Text } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Styles from './Topics.style'
import { NavigationActions } from 'react-navigation';

class ES6TopicScreen extends React.Component {
    constructor() {
        super();
        this.state = {};
        this._signOutAsync.bind(this);
    }
    static navigationOptions = ({ navigation }) => {
        
        return {
          headerTitle: 'ES6 Outline',
          headerLeft:
            <TouchableOpacity  style={Styles.back_button} onPress={() =>navigation.navigate('Home')}>
                <FontAwesomeIcon  icon={faArrowLeft} size={20} />
            </TouchableOpacity>
        }
    };

    render() {
        return (

            <ScrollView style={Styles.container}>
                
                <View style={Styles.header}>
                    <Image
                        source={require('../../images/es6.png')}
                        style={{ width: 80, height: 80 }}
                    />
                    <Text style={Styles.header_text}>Learn ES6</Text>
                </View>
                <View style={Styles.body}>
                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]}  onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'ES6Stack', action:NavigationActions.navigate({routeName:'Introduction'})}))}>
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>What is ECMAScript 6?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic}  onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'ES6Stack', action:NavigationActions.navigate({routeName:'BrowserSupport'})}))}>
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Browser Support for ES6 (ECMAScript 2015)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'ES6Stack', action:NavigationActions.navigate({routeName:'JavaScriptLet'})}))}>
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>JavaScript let</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'ES6Stack', action:NavigationActions.navigate({routeName:'JavaScriptConst'})}))}>
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>JavaScript const</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} onPress={() => this.props.navigation.navigate(NavigationActions.navigate({routeName:'ES6Stack', action:NavigationActions.navigate({routeName:'Exponentiation'})}))}>
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Exponentiation Operator</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Default Parameter Values</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Array.find()</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Array.findIndex()</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>New Number Properties</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>New Number Methods</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>New Global Methods</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Arrow Functions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/es6.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Quiz</Text>
                    </TouchableOpacity>

                </View>
                
            </ScrollView>

        );
    }

    _signOutAsync = async () => {
        this.props.navigation.navigate('Auth');
    };
}

export default ES6TopicScreen;
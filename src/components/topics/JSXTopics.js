import React from 'react';
import {View,ScrollView, AsyncStorage,Image,TouchableOpacity, Text } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Styles from './Topics.style'

class JSXTopicScreen extends React.Component {
    constructor() {
        super();
        this.state = { };

        this._signOutAsync.bind(this);
    }
    static navigationOptions = ({ navigation }) => {
        
        return {
          headerTitle: 'JSX Outline',
          headerLeft:
            <TouchableOpacity  style={Styles.back_button} onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon  icon={faArrowLeft} size={20} />
            </TouchableOpacity>
        }
    };

    render() {
        return (

            <ScrollView style={Styles.container}>
                <View style={Styles.header}>
                    <Image
                        source={require('../../images/jsx.png')}
                        style={{ width: 80, height: 80 }}
                    />
                    <Text style={Styles.header_text}>Learn JSX</Text>
                </View>
                <View style={Styles.body}>
                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} onPress ={()=>this.props.navigation.navigate('OverView')}>
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Overview</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} onPress={() => this.props.navigation.navigate('Topics')}>
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Environment Setup</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Jsx</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Componenets</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Props</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>State</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Validation</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Componenet API</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Component Life Cycle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Form</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Events</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Refs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Router</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Flux Concept</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Using Flux</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={Styles.topic} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Animation</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>High Order Componenet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[Styles.topic]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Best Pratices</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  style={[Styles.topic,Styles.topic_color]} >
                        <Image
                            source={require('../../images/jsx.png')}
                            style={{ width: 20, height: 20 }}
                        />
                        <Text style={Styles.topic_text}>Quiz</Text>
                    </TouchableOpacity>

                </View>
                
            </ScrollView>

        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

export default JSXTopicScreen;
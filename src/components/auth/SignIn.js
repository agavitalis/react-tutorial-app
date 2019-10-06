import React from 'react'
import {Image, View, Text,ImageBackground, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient'
import Styles from './SignIn.style'

class SignInScreen extends React.Component {

  //set the header options
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <LinearGradient colors={['#8137F0', '#E62B54', '#192f6a']} style={Styles.linearGradient}>
        <ImageBackground opacity={0.5} source={require('../../images/banner.jpg')} style={{ width: '100%', height: '100%' }}>
          <View style={Styles.container}>
            <View  style={Styles.logo}>
              <Image
                source={require('../../images/logo.png')}
                style={{ width: 100, height: 100 }}
                
              />
              <Text style={Styles.logo_text}>VivvaaLearn</Text>
              <Text style={Styles.logo_text_small}>Amazing tutorials to get you started..</Text>
            </View>
            <TouchableOpacity  style={Styles.button} onPress={this._signInAsync}>         
                <Text style={Styles.button_text}>GET STARTED..</Text>           
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </LinearGradient>
    );
  }
 
  _signInAsync = async () => {

    //login logic here
    try {
      await AsyncStorage.setItem('@userToken', 'Username');
    } catch(e) {
      // read error
    }
      this.props.navigation.navigate('App');
    
    
  };
}


export default SignInScreen;
import React from 'react';
import {Image, Text, View, TouchableOpacity} from  'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faHome, faShareAltSquare, faSignOutAlt, faAngleDoubleRight, faClipboardCheck, faUserShield, faNotEqual, faUserSecret} from '@fortawesome/free-solid-svg-icons'
import Styles from './Sidebar.style'

class Sidebar extends React.Component {
    constructor(){
        super()
    }

    render() {
      return (
        <View style={Styles.container}>
          <View style={Styles.header}>
              <Image
                  source={require('../../images/logo.png')}
                  style={{ width: 70, height: 70 }}
              />
              <Text style={Styles.sidebar_text}>VivvaaLearn</Text>
          </View>
          <View style={Styles.body}>
            <TouchableOpacity style={Styles.sidebar_menu}  onPress={() =>this.props.navigation.navigate('Home')}>
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faHome} />
              </View>
              <Text style={Styles.sidebar_text_menu}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={Styles.sidebar_menu} onPress={() => alert('This feature is comming soon!')}>
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faUserSecret} style={Styles.sidebar_text_icon} />
              </View>
              <Text style={Styles.sidebar_text_menu} >Privacy</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={Styles.sidebar_menu} onPress={() => alert('This feature is comming soon!')}>
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faNotEqual}/>
              </View>
              <Text style={Styles.sidebar_text_menu}>Pro Vs Free</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={Styles.sidebar_menu} onPress={() => alert('This feature is comming soon!')}> 
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faUserShield}/>
              </View>
              <Text style={Styles.sidebar_text_menu}>Remove Ads- Go Pro</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={Styles.sidebar_menu} onPress={() => alert('This feature is comming soon!')}>
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faClipboardCheck}/>
              </View> 
              <Text style={Styles.sidebar_text_menu}>Rate app</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={Styles.sidebar_menu} onPress={() => alert('This feature is comming soon!')}>
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faAngleDoubleRight}/>
              </View>
              <Text style={Styles.sidebar_text_menu}>More apps</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={Styles.sidebar_menu} onPress={() => alert('This feature is comming soon!')}>
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faShareAltSquare}/>
              </View> 
              <Text style={Styles.sidebar_text_menu}>Share app</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={Styles.sidebar_menu} onPress={() =>this._signOutAsync()}>
              <View style={Styles.sidebar_text_icon}>
                <FontAwesomeIcon icon={faSignOutAlt}/>
              </View>
              <Text style={Styles.sidebar_text_menu}>Log Out</Text>
            </TouchableOpacity>
              

          </View>
        </View>
      );
    }

    _signOutAsync = async () => {

      try {
        //
      } catch(e) {
        // clear error
      }
      
      this.props.navigation.navigate('Auth');
   };
}


export default Sidebar
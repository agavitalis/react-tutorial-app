import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#000',
  },
  body:{
      flex:3,
      alignItems:'stretch',
      justifyContent: 'center',
      backgroundColor: '#fff'
  },
  sidebar_menu:{
    flex: 1,
    flexDirection:'row',
    padding: 15,
    alignItems:'stretch',
  },
  sidebar_text:{
      textAlign: 'center',
      fontSize: 25,
      color:'#fff',
      fontWeight:'bold'
  },
  sidebar_text_icon:{
    backgroundColor:'#f7f7f7',
    padding: 10,
    borderRadius: 20,
    justifyContent:'center'
  },
  sidebar_text_menu:{
    fontSize: 16,
    padding:5,
    marginLeft: 25
  }
});

export default Styles;

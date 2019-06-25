import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  menu_button:{
    marginLeft:20,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  menu_button_text: {
    fontWeight:'bold',
    color:'#262F38'
  },
  menu_pro:{
    marginRight:10,
  },
  category:{
    flex: 1,
    elevation:2,
    marginTop:15,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width:'100%',
    borderRadius:3
  },
  category_item:{
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  category_item_text:{
    marginLeft:5,
    fontSize:35,
    fontWeight:'bold',
    color:'#fff'
  }
});

export default Styles;

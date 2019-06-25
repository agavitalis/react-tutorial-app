import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 1,
    alignItems:'center',
    backgroundColor: '#000',
    padding:10
  },
  header_text:{
    color:"#fff",
    fontSize:25,
    fontWeight:'bold',
    padding:10
  },
  back_button:{
    marginLeft:20,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  body:{
    flex: 3,
  },
  topic:{
    flexDirection:'row',
    alignItems:'stretch',
    padding:15,
    
  },
  topic_color:{
    backgroundColor:'#f7f7f7',
  },
  topic_text:{
    fontSize: 15,
    fontWeight:'bold',
    marginLeft:5
  }
});

export default Styles;

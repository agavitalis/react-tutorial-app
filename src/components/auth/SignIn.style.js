import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 50
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  button_text: {
    color: '#fff',
    fontWeight: 'bold'
  },
  logo: {
    marginBottom: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  logo_text_small:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  }

});

export default Styles;

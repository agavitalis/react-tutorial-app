import { StyleSheet} from 'react-native'

const Styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 15
    },
    back_button:{
        marginLeft:20,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    topic:{
        paddingTop: 5,
        paddingBottom: 10
    },
    topic_text:{
        fontSize:25,
        color:'#23232b',
        fontWeight:'700'
    },
    horizontal_line:{
        width:'100%',
        borderBottomColor:'#23232b',
        borderBottomWidth: 1,
    },
    heading:{
        paddingTop:5,
        paddingBottom:5
    },
    heading_text:{
        fontSize:20,
        color:'#23232b',
        fontWeight:'500'
    },
    content_text:{
        color:'#23232b',
        fontSize:14
    }


})

export default Styles

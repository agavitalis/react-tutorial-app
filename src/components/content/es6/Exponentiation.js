import React from 'react';
import { ScrollView, View, Text,FlatList } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
import Styles from './Content.style';

const code1 =`
var x = 5;
var z = x ** 2;    // result is 25
`

const code2 =`
var x = 5;
var z = Math.pow(x,2);  

// result is 25
`

class ExponentiationScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { code1,code2 };
    }

    static navigationOptions = {
        title: 'Exponentiation Operator',
    };

    

    render() {
        return (
            <ScrollView style={Styles.container}>
                <View style={Styles.topic}>
                    <Text style={Styles.topic_text} h2>Exponentiation Operator</Text>
                    <View style={Styles.horizontal_line}></View>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                    The exponentiation operator (**) raises the first operand to the power of the second operand.
                    {"\n"}{"\n"}Example:

                    </Text>
                </View>

                
                <SyntaxHighlighter
                    style={tomorrow}
                    language='javascript'
                    fontSize={14}
                    customStyle={{padding:3}}
                    highlighter="prism"
                    >
                     {this.state.code1}
                </SyntaxHighlighter>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                    x ** y produces the same result as Math.pow(x,y):
                    {"\n"}{"\n"}Example:

                    </Text>
                </View>
                
                <SyntaxHighlighter
                    style={tomorrow}
                    language='javascript'
                    fontSize={14}
                    customStyle={{padding:3}}
                    highlighter="prism"
                    >
                     {this.state.code2}
                </SyntaxHighlighter>


            </ScrollView>
        )
    }
}


export default ExponentiationScreen
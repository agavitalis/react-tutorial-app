import React from 'react';
import { ScrollView, View, Text,FlatList } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
import Styles from './Content.style';

const code =`
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
`

class JavaScriptLetScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { code };
    }

    static navigationOptions = {
        title: 'JavaScript const',
    };

    

    render() {
        return (
            <ScrollView style={Styles.container}>
                <View style={Styles.topic}>
                    <Text style={Styles.topic_text} h2>JavaScript const</Text>
                    <View style={Styles.horizontal_line}></View>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                    The 'const' statement allows you to declare a constant (a JavaScript variable with a constant value).
                    {"\n"}Constants are similar to let variables, except that the value cannot be changed
                    {"\n"}{"\n"}Example:

                    </Text>
                </View>

                
                <SyntaxHighlighter
                    style={tomorrow}
                    language='javascript'
                    fontSize={14}
                    customStyle={{padding: 5}}
                    highlighter="prism"
                    >
                     {this.state.code}
                </SyntaxHighlighter>
                


            </ScrollView>
        )
    }
}


export default JavaScriptLetScreen
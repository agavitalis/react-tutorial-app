import React from 'react';
import { ScrollView, View, Text,FlatList } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
import Styles from './Content.style';

const code = '(num) => num + 1';

class BrowserSupportScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { code };
    }

    static navigationOptions = {
        title: 'Browser Support for ES6 (ECMAScript 2015)',
    };

    renderRow(data){
        return(
            <Text>{`\u2022 ${data}`}</Text>
        )
    }
    

    render() {
        return (
            <ScrollView style={Styles.container}>
                <View style={Styles.topic}>
                    <Text style={Styles.topic_text} h2>Browser Support for ES6 (ECMAScript 2015)</Text>
                    <View style={Styles.horizontal_line}></View>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                        Safari 10 and Edge 14 were the first browsers to fully support ES6.
                        {"\n"}Currently the following major browsers supports ES6 Syntax.


                        {"\n \n"}<Text style={{fontWeight:'bold'}}>Chrome 58</Text>
                        {"\n"}Support started on January 2017	

                        {"\n \n"}<Text style={{fontWeight:'bold'}}>Edge 14</Text>
                        {"\n"}Support started on August 2016	

                        {"\n \n"}<Text style={{fontWeight:'bold'}}>Firefox 54</Text>
                        {"\n"}Support started on March 2017	

                        {"\n \n"}<Text style={{fontWeight:'bold'}}>Safari 10 </Text>
                        {"\n"}Support started on July 2016	

                        {"\n \n"}<Text style={{fontWeight:'bold'}}>Opera 55 </Text>
                        {"\n"}Support started on August 2018
                       
                    </Text>
                </View>

                
            
               
                            

                
                {/* <SyntaxHighlighter
                    style={tomorrow}
                    language='javascript'
                    fontSize={14}
                    customStyle={{padding: 5}}
                    highlighter="prism"
                    >
                     {this.state.code}
                </SyntaxHighlighter> */}
                


            </ScrollView>
        )
    }
}


export default BrowserSupportScreen
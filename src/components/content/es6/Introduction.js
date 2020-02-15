import React from 'react';
import { ScrollView, View, Text,FlatList } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
import Styles from './Content.style';

const code = '(num) => num + 1';

class IntroductionScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = { code };
    }

    static navigationOptions = {
        title: 'What is ECMAScript 6?',
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
                    <Text style={Styles.topic_text} h2>What is ECMAScript 6?</Text>
                    <View style={Styles.horizontal_line}></View>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                        ECMAScript 6 is also known as ES6 and ECMAScript 2015.
                        {"\n \n"}Some people call it JavaScript 6.
                        {"\n \n"}In this tutorial, we will introduce some of the new features in ES6.
                    </Text>
                </View>

                <View style={Styles.heading}>
                    <Text style={Styles.heading_text}>Some of the ES6 features to be explored</Text>
                </View>

                <View style={Styles.content}>
                    <FlatList style={Styles.content_text}
                        data={[
                            {key: 'JavaScript let'},
                            {key: 'JavaScript const'},
                            {key: 'Default parameter values'},
                            {key: 'Array.find()'},
                            {key: 'Array.findIndex()'},
                            {key: 'Arrow Functions'},
                            ]}
                            renderItem={({item})=><Text>{item.key}</Text>}
                            leftAvatar={'.'}
                            renderRow={this.renderRow}
                            
                    />
                    
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


export default IntroductionScreen
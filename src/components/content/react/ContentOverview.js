import React from 'react';
import { ScrollView, View, Text } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
import Styles from './Content.style';

const code = '(num) => num + 1';

class Overview extends React.Component {

    constructor() {
        super()
        this.state = { code };
    }

    static navigationOptions = {
        title: 'React Overview',
    };
    

    render() {
        return (
            <ScrollView style={Styles.container}>
                <View style={Styles.topic}>
                    <Text style={Styles.topic_text} h2>React JS Overview  </Text>
                    <View style={Styles.horizontal_line}></View>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                        ReactJS is a JavaScript library developed by Facebook. It is used for building reusable UI components. React JS official documentation defined it as follows:
                        {"\n \n"}React is a library for building composable user interfaces, it supports and encourages the creation of reusable UI components, which presents data that changes over time by using declarative syntax.
                        {'\n \n'}React is used by most developers as the “V” part of the MVC architecture. React abstracts away the DOM from you, offering a simpler programming model and off course better experience.
                        {'\n \n'}One of the selling points of React is that it can also render on the server using Node. It can power native apps using its framework called React Native. It implements one-way reactive data flow, which reduces the boilerplate making its comprehension easier than traditional data binding.
                        {'\n \n'}It uses a concept called Virtual Dom, that selectively renders subtrees of nodes upon state changes. It does the least amount of DOM manipulation possible in order to keep your components up to date.
                    </Text>
                </View>

                <View style={Styles.heading}>
                    <Text style={Styles.heading_text}>What is a Virtual Dom?</Text>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                    <Text style={{fontWeight:'bold'}}>Think </Text> of a Virtual DOM as an object modeled around a Person “A”. It has every relevant property this person could possibly have, and it mirrored the person current state. This is exactly what React does to the DOM.
                        {"\n \n"}Now think, about adding some properties and extra features to this Virtual DOM modeled against Person “A”. In the Land of React, when changes are made on the Virtual DOM two things takes place:
                        {"\n \n"}First, React runs a “diffing” algorithm, which identifies what was changed and Secondly, it reconciles and Updates the DOM with the changes on the Virtual DOM.
                        {"\n \n"}The way React works, rather than taking the Person “A” and rebuild from ground up, it would only change the cloths, face and arms. This implies that only that portion which needs be reconciled is updated.
                        {"\n \n"}Since React is using a “Fake” DOM called Virtual DOM and not the actual DOM, it also opens up a whole of new possibilities, thus we can render this Fake DOM on the server, and there comes server side React Views.

                    </Text>
                </View>

                <View style={Styles.heading}>
                    <Text style={Styles.heading_text}>React Features </Text>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                    <Text style={{fontWeight:'bold'}}>JSX:</Text> JSX is a JavaScript syntax extension. The use of JSX syntax in developing a React JS application is not compulsory but it is highly recommended.
                    {"\n \n"}<Text style={{fontWeight:'bold'}}>Components:</Text> React is all about components, so you need to think about your application as bits of components to be coupled together. Just like in web development where applications are split into header, footer and sidebars.
                    {"\n \n"}Breaking of applications into components helps in code organization and makes development and maintenance of large applications a lot easier.
                    {"\n \n"}<Text style={{fontWeight:'bold'}}>Unidirectional Data Flow and Flux:</Text> React implements one-way data flow which makes it easy in thinking about our application. It uses Flux to achieve this unidirectional flow of data.
                    {"\n \n"}<Text style={{fontWeight:'bold'}}>License:</Text> React is licensed under the Facebook Inc and its documentation is licensed under CC by 4.0.

                    </Text>
                </View>

                <View style={Styles.heading}>
                    <Text style={Styles.heading_text}>Why React </Text>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                    Applications built on are quite reactive, they are super-fast. This is because React uses virtual DOM which is a JavaScript object and in terms of performance is way faster than the regular DOM.
                    {"\n \n"}One of its unique selling points is that not only does it perform on thee client side, but it can also be rendered on the server side as they work together inter-operably.
                    {"\n \n"}Components and data patterns improve readability, which development and maintenance of large applications easier.

                    </Text>
                </View>

                <View style={Styles.heading}>
                    <Text style={Styles.heading_text}>Why Not React </Text>
                </View>

                <View style={Styles.content}>
                    <Text style={Styles.content_text}>
                    React covers only the view layer of our application, hence you still need to choose other technologies to get a complete tooling set for development.
                    {"\n \n"}It uses inline templating and JSX which may seem awkward to some developers.
                    {"\n \n"}
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


export default Overview
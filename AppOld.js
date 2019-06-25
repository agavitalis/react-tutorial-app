import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'React Tutorials',
    //headerTitle: <LogoTitle />,
    headerLeft: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Menu"
        color="#262F38"
      />
    ),
    headerRight: (
      <Button
        onPress={() => alert('This feature is comming soon!')}
        title="Menu"
        color="#262F38"
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  backgroundColor: '#262F38' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}


class IntroScreen extends React.Component {

  static navigationOptions = {
    title: 'Introduction',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Introduction Screen</Text>
        <Button
          title="Take me home... Pls"
          onPress={() => this.props.navigation.navigate('Home')}
        />
         <Button
          title="Take me introduction... Pls"
          onPress={() => this.props.navigation.navigate('Intro')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Details',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Introduction... again"
          onPress={() => this.props.navigation.push('Intro')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Intro: IntroScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#262F38',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

//for bottom navigation
const Home = createStackNavigator(
  {
    Feed: HomeScreen,
    Profile: HomeScreen,
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
);

const Tabs = createBottomTabNavigator({ Home });

///logo
// class LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./spiro.png')}
//         style={{ width: 30, height: 30 }}
//       />
//     );
//   }
// }

export default createAppContainer(AppNavigator);
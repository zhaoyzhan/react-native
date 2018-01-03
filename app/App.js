/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
// import First from './compon/First';
// import StackMScreen from './navagation/StackMainScreen';
// import Headers from './navagation/public/Header'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// class Greeting extends Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     )
//   }
// }

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showText: true
//     };
//     // setInterval(() => {
//     //   this.setState(previousState => {
//     //     return {
//     //       showText: tr
//     //     };
//     //   })
//     // }, 1000);
//   }

//   render() {
//     let display = this.state.showText ? this.props.text : '';
//     return (
//       <Text>{display}</Text>
//     )
//   }
// }

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Text>1234</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  red: {
    color: 'red',
  }
});
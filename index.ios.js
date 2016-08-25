/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator
} from 'react-native';
var Login = require('./App/Components/Login.js')

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500'
  }
});

class LunchBuddy extends Component {
  render() {
    return (
      <NavigatorIOS
        navigationBarHidden={true}
        style={styles.container}
        initialRoute={{
          title: 'Lunch Buddy',
          component: Login
        }}
        renderScene={(route, navigator) =>
          <Login />
        } />
    );
  }
}

AppRegistry.registerComponent('LunchBuddy', () => LunchBuddy);

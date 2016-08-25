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
  NavigatorIOS
} from 'react-native';
var Login = require('./App/Components/Login.js')

import Cards from './App/Components/cards';
import api from './App/Utils/api';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
});

class LunchBuddy extends Component {
  render() {
    getPlaceDetails('ChIJn4Ot3QBOqEcRVP6CMFUVhT8');
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Lunch Buddy',
          component: Login
        }} />
    );
  }
}

function getLocations() {
  return api.getLocations().then((res)=> console.log(res.results));
}

function getPlaceDetails(id) {
  return api.getPlaceDetails(id).then((res)=> console.log(res.result));
}

AppRegistry.registerComponent('LunchBuddy', () => LunchBuddy);

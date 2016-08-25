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
  View
} from 'react-native';

import Cards from './App/Components/cards';
import api from './App/Utils/api';

class LunchBuddy extends Component {
  render() {
    getPlaceDetails('ChIJn4Ot3QBOqEcRVP6CMFUVhT8');
    return (
      <View style={styles.container}>
        <Cards />
      </View>
    );
  }
}

function getLocations() {
  return api.getLocations().then((res)=> console.log(res.results));
}

function getPlaceDetails(id) {
  return api.getPlaceDetails(id).then((res)=> console.log(res.result));
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
});

AppRegistry.registerComponent('LunchBuddy', () => LunchBuddy);

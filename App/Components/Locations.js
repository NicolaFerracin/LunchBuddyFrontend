import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

var api = require('../Utils/api')
import Cards from './cardsLocations';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#EC5512',
    padding: 30
  }
});

class Locations extends Component{
  componentWillMount() {
    this.setState({
      isLoading: true,
      locations: []
    });
    // get locations
    api.getLocations().then((res) => {
      console.log('locations', res)
      this.setState({
        isLoading: false,
        locations: res
      });
    }).catch((e) => console.error(e));
  }
  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Find a restaurant!</Text>
        </View>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large">
        </ActivityIndicator>
        <Cards locations={this.state.locations} navigator={this.props.navigator}/>
      </View>
    )
  }
};

module.exports = Locations;

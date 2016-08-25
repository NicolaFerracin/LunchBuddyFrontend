import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS
} from 'react-native';

var api = require('../Utils/api')
import Cards from './cards';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F87217'
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
  }
});

class Events extends Component{
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events
    }
  }
  render() {
    console.log('evetns', this.props.events)
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Find a lunch!</Text>
        <Cards events={this.state.events} navigator={this.props.navigator}/>
      </View>
    )
  }
};

module.exports = Events;

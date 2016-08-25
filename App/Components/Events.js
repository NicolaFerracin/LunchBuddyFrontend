import React, {Component} from 'react';
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
import Cards from './cards';

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 30,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#EC5512'
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

class Events extends Component {
  componentWillMount () {
    this.setState({
      isLoading: true,
      events: []
    });
    // get events
    api.getEventsList().then((res) => {
      console.log("Got events: ", res)
      this.setState({
        isLoading: false,
        events: res
      });
    }).catch((e) => console.error(e));
  }

  constructor (props) {
    super(props);
  }

  render () {
    console.log('events', this.state.events)
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Choose an event, {this.props.user.name}!</Text>
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large">
        </ActivityIndicator>
        {!this.state.isLoading ? <Cards events={this.state.events} navigator={this.props.navigator}/> : null}
      </View>
    )
  }
}
;

module.exports = Events;

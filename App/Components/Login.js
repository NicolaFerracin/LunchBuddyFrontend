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

var Events = require('./Events')
var api = require('../Utils/api')

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
  logo: {
    width: 300,
    height: 300
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
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

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: false
    }
  }
  handleLogin() {
    console.log('Logging in');
    this.setState({
      isLoading: true
    });
    // get events
    api.getLocations().then((res) => {
      this.props.navigator.push({
          component: Dashboard,
          passProps: {userInfo: res}
        });
        this.setState({
          isLoading: false,
          error: false
        })
      }).catch((e) => console.error(e));
    }
  render() {
    var showErr = (
      this.state.error ? <Text>{this.state.error}</Text> : <View></View>
    );
    return(
      <View style={styles.mainContainer}>
        <Image style={styles.logo} source={require('../Images/logo.png')} />
        <Text style={styles.title}>Lunch Buddy</Text>
         <TouchableHighlight
          style={styles.button}
          onPress={this.handleLogin.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large">
        </ActivityIndicatorIOS>
        {showErr}
      </View>
    )
  }
};

module.exports = Login;

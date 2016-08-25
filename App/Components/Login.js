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

var Events = require('./Events')
var CreateEvent = require('./CreateEvent')
var api = require('../Utils/api')

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: '#F87217',
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    fontWeight: 'bold',
    fontSize: 40,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  label: {
    backgroundColor: 'rgba(0,0,0,0)',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    color: '#fff',
    marginBottom: 10
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
    color: '#fff',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#EC5512',
    // borderColor: 'white',
    // borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex:1, width: null, height: null, resizeMode:'stretch'
  },
  input: {
    backgroundColor: 'rgba(255,255,255, 0.5)',
    height: 40, 
    borderColor: '#fff', 
    borderWidth: 1,
    borderRadius: 8
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
    console.log(this.state)
    api.createParticipant(this.state.email.text, this.state.name.text).then((res)=>{
      this.props.navigator.push({
        component: Events,
        id: 'events'
      })
    }
    )
  }
  handleEmailChange(value) {
      this.state.email = value
  }

  handleNameChange(value) {
      this.state.name = value
  }

  render() {
    var showErr = (
      this.state.error ? <Text>{this.state.error}</Text> : <View></View>
    );

    return(
      <View style={styles.mainContainer}>
        <View style={styles.bgImageWrapper}>
          <Image source={require('../Images/bg.jpg')} style={styles.backgroundImage}/>
        </View>
        <Text style={styles.title}>Bello</Text>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.handleEmailChange({text})}
          value={this.state.text}
        />
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.handleNameChange({text})}
          value={this.state.text}
        />
         <TouchableHighlight
          style={styles.button}
          onPress={this.handleLogin.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        {showErr}
      </View>
    )
  }
};

module.exports = Login;

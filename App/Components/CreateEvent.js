import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  DatePickerIOS
} from 'react-native';

var api = require('../Utils/api')
var Events = require('./Events')

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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
    borderTopWidth: 1,
    borderTopWidth: 2,
    borderColor: '#DCDCDC'
  },
  thumb: {
    width: 64,
    height: 64,
  },
  rowText: {
    flex: 2,
    fontSize: 18,
  },
  rowSubText: {
     flex: 1,
    fontSize: 12,
  }
});

class CreateEvent extends Component{

  static defaultProps = {
    date: new Date()
  };

  state = {
    date: this.props.date
  };

  onDateChange = (date) => {
    this.setState({date: date});
  };


  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      isLoading: false,
      error: false,
      dataSource: this.ds.cloneWithRows(this.props.event)
    }
  }

  handleSelectPlace(rowData) {
    console.log(rowData)
  }
  createEvent() {
    console.log("creating an event", this.props.event);
    // get locations
    api.createEvent(this.props.event.id, new Date().getTime()).then((res) => {
      if (res.done) {
        console.log("even created succesfully");
        this.props.navigator.push({
          component: Events
        })
      }
    }).catch((e) => console.error('error', e));
  }

  render() {
    var showErr = (
      this.state.error ? <Text>{this.state.error}</Text> : <View></View>
    );
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.subtitle}>Today it is:</Text>
        <Text style={styles.title}>{this.props.event.name}</Text>
        <Text style={styles.subtitle}>Set a time:</Text>
        <DatePickerIOS
          date={this.props.date}
          mode="time"
          onDateChange={this.onDateChange}
          minuteInterval={10}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.createEvent.bind(this)}>
          <Text>Create event</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = CreateEvent;

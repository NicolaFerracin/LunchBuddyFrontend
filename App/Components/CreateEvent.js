import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  ActivityIndicatorIOS,
  ListView
} from 'react-native';

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

  render() {
    var showErr = (
      this.state.error ? <Text>{this.state.error}</Text> : <View></View>
    );
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.buttonText}>CreateEvent</Text>
        <Text style={styles.subtitle}>Places nearby:</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            (
                <TouchableHighlight onPress={this.handleSelectPlace(rowData)}>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>{rowData.name}</Text>
                        <Text style={styles.rowSubText}>{rowData.vicinity}</Text>
                    </View>
                </TouchableHighlight>
            )
          }
        />
        <ActivityIndicator
          animating={this.state.isLoading}
          color="#111"
          size="large">
        </ActivityIndicator>
        {showErr}
      </View>
    )
  }
};

module.exports = CreateEvent;

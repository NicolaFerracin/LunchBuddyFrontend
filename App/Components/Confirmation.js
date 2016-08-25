import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableHighlight,
  ListView,
  ActivityIndicatorIOS
} from 'react-native';
import store from '../store'

var api = require('../Utils/api')
var Events = require('./Events')

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#EC5512'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'red',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  rowItem: {
    alignSelf: 'center',
    color: '#EC5512'
  }
});

class Confirmation extends Component {
  constructor (props) {
    super(props);
    var listArray = [];
    listArray = this.props.event.peoples.map(function(value){
      return value.Name
    })
    
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    this.state = {
      dataSource: this.ds.cloneWithRows(listArray)
      }
  }

  componentDidMount() {
    console.log(`Adding user ${store.name} to event ${this.props.event.ID}`)
    api.addParticipant(this.props.event.ID, store.email);
  }

  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.rowItem}> {rowData} </Text>
        </View>
      </View>
    )
  }

  cancel () {
    this.props.navigator.pop();
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.subtitle}>Today it is:</Text>
        <Text style={styles.title}>{this.props.event.location.name}</Text>
        <Text style={styles.title}>12:50</Text>
        <Text style={styles.subtitle}>Your Lunch Buddies</Text>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.cancel.bind(this)}>
          <Text>Cancel</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
;

module.exports = Confirmation;

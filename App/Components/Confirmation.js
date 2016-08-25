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
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#EC5512'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30
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
  buttonText: {
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center'
  },
  row: {
    color: '#EC5512',
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center'
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
    api.addParticipant(this.props.event.ID, store.name);
  }

  renderRow(rowData){
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
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
        <Text style={styles.subtitle}>Your Bello buddies:</Text>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.row}>{rowData}</Text>}/>
        <TouchableHighlight
          style={styles.button}
          onPress={this.cancel.bind(this)}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
;

module.exports = Confirmation;

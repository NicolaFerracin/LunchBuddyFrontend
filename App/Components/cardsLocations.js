import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import Confirmation from './Confirmation';

let Card = React.createClass({
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: this.props.photoUrl}} />
        <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.descriptionItem}>{this.props.rating} &#9733;</Text>
          <Text style={styles.address}>{this.props.vicinity}</Text>
      </View>
    )
  }
});


let NoMoreCards = React.createClass ({
  restart() {
    console.log("we need to make this wrok")
    // this.props.navigator.push({
    //   component: Locations
    // })
  },
  render() {
    return (
      <View>
        <Text>Nothin else to show, you are going to starve to death!</Text>
        <TouchableHighlight
          onPress={this.restart.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableHighlight>
      </View>
    )

  }
})

export default React.createClass({
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  },
  onYes(card) {
    console.log(`Yup for ${card.name}`)
    this.props.navigator.push({
        component: Confirmation,
        passProps: { event: card }
      })
    return;
  },
  render() {
    return (
      <SwipeCards
        loop={true}
        showYup={true}
        showNope={true}
        cards={this.props.locations.map((location, index) => location)}
        style={styles.mainContainer}
        renderCard={(cardData) => <Card {...cardData}/>}
        renderNoMoreCards={() => <NoMoreCards navigator={this.props.navigator} />}
        handleYup={this.onYes}
        handleNope={this.handleNope}
      />
    )
  }
})

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#3494BA'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300
  },
  image: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  descriptionRow: {
    flex: 1,
    flexDirection: 'row',
  },
  descriptionItem: {
    fontSize: 20,
    padding: 10
  },
  address: {
    fontSize: 20,
    padding: 10,
    flexWrap: 'wrap'
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
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
})

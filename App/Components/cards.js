import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import Confirmation from './Confirmation';
import Locations from './Locations';

let Card = React.createClass({
  render() {
    var location = this.props.location
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: location.photoUrl}} />
        <Text style={styles.title}>{location.name}</Text>
        <View style={styles.descriptionRow}>
          <Text style={styles.descriptionItem}>{location.rating} &#9733;</Text>
          <Text style={styles.descriptionItem}>5 &#9787;</Text>
          <Text style={styles.descriptionItem}>12:50</Text>
        </View>
      </View>
    )
  }
});


let NoMoreCards = React.createClass ({
  showLocations() {
    console.log(this.props)
    this.props.navigator.push({
      component: Locations
    })
  },
  render() {
    return (
      <View>
        <Text>Nobody planned lunch yet, it is up to you!</Text>
        <TouchableHighlight
          onPress={this.showLocations}
          style={styles.button}>
          <Text style={styles.buttonText}>Plan lunch</Text>
        </TouchableHighlight>
      </View>
    )

  }
})

export default React.createClass({
  handleNope (card) {
    console.log(`Nope for ${card.location.name}`)
  },
  onYes(card) {
    console.log(`Yup for ${card.location.name}`)
    this.props.navigator.push({
        component: Confirmation,
        passProps: { event: card }
      })
    return;
  },
  render() {
    return (
      <SwipeCards
        cards={this.props.events.map((event, index) => event)}
        cards={[]}
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

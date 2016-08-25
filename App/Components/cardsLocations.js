import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import CreateEvent from './CreateEvent';

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

export default React.createClass({
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  },
  onYes(card) {
    console.log(`Yup for ${card.name}`)
    this.props.navigator.push({
        component: CreateEvent,
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
        handleYup={this.onYes}
        handleNope={this.handleNope}
      />
    )
  }
})
const styles = StyleSheet.create({
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
    color: '#EC5512',
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
  icon: {
    color: '#EC5512'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
})

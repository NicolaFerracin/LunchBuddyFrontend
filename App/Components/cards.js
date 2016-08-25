import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

import Confirmation from './Confirmation';

let Card = React.createClass({
  render() {
    var location = this.props.location
    return (
      <View style={[styles.card]}>
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
  render() {
    return <Text>No more events! :(</Text>
  }
})

export default React.createClass({
  handleNope (card) {
    console.log(`Nope for ${card.location.name}`)
  },
  onYes(card) {
    console.log(`Yup for ${card.location.name}`)
    console.log(this.props)
    this.props.navigator.push({
        component: Confirmation,
        passProps: { event: card }
      })
  },
  render() {
    return (
      <SwipeCards
        cards={this.props.events.map((event, index) => event)}
        style={styles.mainContainer}
        renderCard={(cardData) => <Card {...cardData}/>}
        renderNoMoreCards={() => <NoMoreCards />}
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
  }
})

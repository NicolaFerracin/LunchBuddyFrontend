import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card]}>
        <Image style={styles.image} source={{uri: this.props.icon}} />
        <Text style={styles.title}>{this.props.name}</Text>
        <Text style={styles.description}>{this.props.rating}</Text>
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
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  },
  render() {
    return (
      <SwipeCards
        cards={this.props.events.map((event, index) => event.location)}
        style={styles.mainContainer}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
})

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F87217'
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
  descripion: {
    fontSize: 18,
    textAlign: 'center'
  }
})

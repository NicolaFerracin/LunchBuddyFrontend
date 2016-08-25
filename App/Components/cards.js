import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card]}>
        <Image style={styles.image} source={{uri: this.props.photoUrl}} />
        <Text style={styles.title}>{this.props.name}</Text>
        <View style={styles.descriptionRow}>
          <Text style={styles.descriptionItem}>{this.props.rating} &#9733;</Text>
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
    console.log(`Nope for ${card.name}`)
  },
  onYes(card) {
    console.log(`Yup for ${card.name}`)
    this.props.navigator.push({
        component: Confirmation,
        passProps: {event: card}
      })
  },
  render() {
    return (
      <SwipeCards
        cards={this.props.events.map((event, index) => event.location)}
        style={styles.mainContainer}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.onYes}
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
  descriptionRow: {
    flex: 1,
    flexDirection: 'row',
  },
  descriptionItem: {
    fontSize: 20,
    padding: 10
  }
})

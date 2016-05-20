import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native'

const Row = () => {
  return (
    <View style={styles.row}>
      <Image
        style={styles.tile}
        source={{ uri: 'http://www.fillmurray.com/150/150' }}
      />
      <Image
        style={styles.tile}
        source={{ uri: 'http://www.fillmurray.com/150/150' }}
      />
    </View>
  )
}

export default class Interests extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'dashboard'
    })
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {[ 1, 2, 3, 4, 5 ].map((row, index) => <Row key={index} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 65
  },
  tile: {
    height: 150,
    width: 150,
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
})

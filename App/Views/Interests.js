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
    <View>
      <View style={styles.row}>
        <Image
          style={styles.tile}
          source={{ uri: 'http://www.fillmurray.com/150/150' }}
          />
        <View style={styles.divider} />
        <Image
          style={styles.tile}
          source={{ uri: 'http://www.fillmurray.com/150/150' }}
          />
      </View>
      <View style={styles.horizontalDiv} />
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
    flex: 14
  },
  row: {
    flexDirection: 'row'
  },
  divider: {
    flex: 1,
    backgroundColor: 'white'
  },
  horizontalDiv: {
    height: 2,
    backgroundColor: 'white'
  }
})

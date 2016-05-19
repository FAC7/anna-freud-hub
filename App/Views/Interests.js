import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native'

export default class Interests extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'http://www.fillmurray.com/150/150' }}
        />
        <Text> Interests </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 60,
    color: 'blue'
  },
  image: {
    width: 150,
    height: 150
  }
})

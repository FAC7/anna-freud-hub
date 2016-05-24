import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native'
import Tile from '../Components/Tile.js'

export default class MyEvents extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> My Events </Text>
        <ScrollView>
          <Tile
            title={'Bowling'}
            imageSource={'http://www.fillmurray.com/g/200/300'}
            attending={43}
            distance={15}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#6076C0'
  }
})

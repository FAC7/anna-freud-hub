import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

import InterestsList from '../Components/InterestsList.js'

export default class Interests extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Choose Your Interests</Text>
        <InterestsList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#6076C0',
    marginBottom: 20
  }
})

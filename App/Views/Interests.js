import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import InterestsList from '../Components/InterestsList.js'

export default class Interests extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <InterestsList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  }
})

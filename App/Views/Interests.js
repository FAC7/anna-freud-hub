import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native'

import InterestsList from '../Components/InterestsList.js'

export default class Interests extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <InterestsList />
        <TouchableHighlight style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  submit: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: 80,
    flex: 1,
    backgroundColor: '#1a49d6'
  },
  submitText: {
    textAlign: 'center'
  }
})

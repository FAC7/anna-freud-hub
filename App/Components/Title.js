import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Title extends Component {
  render () {
    return (
      <View><Text style={styles.title}>THIS IS TITLE COMPONENT</Text></View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#6076C0',
    marginBottom: 0,
    marginTop: 40
  }
})

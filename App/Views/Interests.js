import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class Interests extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> IN Interests </Text>
        <TouchableHighlight onPress={() => this.props.navigator.pop()}>
          <Text> Submit </Text>
        </TouchableHighlight>
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
  }
})

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
      <View>
        <Text style={styles.title}> IN Interests </Text>
        <TouchableHighlight onPress={() => {console.log('pressed')}}>
          <Text> Submit </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 60,
    color: 'blue'
  }
})

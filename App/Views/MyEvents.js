import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class MyEvents extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'Dashboard'
    })
  }

  render () {
    return (
      <View>
        <Text style={styles.title}> MY EVENTS </Text>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
          <Text> Click to see dashoard </Text>
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

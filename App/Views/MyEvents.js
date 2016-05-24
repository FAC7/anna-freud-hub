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
      name: 'HUB'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> MY EVENTS </Text>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
          <Text> Click to see dashoard </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 60,
    color: '#6076C0'
  }
})

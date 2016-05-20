import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class Interests extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'Dashboard'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> IN Interests </Text>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
          <Text> Go to the dashboard </Text>
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

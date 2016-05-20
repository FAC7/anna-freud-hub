import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class Dashboard extends Component {
  navTester () {
    this.props.navigator.push({
      name: 'Event Info'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> IN DASHBOARD </Text>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
          <Text> Click to go to specific event </Text>
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
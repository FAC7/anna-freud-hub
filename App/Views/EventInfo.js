import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class EventInfo extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'myEvents'
    })
  }

  render () {
    return (
      <View>
        <Text style={styles.title}>  EVENT INFO  </Text>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
          <Text> MY EVENTS</Text>
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

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
      name: 'My Events'
    })
  }

  render () {
    return (
      <View>
        <Text style={styles.title}>  EVENT INFO  </Text>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
          <Text> CLICK TO GO TO MY EVENTS</Text>
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

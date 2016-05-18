import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class Login extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'interests'
    })
  }

  render () {
    return (
      <View>
        <Text style={styles.title}> IN LOGIN </Text>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
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

import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'

import Row from '../Components/InterestsRow.js'
export default class Interests extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'dashboard'
    })
  }

  renderInterests () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {[ 1, 2, 3, 4, 5 ].map((row, index) => <Row key={index} />)}
      </ScrollView>
    )
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Choose Your Interests</Text>
        {this.renderInterests()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#6076C0'
  },
  container: {
    backgroundColor: '#257AC4',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 30
  }
})

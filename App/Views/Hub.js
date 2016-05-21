import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native'

import Tile from '../Components/Tile.js'

export default class Hub extends Component {
  navTester () {
    this.props.navigator.push({
      name: 'Event Info'
    })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Events Near You</Text>
        <ScrollView>
          <Tile
            title={'Band Camp'}
            imageSource={'http://www.fillmurray.com/g/200/300'}
            attending={33}
            distance={10}
            linkRoute={this.navTester.bind(this)}
          />

          <Tile
            title={'Bowling'}
            imageSource={'http://www.fillmurray.com/g/200/300'}
            attending={43}
            distance={15}
            linkRoute={this.navTester.bind(this)}
          />

        </ScrollView>
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
  }
})

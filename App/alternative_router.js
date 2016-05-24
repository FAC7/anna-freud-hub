import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  LayoutAnimation
} from 'react-native'

import Hub from './Views/Hub.js'
import Interests from './Views/Interests.js'
import MyEvents from './Views/MyEvents.js'

export default class Router extends React.Component {
  constructor () {
    super()
    this.state = {
      currentRoute: 'interests'
    }
  }

  router () {
    const { currentRoute } = this.state
    if (currentRoute === 'interests') return <Interests />
    if (currentRoute === 'myEvents') return <MyEvents />
    if (currentRoute === 'hub') return <Hub />
  }

  setRoute (route) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({ currentRoute: route })
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        {this.router()}
        <View style={styles.menu}>
          <Text style={styles.menuItem} onPress={() => this.setRoute('interests')}>Interests</Text>
          <Text style={styles.menuItem} onPress={() => this.setRoute('hub')}>HUB</Text>
          <Text style={styles.menuItem} onPress={() => this.setRoute('myEvents')}>My Events</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  menu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: 'rgb(186, 214, 255)'
  },
  menuItem: {
    color: 'rgb(42, 123, 231)',
    textAlign: 'center',
    fontSize: 15,
    flex: 1
  }
})

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text } from 'react-native'

import { newRoute } from '../Actions/actions_routing.js'

class Navbar extends Component {
  render () {
    return (
      <View style={styles.menu}>
        <Text
          style={styles.menuItem}
          onPress={() => this.props.newRoute('Interests')}
        >
          Interests
        </Text>
        <Text
          style={styles.menuItem}
          onPress={() => this.props.newRoute('HUB')}
        >
          HUB
        </Text>
        <Text
          style={styles.menuItem}
          onPress={() => this.props.newRoute('My Events')}
        >
          My Events
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { newRoute })(Navbar)

const styles = StyleSheet.create({
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

// setRoute (route) {
//   LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
// }
//

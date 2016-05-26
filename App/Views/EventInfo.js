import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native'

import { connect } from 'react-redux'
import { goBack } from '../Actions/actions_routing.js'

class EventInfo extends Component {
  setRoute () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.props.goBack()
  }

  render () {
    return (
      <View>
        <Text style={styles.title}>  EVENT INFO </Text>
        <TouchableHighlight onPress={this.setRoute.bind(this)}>
          <Text> CLICK TO GO BACK</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default connect(null, { goBack })(EventInfo)

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 60,
    color: 'blue'
  }
})

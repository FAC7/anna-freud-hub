import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native'

import { connect } from 'react-redux'
import { goBack } from '../Actions/actions_routing.js'
import { getEvents } from '../Actions/actions_index.js'


class TitleWithBack extends Component {
  setRoute () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.props.getEvents()
    this.props.goBack()
  }

  render () {
    return (
      <View style={styles.titleContainer}>
        <TouchableHighlight onPress={this.setRoute.bind(this)}>
          <Text style={styles.back}> {'<'} </Text>
        </TouchableHighlight>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

export default connect(null, { goBack, getEvents })(TitleWithBack)

const styles = StyleSheet.create({
  title: {
    // alignItems: 'center', TODO fix alignment of title in this component
    fontSize: 24,
    color: '#6076C0'
  },
  back: {
    fontSize: 24,
    color: '#6076C0',
  },
  titleContainer: {
    // flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40
  }
})

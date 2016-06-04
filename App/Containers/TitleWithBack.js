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
        <Text style={styles.title}>{this.props.activeEvent}</Text>
        <Text style={styles.divider}>...</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps, { goBack, getEvents })(TitleWithBack)

const styles = StyleSheet.create({
  title: {
    // alignItems: 'center', TODO fix alignment of title in this component
    fontSize: 24,
    color: '#6076C0',
    marginLeft: -10
  },
  back: {
    fontSize: 30,
    marginLeft: 10,
    color: '#6076C0',
  },
  divider: {
    color: 'transparent'
  },
  titleContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40
  }
})

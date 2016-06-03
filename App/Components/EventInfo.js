import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation,
  StyleSheet,
  Image
} from 'react-native'

import { connect } from 'react-redux'

import EventAddress from './EventAddress.js'

class EventInfo extends Component {

  toggleAttending () {
    // const userId
    const url = 'http://annafreudhub.herokuapp.com/toggleattending'
    const postObj = {
      method: 'POST',
      body: {
        eventId: this.props.activeEvent.eventId
      }
    }
    fetch(url)
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{ uri: this.props.activeEvent.imageUrl }}
        />
        <EventAddress event={this.props.activeEvent} />

        <TouchableHighlight onPress={() => this.toggleAttending()}>
          <Text>Attending?</Text>
        </TouchableHighlight>

        <View>
          <Text>{this.props.activeEvent.creatorEmail}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeEvent: state.activeEvent
  }
}

export default connect(mapStateToProps)(EventInfo)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  image: {
    height: 250,
  }
})

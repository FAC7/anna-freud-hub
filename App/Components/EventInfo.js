import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native'

import { connect } from 'react-redux'

import EventAddress from './EventAddress.js'
import EventContact from './EventContact.js'
import SetAttending from './SetAttending.js'

import { toggleAttending } from '../Actions/actions_index.js'

class EventInfo extends Component {

  toggleAttendingState (eventId) {
    AsyncStorage.getItem('userinfo')
      .then(data => JSON.parse(data))
      .then((userObj) => {
        const userId = userObj.email
        this.props.toggleAttending(eventId, userId)
      })
  }

  render () {
    const { activeEvent } = this.props
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{ uri: activeEvent.imageUrl }}
        />
        <EventAddress event={activeEvent} />
        <EventContact contactAddress={activeEvent.creatorEmail} />
        <SetAttending
          toggleAttending={this.toggleAttendingState.bind(this, activeEvent.eventId)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { toggleAttending })(EventInfo)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  image: {
    height: 250,
  }
})

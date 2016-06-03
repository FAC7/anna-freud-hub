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
import EventDetails from './EventDetails.js'

import { toggleAttending } from '../Actions/actions_index.js'

class EventInfo extends Component {

  toggleAttendingState (eventId) {
    AsyncStorage.getItem('userinfo')
      .then(data => JSON.parse(data))
      .then((userObj) => {
        const userId = 'ysu:' + userObj.email
        this.props.toggleAttending(eventId, userId)
      })
  }

  render () {
    const { activeEvent } = this.props //event title
    const eventObj = this.props.allEvents.filter((event) => event.title === activeEvent)[0]
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{ uri: eventObj.imageUrl }}
        />
        <EventAddress event={eventObj} />
        <EventContact contactAddress={eventObj.creatorEmail} />
        <SetAttending
          toggleAttending={this.toggleAttendingState.bind(this, eventObj.eventId)}
        />
        <EventDetails description={eventObj.description} />
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

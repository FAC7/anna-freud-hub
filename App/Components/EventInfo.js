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

  render () {
    const { activeEvent, userDetails } = this.props //event title
    const eventObj = this.props.allEvents.filter((event) => event.title === activeEvent)[0]
    const isAttending = eventObj.attending.indexOf('ysu:' + this.props.userDetails.email) > -1
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{ uri: eventObj.imageUrl }}
        />
        <EventAddress event={eventObj} />
        <EventContact contactAddress={eventObj.creatorEmail} />
        <SetAttending
          toggleAttending={() => {
            this.props.toggleAttending(eventObj.eventId, 'ysu:' + userDetails.email)
          }}
          isAttending={isAttending}
        />
        <EventDetails description={eventObj.description} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })


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

import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  Image
} from 'react-native'

import { connect } from 'react-redux'

import EventAddress from './EventAddress.js'
import EventContact from './EventContact.js'
import SetAttending from './SetAttending.js'
import EventDetails from './EventDetails.js'
import Spinner from 'react-native-loading-spinner-overlay'

import { toggleAttending, isLoading } from '../Actions/actions_index.js'

class EventInfo extends Component {

  render () {
    console.log(this.props.loading, 'loading state')
    const { activeEvent, userDetails } = this.props //event title
    const eventObj = this.props.allEvents.filter((event) => event.title === activeEvent)[0]
    const isAttending = eventObj.attending.indexOf('ysu:' + this.props.userDetails.email) > -1
    return (
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <Spinner
          visible={this.props.loading}
          overlayColor='rgba(61, 177, 242, 0.41)'
        />
        <Image
          style={styles.image}
          source={{ uri: eventObj.imageUrl }}
        />
        <EventAddress event={eventObj} />
        <EventContact contactAddress={eventObj.creatorEmail} />
        <SetAttending
          toggleAttending={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
            this.props.isLoading(true)
            this.props.toggleAttending(
              eventObj.eventId, 'ysu:' + userDetails.email,
              this.props.isLoading
            )
          }}
          isAttending={isAttending}
        />
        <EventDetails description={eventObj.description} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })


export default connect(mapStateToProps, { toggleAttending, isLoading })(EventInfo)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  image: {
    height: 250,
  }
})

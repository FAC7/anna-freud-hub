import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native'

import { connect } from 'react-redux'

import EventAddress from './EventAddress.js'
import EventContact from './EventContact.js'
import SetAttending from './SetAttending.js'

class EventInfo extends Component {
  toggleAttending () {

  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{ uri: this.props.activeEvent.imageUrl }}
        />
        <EventAddress event={this.props.activeEvent} />
        <EventContact contactAddress={this.props.activeEvent.creatorEmail} />
        <SetAttending toggleAttending={this.toggleAttending}/>
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

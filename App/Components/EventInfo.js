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

class EventInfo extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{ uri: this.props.activeEvent.imageUrl }}
        />
        <View style={styles.infoContainer}>
          <View style={styles.infoHeadersContainer}>
            <Text style={styles.infoHeaders}>Location</Text>
            <Text style={styles.infoHeaders}>People Attending</Text>
          </View>
          <View style={styles.infoContentContainer}>
            <Text style={styles.address}>{this.props.activeEvent.address}</Text>
            <Text>{this.props.activeEvent.attending.length}</Text>
          </View>
        </View>

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
  },
  infoContainer: {
    backgroundColor: '#257AC4',
  },
  address: {
    height: 50,
    color: 'white'
  },
  infoHeadersContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  infoHeaders: {
    color: 'white',
    fontSize: 20
  },
  infoContentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  }
})

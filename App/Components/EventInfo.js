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

import icon from '../Assets/Icons/attending.png'

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
            <View style={styles.addressContainer}>
              <Text style={styles.address}>{this.props.activeEvent.address}</Text>
              <Text style={styles.postCode}>{this.props.activeEvent.postCode}</Text>
            </View>
            <View style={styles.attendingContent}>
              <Image source={icon} style={styles.icon} />
              <Text style={styles.attendingNumber}>{this.props.activeEvent.attending.length}</Text>
            </View>
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
    color: 'white',
    fontSize: 12
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
    fontSize: 17
  },
  infoContentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10
  },
  attendingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5
  },
  icon: {
    width: 18,
    height: 18
  },
  attendingNumber: {
    paddingLeft: 5,
    color: '#fff',
    fontSize: 20
  },
  postCode: {
    color: '#fff',
    fontSize: 12

  }
})

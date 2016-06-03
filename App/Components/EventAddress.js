import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import icon from '../Assets/Icons/attending.png'

export default ({ event }) => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoHeadersContainer}>
        <Text style={styles.infoHeaders}>Location</Text>
        <Text style={styles.infoHeaders}>People Attending</Text>
      </View>
      <View style={styles.infoContentContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{event.address}</Text>
          <Text style={styles.postCode}>{event.postCode}</Text>
        </View>
        <View style={styles.attendingContent}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.attendingNumber}>{event.attending.length}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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

import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

const icon = require('../Assets/Icons/attending.png')

export default (props) => (
  <TouchableHighlight style={styles.mainContainer}>
    <View>
      <Image source={{ uri: props.imageSource }} style={styles.image} />

      <View style={styles.topInfoContainer}>
        <Text style={styles.eventTitle}>{props.title}</Text>
        <View style={styles.attendingContainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.attending}>{props.attending}</Text>
        </View>
      </View>

      <View style={styles.bottomInfoContainer}>
        <Text style={styles.distance}>{props.distance} km away</Text>
        <TouchableHighlight style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableHighlight>
      </View>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    backgroundColor: '#257AC4',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 30,
    height: 280
  },
  topInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -40
  },
  eventTitle: {
    color: '#fff',
    fontSize: 24,
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  attendingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: 10,
    height: 24
  },
  image: {
    height: 200,
    opacity: 0.8
  },
  attending: {
    color: '#fff',
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  icon: {
    height: 18,
    width: 18,
    marginRight: 8,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  bottomInfoContainer: {
    marginLeft: 10,
    marginTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  distance: {
    marginTop: -20,
    fontSize: 24,
    color: '#fff'
  },
  detailsButton: {
    width: 100,
    height: 80,
    backgroundColor: '#96CEFF'
  }
})

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
  <TouchableHighlight style={styles.container}>
    <View>
      <Image source={{ uri: props.imageSource }} style={styles.image} />
      <Text style={styles.eventTitle}>{props.title}</Text>
      <View style={styles.attendingContainer}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.attending}>{props.attending}</Text>
      </View>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#257AC4',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 30,
    height: 300
  },
  image: {
    height: 200,
    opacity: 0.8
  },
  eventTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  attending: {
    color: '#fff',
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  attendingContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  icon: {
    height: 20,
    width: 20,
    backgroundColor: 'transparent'
  }

})

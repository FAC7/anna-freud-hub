import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ description }) => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.contactAddress}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    margin: 10,
    color: '#fff',
    fontSize: 14,
    paddingTop: 5,
    paddingBottom: 5
  },
  contactAddress: {
    color: '#fff',
    fontSize: 10,
    marginRight: 10,
    alignSelf: 'center'
  }
})

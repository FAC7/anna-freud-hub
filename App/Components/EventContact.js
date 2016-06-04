import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ contactAddress }) => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.title}>Get in touch</Text>
      <Text style={styles.contactAddress}>{contactAddress}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: '#030468',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    margin: 10,
    color: '#fff',
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  },
  contactAddress: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
    alignSelf: 'center',
    fontWeight: 'bold'
  }
})

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
    height: 50
  },
  title: {
    color: '#fff',
    fontSize: 20
  },
  contactAddress: {
    color: '#fff',
    fontSize: 17
  }
})

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ description }) => {
  return (
    <View style={styles.contactContainer}>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contactContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  description: {
    color: '#000',
    fontSize: 14,
    alignSelf: 'center',
    paddingTop: 14,
    paddingLeft: 10,
    paddingRight: 14
  }
})

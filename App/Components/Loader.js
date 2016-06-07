import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native'
import Dimensions from 'Dimensions'
const { height } = Dimensions.get('window')


export default () =>
  <View style={styles.container}>
    <StatusBar barStyle='light-content' />
    <Text style={styles.text}>Loading Events...</Text>
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3db1f2'
  },
  text: {
    color: '#fff',
    fontSize: 19
  }
})

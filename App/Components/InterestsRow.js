import React from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'

export default () => {
  return (
    <View>
      <View style={styles.row}>
        <Image
          style={styles.tile}
          source={{ uri: 'http://www.fillmurray.com/150/150' }}
        />
        <View style={styles.divider} />
        <Image
          style={styles.tile}
          source={{ uri: 'http://www.fillmurray.com/150/150' }}
        />
      </View>
      <View style={styles.horizontalDiv} />
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    height: 150,
    width: 150,
    flex: 20,
    opacity: 0.7
  },
  row: {
    flexDirection: 'row'
  },
  divider: {
    flex: 1,
    backgroundColor: 'white'
  },
  horizontalDiv: {
    height: 9,
    backgroundColor: 'white'
  }
})

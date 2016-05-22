import React from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import Tile from './InterestsTile.js'

export default ({ interestPair, setInterest, active }) => {

  return (
    <View>

      <View style={styles.row}>

        <Tile
          setInterest={setInterest}
          interest={interestPair[0]}
          active={active}
        />

        <View style={styles.divider} />

        <Tile
          setInterest={setInterest}
          interest={interestPair[1]}
          active={active}
        />

      </View>

      <View style={styles.horizontalDiv} />

    </View>
  )
}

const styles = StyleSheet.create({
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

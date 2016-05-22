import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default ({ interestPair, setInterest, active }) => {

  const firstTileActiveClass = active.indexOf(interestPair[0]) > -1 ?
  { opacity: 0.8 } :
  { opacity: 0.4 }

  const secondTileActiveClass = active.indexOf(interestPair[1]) > -1 ?
  { opacity: 0.8 } :
  { opacity: 0.4 }

  return (
    <View>
      <View style={styles.row}>

        <TouchableHighlight
          style={styles.tile}
          onPress={() => {
            setInterest(interestPair[0])
          }}
        >
          <View>
            <Image
              style={[ styles.tileImage, firstTileActiveClass ]}
              source={{ uri: 'http://www.fillmurray.com/150/150' }}
            />
            <Text style={styles.subTitle}>{interestPair[0]}</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.divider} />

        <TouchableHighlight
          style={styles.tile}
          onPress={() => {
            setInterest(interestPair[1])
          }}
        >
          <View>
            <Image
              style={[ styles.tileImage, secondTileActiveClass ]}
              source={{ uri: 'http://www.fillmurray.com/150/150' }}
            />
            <Text style={styles.subTitle}>{interestPair[1]}</Text>
          </View>
        </TouchableHighlight>

      </View>
      <View style={styles.horizontalDiv} />
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    flex: 20,
    height: 150
  },
  tileImage: {
    opacity: 0.8,
    height: 150
  },
  subTitle: {
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'transparent'
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

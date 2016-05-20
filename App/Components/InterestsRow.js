import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default ({ interest, setInterest, active }) => {
  const activeClass = active.indexOf(interest) > -1 ?
  { opacity: 0.8 } :
  { opacity: 0.4 }
  return (
    <View>
      <View style={styles.row}>

        <TouchableHighlight
          style={styles.tile}
          onPress={() => {
            console.log('pre')
            setInterest(interest)
          }}
        >
          <View>
            <Image
              style={[styles.tileImage, activeClass]}
              source={{ uri: 'http://www.fillmurray.com/150/150' }}
            />
            <Text style={styles.subTitle}>{interest}</Text>
          </View>
        </TouchableHighlight>

        <View style={styles.divider} />

        <TouchableHighlight
          style={styles.tile}
          onPress={() => {
            console.log('pre')
            setInterest(interest)
          }}
        >
          <View>
            <Image
              style={[styles.tileImage, activeClass]}
              source={{ uri: 'http://www.fillmurray.com/150/150' }}
            />
            <Text style={styles.subTitle}>{interest}</Text>
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

import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image
} from 'react-native'

export default ({ setInterest, interest, active }) => {

  const ActiveClass = active.indexOf(interest.title) > -1 ?
  { opacity: 0.8 } :
  { opacity: 0.4 }

  return (
    <TouchableHighlight
      style={styles.tile}
      onPress={() => {
        setInterest(interest.title)
      }}
    >

      <View>
        <Image
          style={[ styles.tileImage, ActiveClass ]}
          source={{ uri: interest.picUrl }}
        />
        <Text style={styles.subTitle}>{interest.title}</Text>
      </View>

    </TouchableHighlight>
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
})

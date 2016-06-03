import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Image
} from 'react-native'
import Dimensions from 'Dimensions'
const { width } = Dimensions.get('window')
import tick from '../Assets/Icons/tick.png'

export default ({ setInterest, interest, chosenInterests }) => {

  const ActiveClass = chosenInterests.indexOf(interest.title) > -1 ?
  { opacity: 0.4 } :
  { opacity: 1 }

  const visibleTick = chosenInterests.indexOf(interest.title) > -1 ?
  { opacity: 1 } :
  { opacity: 0 }

  return (
    <TouchableHighlight
      style={styles.row}
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
        <Image
          style={[ styles.tick, visibleTick ]}
          source={tick}
        />
      </View>

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  tileImage: {
    height: 150
  },
  tick: {
    height: 50,
    width: 50,
    left: (width / 4) - 30,
    top: 40,
    position: 'absolute'
  },
  subTitle: {
    color: '#fff',
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 10,
    left: 10,
    backgroundColor: 'transparent'
  },
  row: {
    width: width / 2.03,
    marginBottom: 5,
    height: 150,
    backgroundColor: '#257AC4'
  }
})

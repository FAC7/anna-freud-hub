import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default (props) => (
  <TouchableHighlight style={styles.container}>
    <View>
      <Image source={props.imageSource} style={styles.image} />
      <Text>{props.title}</Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#257AC4',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 30,
    height: 100
  }
})

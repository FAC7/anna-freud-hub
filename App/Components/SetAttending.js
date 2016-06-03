import React from 'react'

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'


export default ({ toggleAttending }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you going?</Text>
      <View style={styles.attendingChoice}>
        <TouchableHighlight
          onPress={() => toggleAttending()}
          underlayColor={'#fff'}
          style={styles.yesContainer}
        >
          <Text style={styles.text}>YES</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => toggleAttending()}
          underlayColor={'#fab5b5'}
          style={styles.noContainer}
        >
          <Text style={styles.text}>NO </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3D3FFF',
    alignItems: 'center',
  },
  title: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 14,
  },
  attendingChoice: {
    flexDirection: 'row',
    width: 100,
  },
  yesContainer: {
    backgroundColor: '#d1cece',
    flex: 1,
    padding: 10
  },
  noContainer: {
    backgroundColor: '#F98585',
    flex: 1,
    padding: 10
  },
  text: {
    textAlign: 'center',
    color: 'white'
  }
})

import React from 'react'

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'


export default (props) => {
  const yes = props.isAttending ? styles.green : {}
  const no = props.isAttending ? {} : styles.red
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you going?</Text>
      <View style={styles.attendingChoice}>
        <TouchableHighlight
          onPress={props.toggleAttending}
          underlayColor={'#fff'}
        >
          <View style={styles.attendingChoice}>
            <View style={[ styles.yesContainer, yes ]}>
              <Text style={styles.text}>YES</Text>
            </View>
            <View style={[ styles.noContainer, no ]}>
              <Text style={styles.text}>NO </Text>
            </View>
          </View>
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
    fontSize: 16,
  },
  attendingChoice: {
    flexDirection: 'row',
    width: 120,
  },
  yesContainer: {
    backgroundColor: '#d1cece',
    flex: 1,
    padding: 15
  },
  noContainer: {
    backgroundColor: '#d1cece',
    flex: 1,
    padding: 15
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  red: {
    backgroundColor: '#ff4444'
  },
  green: {
    backgroundColor: '#27b038'
  }
})

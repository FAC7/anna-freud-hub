import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'

import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

import InterestsList from '../Components/InterestsList.js'

// TODO send log out down as a prop function

class Interests extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight onPress={() => {
          AsyncStorage.clear()
          this.props.newRoute(routes.SIGNUP)
        }}
        >
          <Text style={styles.title}>LogOut</Text>
        </TouchableHighlight>
        <Text style={styles.title}>Choose Your Interests</Text>
        <InterestsList />
      </View>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, { newRoute })(Interests)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#6076C0',
    marginBottom: 20
  }
})

import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

class Intro extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HUB</Text>
        <TouchableOpacity
          onPress={() => this.props.newRoute(routes.SIGNUP)}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps, { newRoute })(Intro)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#257AC4',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 30
  }
})

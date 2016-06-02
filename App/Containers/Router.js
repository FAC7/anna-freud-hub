import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, AsyncStorage } from 'react-native'

import componentLoader from '../Utils/componentLoader.js'
import { getEvents } from '../Actions/actions_index.js'
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

class Router extends Component {

  componentWillMount () {
    AsyncStorage.getItem('userinfo')
      .then(d => JSON.parse(d))
      .then(data => {
        return data ?
          this.props.newRoute(routes.HUB) :
          this.props.newRoute(routes.SIGNUP)
      })
  }

  render () {
    this.props.getEvents() //TODO Move this somewhere better
    const DisplayComponent = componentLoader[this.props.route].component
    const Navbar = componentLoader[this.props.route].Navbar
    return (
      <View style={styles.mainContainer}>
        <DisplayComponent />
        <Navbar />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.router.name,
    history: state.router.history
  }
}

export default connect(mapStateToProps, { getEvents, newRoute })(Router)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

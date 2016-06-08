import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, AsyncStorage } from 'react-native'

import componentLoader from '../Utils/componentLoader.js'
import { getEvents, addUserToStore } from '../Actions/actions_index.js'
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'
import Loading from '../Components/Loader.js'

class Router extends Component {

  componentWillMount () {
    AsyncStorage.getItem('userinfo')
      .then(data => {
        if (data) {
          this.props.newRoute(routes.HUB)
          this.props.addUserToStore(data)
          this.props.getEvents()
        } else {
          this.props.newRoute(routes.INTRO)
        }
      })
  }

  render () {
    const { route } = this.props
    const DisplayComponent = componentLoader[route].component
    const Navbar = componentLoader[route].Navbar
    const Title = componentLoader[route].Title
    const titleContent = componentLoader[route].titleContent

    return this.props.events.length > 0 ?
      <View style={styles.mainContainer}>
        <Title title={titleContent} />
        <DisplayComponent />
        <Navbar />
      </View>
     : <Loading />
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.router.name,
    history: state.router.history,
    events: state.allEvents
  }
}

export default connect(mapStateToProps, { getEvents, newRoute, addUserToStore })(Router)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

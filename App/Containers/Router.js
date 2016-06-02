import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, AsyncStorage } from 'react-native'

import componentLoader from '../Utils/componentLoader.js'
import { getEvents } from '../Actions/actions_index.js'
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

class Router extends Component {

  componentWillMount () {
    // AsyncStorage.getItem('userinfo')
    //   .then(d => JSON.parse(d))
    //   .then(data => {
    //     return data ?
    //       this.props.newRoute(routes.HUB) :
    //       this.props.newRoute(routes.SIGNUP)
    //   })
    // this.props.getEvents()
  }

  render () {
    console.log(this.props.events)
    const { route } = this.props
    const DisplayComponent = componentLoader[route].component
    const Navbar = componentLoader[route].Navbar
    const Title = componentLoader[route].Title
    const titleContent = componentLoader[route].titleContent

    return (
      <View style={styles.mainContainer}>
        <Title title={titleContent} />
        <DisplayComponent />
        <Navbar />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.router.name,
    history: state.router.history,
    events: state.allEvents
  }
}

export default connect(mapStateToProps, { getEvents, newRoute })(Router)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

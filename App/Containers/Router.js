import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'

import componentLoader from '../Utils/componentLoader.js'
import { getEvents } from '../Actions/actions_index.js'

class Router extends Component {
  render () {
    this.props.getEvents() //TODO Move this somewhere better
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
    history: state.router.history
  }
}

export default connect(mapStateToProps, { getEvents })(Router)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

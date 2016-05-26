import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'

import componentLoader from '../Utils/componentLoader.js'

class Router extends Component {
  render () {
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

export default connect(mapStateToProps)(Router)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
})

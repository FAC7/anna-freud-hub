import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newRoute } from '../Actions/actions_routing.js'

import componentLoader from '../Utils/componentLoader.js'

class Router extends Component {
  render () {
    const routeObj = componentLoader[this.props.route.name]
    const component = routeObj.component
    const authorized = this.props.isLoggedIn || !routeObj.authRequired
    if (!authorized) {
      newRoute('Login')
    }
    return (
      <component />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.router.route,
    history: state.router.history,
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { newRoute })(Router)

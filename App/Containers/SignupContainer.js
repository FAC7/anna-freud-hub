import React, { Component } from 'react'
import {
  AsyncStorage,
  LayoutAnimation
} from 'react-native'

import SignUp from '../Components/Signup.js'

import routes from '../Utils/routes.js'
import { updateInput, addUserToStore, isLoading } from '../Actions/actions_index.js'
import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'

class SignUpContainer extends Component {

  submitDetails (userObj) {
    this.props.addUserToStore(userObj)
    AsyncStorage.setItem('userinfo', JSON.stringify(userObj))
    const url = 'http://annafreudhub.herokuapp.com/adduser'
    // const url = 'http://localhost:4000/adduser'
    this.props.isLoading(true)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(userObj)
    })
    .then(() => {
      this.props.isLoading(false)
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      return this.props.newRoute(routes.INTERESTS)
    })
  }

  render () {
    return (
      <SignUp {...this.props} submitDetails={this.submitDetails.bind(this)} />
    )
  }
}

const mapStateToProps = state => ({ ...state })
export default connect(mapStateToProps, {
  updateInput,
  newRoute,
  addUserToStore,
  isLoading
})(SignUpContainer)

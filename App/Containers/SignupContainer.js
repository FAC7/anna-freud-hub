import { connect } from 'react-redux'
import React, { Component } from 'react'
import SignUp from '../Components/Signup.js'
import { updateInput } from '../Actions/actions_index.js'
import { AsyncStorage } from 'react-native'
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

class SignUpContainer extends Component {

  submitDetails (userObj) {
    AsyncStorage.setItem('userinfo', JSON.stringify(userObj))
    fetch('http://localhost:4000/adduser', {
      method: 'POST',
      body: JSON.stringify(userObj)
    })
    .then(() => this.props.newRoute(routes.INTERESTS))
  }

  render () {
    return (
      <SignUp {...this.props} submitDetails={this.submitDetails.bind(this)} />
    )
  }
}

const mapStateToProps = state => ({ ...state })
export default connect(mapStateToProps, { updateInput, newRoute })(SignUpContainer)

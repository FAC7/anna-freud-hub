import { connect } from 'react-redux'
import React, { Component } from 'react'
import SignUp from '../Components/Signup.js'
import { updateInput } from '../Actions/actions_index.js'
import { AsyncStorage } from 'react-native'
// import * as NavigationActions from '../actions/router.js'
// import * as LoginActions from '../actions/login.js'


class SignUpContainer extends Component {
  submitDetails (userObj) {
    AsyncStorage.setItem('userinfo', JSON.stringify(userObj))
  }
  render () {
    return (
      <SignUp {...this.props} />
    )
  }
}

const mapStateToProps = state => ({ ...state })
export default connect(mapStateToProps, { updateInput })(SignUpContainer)

import { connect } from 'react-redux'
import React, { Component } from 'react'
import SignUp from '../Components/Signup.js'
import { updateInput } from '../Actions/actions_index.js'
import { AsyncStorage } from 'react-native'

class SignUpContainer extends Component {

  submitDetails (userObj) {
    AsyncStorage.setItem('userinfo', JSON.stringify(userObj))
    fetch('http://localhost:4000/adduser', {
      method: 'POST',
      body: JSON.stringify(userObj)
    })
    .then(d => d.json())
    .then((res) => console.log(res, 'response from server'))
    .catch((err) => console.log(err))
  }

  render () {
    return (
      <SignUp {...this.props} submitDetails={this.submitDetails} />
    )
  }
}

const mapStateToProps = state => ({ ...state })
export default connect(mapStateToProps, { updateInput })(SignUpContainer)

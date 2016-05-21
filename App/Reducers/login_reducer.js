import { USER_LOGIN } from '../Actions/actions_index.js'

const defaultState = { isLoggedIn: false, data: {} }
export default (state = defaultState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    console.log('user login action called in reducer')
    return action.payload ?
    { isLoggedIn: true, data: action.payload } :
    { isLoggedIn: false, data: {} }
  default:
    return state
  }
}

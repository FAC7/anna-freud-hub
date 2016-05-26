import { USER_LOGIN } from '../Actions/actions_index.js'

const defaultState = { isLoggedIn: false, data: {} }
export default (state = defaultState, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return action.payload ?
    { isLoggedIn: true, data: action.payload } :
    { isLoggedIn: false, data: {} }
  default:
    return state
  }
}

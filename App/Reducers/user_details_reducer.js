import { ADD_USER_TO_STORE } from '../Actions/actions_index.js'

const defaultState = {}
export default (state = defaultState, action) => {
  switch (action.type) {
  case ADD_USER_TO_STORE:
    return action.payload
  default:
    return state
  }
}

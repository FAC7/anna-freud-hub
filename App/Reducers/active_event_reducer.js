import { ACTIVE_EVENT } from '../Actions/actions_index.js'
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTIVE_EVENT:
    return action.payload
  default:
    return state
  }
}

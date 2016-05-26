import { GET_EVENTS } from '../Actions/actions_index.js'

export default (state = [], action) => {
  switch (action.type) {
  case GET_EVENTS:
    return [
      ...action.payload
    ]
  default:
    return state
  }
}

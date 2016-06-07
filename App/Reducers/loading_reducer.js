import { IS_LOADING } from '../Actions/actions_index.js'

export default (state = false, action) => {
  switch (action.type) {
  case IS_LOADING:
    return action.payload
  default:
    return state
  }
}

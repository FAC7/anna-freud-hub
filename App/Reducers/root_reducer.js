import { combineReducers } from 'redux'
import interests from './interests_reducer.js'
import loggedIn from './login_reducer.js'

const rootReducer = combineReducers({
  interests,
  loggedIn
})

export default rootReducer

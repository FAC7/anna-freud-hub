import { combineReducers } from 'redux'
import chosenInterests from './chosen_interests_reducer.js'
import loggedIn from './login_reducer.js'
import router from './routing_reducer.js'
import allEvents from './all_events_reducer.js'

const rootReducer = combineReducers({
  chosenInterests,
  loggedIn,
  router,
  allEvents
})

export default rootReducer

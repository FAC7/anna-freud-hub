import { combineReducers } from 'redux'
import chosenInterests from './chosen_interests_reducer.js'
import userDetails from './user_details_reducer.js'
import router from './routing_reducer.js'
import allEvents from './all_events_reducer.js'
import signup from './sign_up_reducer.js'
import activeEvent from './active_event_reducer.js'
import loading from './loading_reducer.js'

const rootReducer = combineReducers({
  chosenInterests,
  userDetails,
  router,
  allEvents,
  signup,
  activeEvent,
  loading
})

export default rootReducer

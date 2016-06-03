import { GET_EVENTS, TOGGLE_ATTENDING } from '../Actions/actions_index.js'

export default (state = [], action) => {
  switch (action.type) {
  case GET_EVENTS:
    return [
      ...action.payload
    ]
  case TOGGLE_ATTENDING:
    const { userId, eventId } = action.payload
    return state.map((event) => {
      if (event.eventId === eventId) {
        const i = event.attending.indexOf(userId)
        if (i === -1) {
          const addedUser = event.attending.concat(userId)
          return {
            ...event,
            attending: addedUser
          }
        } else {
          const removeUser = [
            ...event.attending.slice(0, i),
            ...event.attending.slice(i + 1)
          ]
          return {
            ...event,
            attending: removeUser
          }
        }
      } else {
        return event
      }
    })
  default:
    return state
  }
}

import tape from 'tape'
import { mockEvent, mockEvent2, mockUser } from '../api/mock_data.js'
import allEventsReducer from '../../App/Reducers/all_events_reducer.js'
import { TOGGLE_ATTENDING } from '../../App/Actions/actions_index.js'

tape('allEventsReducer reducer should remove user from attending array if present', (t) => {
  const currentState = [ mockEvent, mockEvent2 ]
  const userId = mockUser.userId
  const mockAction = {
    type: TOGGLE_ATTENDING,
    payload: {
      userId: userId,
      eventId: mockEvent.eventId
    }
  }
  const removeIndex = mockEvent.attending.indexOf(mockUser.userId)
  const updatedEventObj = {
    ...mockEvent,
    attending: [
      ...mockEvent.attending.slice(0, removeIndex),
      ...mockEvent.attending.slice(removeIndex + 1)
    ]
  }

  const actual = allEventsReducer(currentState, mockAction)
  const expected = [ updatedEventObj, mockEvent2 ]
  t.deepEqual(actual, expected, 'reducer correctly removes user from array')
  t.end()
})

tape('allEventsReducer reducer should add user from attending array if not present', (t) => {
  const currentState = [ mockEvent, mockEvent2 ]
  const userId = 'user:93465'
  const mockAction = {
    type: TOGGLE_ATTENDING,
    payload: {
      userId: userId,
      eventId: mockEvent.eventId
    }
  }
  const updatedEventObj = {
    ...mockEvent,
    attending: mockEvent.attending.concat(userId)
  }

  const actual = allEventsReducer(currentState, mockAction)
  const expected = [ updatedEventObj, mockEvent2 ]
  t.deepEqual(actual, expected, 'reducer correctly adds user to the array')
  t.end()
})

export const SET_INTERESTS = 'SET_INTERESTS'
export const setInterest = (interest) => {
  return {
    type: SET_INTERESTS,
    payload: interest
  }
}

// this is just here until we think of better place to put network request

const errorObj = {
  imageUrl: 'http://memargaret.com/wp-content/uploads/2014/09/fail.jpg',
  attending: [],
  title: 'DB request fail, refresh!',
  postCode: 'Failville'
}

export const GET_EVENTS = 'GET_EVENTS'
export const getEvents = () => {

  const url = 'http://annafreudhub.herokuapp.com/events'

  return fetch(url)
    .then(response => response.json())
    .then(events => {
      return {
        type: GET_EVENTS,
        payload: events
      }
    })
    .catch((err) => {
      console.log(err)
      return {
        type: GET_EVENTS,
        payload: [ errorObj ]
      }
    })
}

export const ADD_USER_TO_ASYNCSTORAGE = 'ADD_USER_TO_ASYNCSTORAGE'

export const addUser = (userObj) => {
  return {
    type: ADD_USER_TO_ASYNCSTORAGE,
    payload: userObj
  }
}

export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD'

export const updateInput = (key, value) => {
  return {
    type: UPDATE_USER_FIELD,
    key: key,
    value: value
  }
}

export const ACTIVE_EVENT = 'ACTIVE_EVENT'
export const activeEvent = (event) => {
  return {
    type: ACTIVE_EVENT,
    payload: event.title
  }
}

export const TOGGLE_ATTENDING = 'TOGGLE_ATTENDING'
export const toggleAttending = (eventId, userId) => {
  const url = 'http://annafreudhub.herokuapp.com/toggleattending'
  const postObj = {
    method: 'POST',
    body: {
      eventId,
      userId
    }
  }
  return fetch(url, JSON.stringify(postObj))
    .then(() => {
      return {
        type: TOGGLE_ATTENDING,
        payload: {
          eventId,
          userId
        }
      }
    })
}

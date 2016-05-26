export const SET_INTERESTS = 'SET_INTERESTS'
export const setInterest = (interest) => {
  return {
    type: SET_INTERESTS,
    payload: interest
  }
}

export const USER_LOGIN = 'USER_LOGIN'
export const userLogin = username => {
  const url = 'https://api.github.com/users/' + username
  return fetch(url).then(response => {
    return {
      type: USER_LOGIN,
      payload: response
    }
  })
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
  const url = 'http://localhost:4000/api/events' //TODO change to herokes
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

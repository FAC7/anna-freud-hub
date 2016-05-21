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

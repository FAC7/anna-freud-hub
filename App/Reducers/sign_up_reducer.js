import { UPDATE_USER_FIELD } from '../Actions/actions_index.js'

export const intitialState = {
  firstName: undefined, //eslint-disable-line
  lastName: undefined, //eslint-disable-line
  email: undefined, //eslint-disable-line
  password: undefined, //eslint-disable-line
  postCode: undefined, //eslint-disable-line
  dateOfBirth: undefined //eslint-disable-line
}

export default function (state = intitialState, action) {

  switch (action.type) {
  case UPDATE_USER_FIELD:
    return {
      ...state,
      [action.key]: action.value
    }
  default:
    return {
      ...state
    }
  }
}

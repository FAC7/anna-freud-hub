import { UPDATE_USER_FIELD } from '../Actions/actions_index.js'

export const intitialState = {
  firstName: undefined, //eslint-disable-line
  lastName: undefined, //eslint-disable-line
  email: undefined, //eslint-disable-line
  postCode: undefined, //eslint-disable-line
  DOB: undefined //eslint-disable-line
}

// export const intitialState = {
//   firstName: 'Andrew', //eslint-disable-line
//   lastName: 'Macmurray', //eslint-disable-line
//   email: 'a.macmurray@icloud.com', //eslint-disable-line
//   postCode: 'E8 2NA', //eslint-disable-line
//   DOB: '07-04-89' //eslint-disable-line
// }

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

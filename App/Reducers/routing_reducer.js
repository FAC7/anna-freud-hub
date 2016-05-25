import { NEW_ROUTE } from '../Actions/actions_routing.js'
export default (state = {}, action) => {
  switch (action.type) {
  case NEW_ROUTE:
    const { history } = state
    return {
      name: action.route.name,
      history: history.concat(action.route.name)
    }
  default:
    return state
  }
}

// let state = {
//   route: { name: 'login' },
//   history: [ 'name1', 'name2' ]
// }

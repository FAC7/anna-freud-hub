import { NEW_ROUTE, GO_BACK } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

const initialState = {
  name: routes.INTRO,
  history: [ routes.INTRO ]
}

export default (state = initialState, action) => {
  const { history } = state
  switch (action.type) {
  case NEW_ROUTE:
    return {
      name: action.route.name,
      history: history.concat(action.route.name)
    }
  case GO_BACK:
    const newRoute = history.slice(-2)[0]
    const newHistory = history.slice(0, -1)
    return {
      name: newRoute,
      history: newHistory
    }
  default:
    return state
  }
}

// let state = {
//   route: { name: 'login' },
//   history: [ 'name1', 'name2' ]
// }

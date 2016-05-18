import React from 'react'
import Login from './Login.js'
import Interests from './Interests.js'
import routes from './routes.js'

export default (route, nav) => {
  switch (route.name) {
  case routes.login:
    return <Login navigator={nav} />
  case routes.interests:
    return <Interests navigator={nav} />
  case routes.dashboard:
    return <Interests navigator={nav} />
  case routes.myEvents:
    return <Interests navigator={nav} />
  default:
    return <Text> Default </ Text>
  }
}

import React from 'react'
import Login from './Login.js'
import Interests from './Interests.js'
import Dashboard from './Dashboard.js'
import MyEvents from './MyEvents.js'
import routes from './routes.js'

export default (route, nav) => {
  switch (route.name) {
  case routes.login:
    return <Login navigator={nav} />
  case routes.interests:
    return <Interests navigator={nav} />
  case routes.dashboard:
    return <Dashboard navigator={nav} />
  case routes.myEvents:
    return <MyEvents navigator={nav} />
  default:
    return <Text> Default </ Text>
  }
}

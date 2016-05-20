import React from 'react'
import Login from './Login.js'
import Interests from './Interests.js'
import Dashboard from './Dashboard.js'
import MyEvents from './MyEvents.js'
import routes from './routes.js'

import { Text } from 'react-native'

export default (route, nav) => {
  switch (route.name) { //
  case routes.LOGIN:
    return <Login navigator={nav} />
  case routes.INTERESTS:
    return <Interests navigator={nav} />
  case routes.DASHBOARD:
    return <Dashboard navigator={nav} />
  case routes.MY_EVENTS:
    return <MyEvents navigator={nav} />
  default:
    return <Text navigator={nav} >Default page (route is incorrect) {route.name}</Text>
  }
}

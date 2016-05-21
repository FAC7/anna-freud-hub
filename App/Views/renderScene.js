import React from 'react'
import Login from './Login.js'
import Interests from './Interests.js'
import Hub from './Hub.js'
import MyEvents from './MyEvents.js'
import EventInfo from './EventInfo.js'

import routes from './routes.js'

import { Text } from 'react-native'

export default (route, nav) => {
  console.log(route.name)
  switch (route.name) { //
  case routes.LOGIN:
    return <Login navigator={nav} />
  case routes.INTERESTS:
    return <Interests navigator={nav} />
  case routes.DASHBOARD:
    return <Hub navigator={nav} />
  case routes.MY_EVENTS:
    return <MyEvents navigator={nav} />
  case routes.EVENT_INFO:
    return <EventInfo navigator={nav} />
  default:
    return <Text navigator={nav} >Default page (route is incorrect) {route.name}</Text>
  }
}


// components
import Splash from '../Components/Splash.js'
// containers
import Interests from '../Views/Interests.js'
import Login from '../Views/Login.js'
import Hub from '../Views/Hub.js'
import MyEvents from '../Views/MyEvents.js'
import EventInfo from '../Views/EventInfo.js'
import Navbar from '../Containers/Navbar.js'

const componentList = {
  Splash,
  Interests,
  Login,
  Hub,
  MyEvents,
  EventInfo,
  Navbar
}

import routes from './routes.js'

const componentLoader = {}

componentLoader[routes.SPLASH] = {
  component: componentList.Splash,
  Navbar: componentList.Navbar,
  authRequired: false
}

componentLoader[routes.LOGIN] = {
  component: componentList.Login,
  Navbar: componentList.Navbar,
  authRequired: false
}

componentLoader[routes.HUB] = {
  component: componentList.Hub,
  Navbar: componentList.Navbar,
  authRequired: false
}

componentLoader[routes.MY_EVENTS] = {
  component: componentList.MyEvents,
  Navbar: componentList.Navbar,
  authRequired: false
}

componentLoader[routes.EVENT_INFO] = {
  component: componentList.EventInfo,
  Navbar: componentList.Navbar,
  authRequired: false
}

componentLoader[routes.INTERESTS] = {
  component: componentList.Interests,
  Navbar: componentList.Navbar,
  authRequired: false
}

export default componentLoader

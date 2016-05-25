
// components
import Splash from '../Components/Splash.js'
import NoNavbar from '../Components/NoNavbar.js'
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
  Navbar,
  NoNavbar
}

import routes from './routes.js'

const componentLoader = {}

componentLoader[routes.SPLASH] = {
  component: componentList.Splash,
  Navbar: componentList.NoNavbar,
  authRequired: false
}

componentLoader[routes.LOGIN] = {
  component: componentList.Login,
  Navbar: componentList.NoNavbar,
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
  Navbar: componentList.NoNavbar,
  authRequired: false
}

componentLoader[routes.INTERESTS] = {
  component: componentList.Interests,
  Navbar: componentList.Navbar,
  authRequired: false
}

export default componentLoader

import componentList from './componentList.js'

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

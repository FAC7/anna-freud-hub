import componentList from './componentList.js'

import routes from './routes.js'

const componentLoader = {}

componentLoader[routes.SPLASH] = {
  component: componentList.Splash,
  Navbar: componentList.NoNavbar,
  Title: componentList.NoNavbar,
  titleContent: null,
  authRequired: false
}

componentLoader[routes.LOGIN] = {
  component: componentList.Login,
  Navbar: componentList.NoNavbar,
  Title: componentList.NoNavbar,
  titleContent: null,
  authRequired: false
}

componentLoader[routes.HUB] = {
  component: componentList.Hub,
  Navbar: componentList.Navbar,
  Title: componentList.Title,
  titleContent: 'Events Near You',
  authRequired: false
}

componentLoader[routes.MY_EVENTS] = {
  component: componentList.MyEvents,
  Navbar: componentList.Navbar,
  Title: componentList.Title,
  titleContent: 'My Events',
  authRequired: false
}

componentLoader[routes.EVENT_INFO] = {
  component: componentList.EventInfo,
  Navbar: componentList.NoNavbar,
  Title: componentList.TitleWithBack,
  titleContent: 'Event Information',
  authRequired: false
}

componentLoader[routes.INTERESTS] = {
  component: componentList.Interests,
  Navbar: componentList.NoNavbar,
  Title: componentList.Title,
  titleContent: 'Select Your Interests',
  authRequired: false
}

componentLoader[routes.SIGNUP] = {
  component: componentList.Signup,
  Navbar: componentList.NoNavbar,
  Title: componentList.NoNavbar,
  titleContent: null,
  authRequired: false
}

export default componentLoader

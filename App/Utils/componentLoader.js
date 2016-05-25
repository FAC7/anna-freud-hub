
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


const componentLoader = {
  'Splash': {
    component: componentList.Splash,
    Navbar: 'emptyNav',
    authRequired: false
  },
  'Login': {
    component: componentList.Login,
    Navbar: 'emptyNav',
    authRequired: false
  },
  'Interests': {
    component: componentList.Interests,
    Navbar: 'emptyNav',
    authRequired: true
  },
  'Dashboad': {
    component: componentList.Hub,
    Navbar: 'defaultNav props: left: , right: ',
    authRequired: true
  },
  'My Events': {
    component: componentList.MyEvents,
    Navbar: 'defaultNav props: left: , right: ',
    authRequired: true
  },
  'Event Info': {
    component: componentList.EventInfo,
    Navbar: '<defaultNav />',
    authRequired: true
  }
}

export default componentLoader

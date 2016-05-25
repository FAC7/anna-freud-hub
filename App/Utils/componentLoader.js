import componentList from './componentList.js'

const componentLoader = {
  'Splash': {
    component: componentList.Splash,
    nav: 'emptyNav',
    authRequiredRequired: false
  },
  'Login': {
    component: componentList.Login,
    nav: 'emptyNav',
    authRequired: false
  },
  'Interests': {
    component: componentList.Interests,
    nav: 'emptyNav',
    authRequired: true
  },
  'Dashboad': {
    component: componentList.Hub,
    nav: 'defaultNav props: left: , right: ',
    authRequired: true
  },
  'My Events': {
    component: componentList.MyEvents,
    nav: 'defaultNav props: left: , right: ',
    authRequired: true
  },
  'Event Info': {
    component: componentList.EventInfo,
    nav: '<defaultNav />',
    authRequired: true
  }
}

export default componentLoader

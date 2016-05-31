require('env2')
const Hapi = require('hapi')

// server plugins
const Inert = require('inert')
const Vision = require('vision')
const HapiAuthBasic = require('hapi-auth-basic')
const Cookie = require('hapi-auth-cookie')

// server routes
const Dashboard = require('./routes/nhsViews/Dashboard.js')
const ResourceHandler = require('./routes/nhsViews/ResourceHandler.js')
const BookEvent = require('./routes/YSU-routes/book_event.js')
const BookedEvents = require('./routes/YSU-routes/booked_events.js')
const setInterests = require('./routes/YSU-routes/set_interests.js')
const signUp = require('./routes/YSU-routes/sign_up.js')
const userEvents = require('./routes/YSU-routes/user_events.js')
const addEvent = require('./routes/nhsViews/add_event.js')
const getEvents = require('./routes/nhsViews/get_events.js')

// custom plugins
const Register = require('./routes/nhsViews/register.js')
const Login = require('./routes/nhsViews/login.js')
const AttachRedis = require('./attachRedis.js')

const Plugins = [ AttachRedis, HapiAuthBasic, Cookie, Inert, Vision, Register, Login ]
const Routes = [
  Dashboard,
  ResourceHandler,
  BookEvent,
  BookedEvents,
  setInterests,
  signUp,
  userEvents,
  addEvent,
  getEvents
]

module.exports = (client) => { //eslint-disable-line

  const server = new Hapi.Server()

  server.connection({ port: process.env.PORT || 4000 })
  server.register(Plugins, err => {if (err) console.log(err)})
  server.views(require('./viewSettings.js'))
  server.route(Routes)

  return server
}

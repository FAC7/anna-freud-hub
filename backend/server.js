require('env2')
const Hapi = require('hapi')

// server plugins
const Inert = require('inert')

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

const Plugins = [ Inert ]
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
  server.route(Routes)

  return server
}

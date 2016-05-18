require('env2')('./config.env')
const Hapi = require('hapi')

// server plugins
const Inert = require('inert')

// server routes
const Dashboard = require('./routes/nhsViews/Dashboard.js')
const ResourceHandler = require('./routes/nhsViews/ResourceHandler.js')

const Plugins = [ Inert ]
const Routes = [ Dashboard, ResourceHandler ]

module.exports = (client) => {

  const server = new Hapi.Server()

  server.connection({ port: process.env.PORT || 4000 })
  server.register(Plugins, err => {if (err) console.log(err)})
  server.route(Routes)

  return server
}

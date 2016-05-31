const client = require('./db/client.js')()
const events = require('./db/db_events.js')
const nhs = require('./db/db_nhs.js')
const ysu = require('./db/db_ysu.js')

exports.register = (server, options, next) => {

  server.app.client = client
  server.app.events = events
  server.app.nhs = nhs
  server.app.ysu = ysu

  return next()

}

exports.register.attributes = {
  name: 'attach redis client and functions'
}

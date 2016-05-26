const db = require('../../db/db_events.js')
const client = require('../../db/client.js')()

module.exports = {
  path: '/api/events',
  method: 'GET',
  handler: (request, reply) => {
    db.getEventIds(client)
      .then((eventArray) => {
        return db.getEvents(client, eventArray)
      })
      .then((allEvents) => {
        reply(allEvents)
      })
      .catch(() => reply('error'))
  }
}

const db = require('../../db/db_events.js')
const client = require('../../db/client.js')()

module.exports = {
  path: '/api/events',
  method: 'GET',
  handler: (request, reply) => {
    db.getEventIds(client)
      .then((eventArray) => {
        console.log(eventArray)
        return db.getEvents(client, eventArray)
      })
      .then((allEvents) => {
        console.log(allEvents)
        reply(allEvents)
      })
      .catch(() => reply('error'))
  }
}

const db = require('../../db/db_events.js')
const client = require('../../db/client.js')()

// We are going to have a set amount of interests so I am mocking them here
const interestsArray = [ 'cooking', 'health', 'wellness', 'sports' ]

module.exports = {
  path: '/api/events/nhs/addEvent',  // could use instead '/api/events/nhs/addEvent/{adminId}'
  method: 'POST',
  handler: (request, reply) => {
    const receivedEvent = JSON.parse(request.payload)
    const initialAttendingArray = []
    const eventId = receivedEvent.title + ':' + (Math.floor(Math.random()*90000) + 10000)
    const missingKeysObject = {
      eventId: eventId,
      attending: initialAttendingArray,
    }

    const eventToStore = Object.assign({}, receivedEvent, missingKeysObject)

    // This deletes the category keys that came in the receivedEvent with values of 'on'
    console.log(eventToStore)
    db.addEvent(client, eventToStore)
      .then(() => {
        reply.file('./public/success.html')
      })
  }
}
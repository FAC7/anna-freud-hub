const db = require('../../db/db_events.js')
const client = require('../../db/client.js')()

// We are going to have a set amount of interests so I am mocking them here
const interestsArray = [ 'cooking', 'health', 'wellness', 'sports' ]

module.exports = {
  path: '/testingForm',
  method: 'POST',
  handler: (request, reply) => {
    const receivedEvent = request.payload

    const initialAttendingArray = []
    const eventId = receivedEvent.title + ':' + (Math.floor(Math.random()*90000) + 10000)
    const eventCategories = interestsArray
                            .filter((interest) => Object.keys(receivedEvent).indexOf(interest) > -1)
    const missingKeysObject = {
      eventId: eventId,
      attending: initialAttendingArray,
      categories: eventCategories
    }

    const eventToStore = Object.assign({}, receivedEvent, missingKeysObject)

    // This deletes the category keys that came in the receivedEvent with values of 'on'
    eventCategories.forEach((category) => delete eventToStore[category])
    console.log(eventToStore)
    db.addEvent(client, eventToStore)
      .then(() => {
        reply.file('./public/success.html')
      })
  }
}

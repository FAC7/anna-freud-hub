const db = require('../../db/db_events.js')

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
    console.log(eventToStore)
    reply.file('./public/success.html')
  }
}

const db = require('../../db/db_events.js')
const client = require('../../db/client.js')()


// first route: get view for adding a new events
// second route: posting a new event

exports.register = (server, options, next) => {
  server.route([ {
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
      db.addEvent(client, eventToStore)
        .then(() => {
          reply.file('./public/success.html')
        })
    }
  }, {
    path: '/addevent',
    method: 'GET',
    config: {
      auth: 'nhs',
      handler: (request, reply) => {
        const categories = [
          'Fun Activites',
          'Youth Council',
          'Wellness',
          'Sports Clubs',
          'Youth Groups',
          'Physical Health',
          'Mental Health',
          'Volunteering',
          'Outdoors',
          'Cooking',
          'Cooking',
          'Art',
          'Educational'
        ]
        reply.view('addEvent', { categories: categories })
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'add event get and post view'
}

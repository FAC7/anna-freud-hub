// first route: get view for adding a new events
// second route: posting a new event

const categories = require('../../utils/categories.js')
const eventSchema = require('../../ValidationSchemas/eventSchema.js')

exports.register = (server, options, next) => {

  const client = server.app.client
  const events = server.app.events
  const nhs = server.app.nhs


  server.route([ {
    path: '/addevent',
    method: 'POST',
    config: {
      description: 'formats the payload and adds a new event to db',
      auth: 'nhs',
      handler: (request, reply) => {
        // payload data
        const eventData = request.payload
        // keys from the payload
        const eventDataKeys = Object.keys(eventData)

        const selectedCategories = eventDataKeys.filter(key => eventData[key] === 'on')
        const otherData = eventDataKeys.filter(key => eventData[key] !== 'on')
          .reduce((prev, curr) => {
            prev[curr] = eventData[curr]
            return prev
          }, {})
        const eventId = eventData.title + ':' + (Math.floor(Math.random()*90000) + 10000)
        const adminDetails = request.auth.credentials.details
        const missingKeysObject = {
          eventId: eventId,
          attending: [],
          creatorEmail: adminDetails.adminId,
          creatorId: adminDetails.adminId,
          creatorFirstName: adminDetails.firstName,
          creatorLastName: adminDetails.lastName,
          categories: selectedCategories,
          geoLocation: [ '0.48574985798', '0.33454478' ]
        }
        const eventToStore = Object.assign({}, otherData, missingKeysObject)

        events.addEvent(client, eventToStore)
          .then(() => nhs.toggleAdminEventsCreated(client, eventId, adminDetails.adminId))
          .then(() => reply.redirect('/'))
      },
      validate: {
        payload: eventSchema,
        failAction: (request, reply) => {
          reply.view('addEvent', {
            error: 'please fill out all the fields',
            categories: categories
          })
        }
      }
    }
  }, {
    path: '/addevent',
    method: 'GET',
    config: {
      auth: 'nhs',
      handler: (request, reply) => {
        const cats = categories.map(cat => ({ category: cat, selected: false }))
        reply.view('addEvent', { categories: cats })
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'add event get and post view'
}

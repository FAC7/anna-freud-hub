// first route: get view for adding a new events
// second route: posting a new event
const Joi = require('joi')

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

        const categories = eventDataKeys.filter(key => eventData[key] === 'on')
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
          categories: categories,
          geoLocation: [ '0.48574985798', '0.33454478' ]
        }
        const eventToStore = Object.assign({}, otherData, missingKeysObject)

        events.addEvent(client, eventToStore)
          .then(() => nhs.toggleAdminEventsCreated(client, eventId, adminDetails.adminId))
          .then(() => reply.redirect('/'))
      },
      validate: {
        payload: {
          title: Joi.string().required(),
          description: Joi.string().required(),
          address: Joi.string().required(),
          postCode: Joi.string().max(8).required(),
          date: Joi.string().required(),
          time: Joi.string().required(),
          imageUrl: Joi.string().required()
        },
        failAction: (request, reply) => {
          reply.view('addEvent', { error: 'please fill out all the fields' })
        }
      }
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

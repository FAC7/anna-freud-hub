const categories = require('../../utils/categories.js')
const eventSchema = require('../../ValidationSchemas/eventSchema.js')
exports.register = (server, options, next) => {

  const client = server.app.client
  const events = server.app.events

  server.route([ {
    path: '/editevent/{eventId}',
    method: 'GET',
    config: {
      description: 'nhs wants to edit an existing event',
      auth: 'nhs',
      handler: (request, reply) => {
        events.getEvent(client, request.params.eventId)
          .then(data => {
            const isSelected = categories.map(cat =>
              data.categories.indexOf(cat) > -1 ?
              { category: cat, selected: true } :
              { category: cat, selected: false }
            )
            reply.view('editEvent', { event: data, categories: isSelected })
          })
      }
    }
  }, {
    path: '/editevent/{eventId}',
    method: 'POST',
    config: {
      description: 'posts updated event details',
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
        const updatedDetails = Object.assign({}, { categories: selectedCategories }, otherData)
        events.editEvent(client, request.params.eventId, updatedDetails)
          .then(() => reply.redirect('/'))
      },
      validate: {
        payload: eventSchema,
        failAction: (request, reply) => {
          reply.view('editEvent', {
            error: 'please fill out all the fields',
            categories: categories
          })
        }
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'nhs edit event'
}

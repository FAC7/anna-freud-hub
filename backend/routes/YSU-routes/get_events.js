exports.register = (server, options, next) => {

  const client = server.app.client
  const events = server.app.events

  server.route({
    path: '/events',
    method: 'GET',
    config: {
      description: 'gets all the events in the db',
      handler: (request, reply) => {
        events.getEventIds(client)
          .then((ids) => events.getEvents(client, ids))
          .then((data) => reply(data))
      }
    }
  })

  return next()
}

exports.register.attributes = {
  name: 'gets all events in db'
}

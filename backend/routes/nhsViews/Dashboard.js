exports.register = (server, options, next) => {

  const nhs = server.app.nhs
  const events = server.app.events
  const client = server.app.client

  server.route([ {
    path: '/',
    method: 'GET',
    config: {
      description: 'gets events created by nhs user',
      auth: 'nhs',
      handler: (request, reply) => {
        const adminId = request.auth.credentials.details.adminId
        nhs.getAdmin(client, adminId)
          .then(data => events.getEvents(client, data.eventsCreated))
          .then(data => reply.view('dashboard', { events: data.reverse() }))
      }
    }
  }, {
    path: '/allevents',
    method: 'GET',
    config: {
      description: 'access to all events on db',
      auth: 'admin',
      handler: (request, reply) => {
        events.getEventIds(client)
          .then((ids) => events.getEvents(client, ids))
          .then((data) => reply.view('dashboard', { events: data.reverse() }))
      }
    }
  } ])
  return next()
}

exports.register.attributes = {
  name: 'nhs events dashboard'
}

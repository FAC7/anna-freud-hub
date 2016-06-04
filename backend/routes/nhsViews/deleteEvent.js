exports.register = (server, options, next) => {

  const client = server.app.client
  const nhs = server.app.nhs
  const events = server.app.events

  server.route({
    path: '/deleteevent/{eventId}',
    method: 'GET',
    config: {
      auth: 'nhs',
      description: 'deletes an event',
      handler: (request, reply) => {
        const adminId = request.auth.credentials.details.adminId
        const eventId = request.params.eventId
        events.deleteEvent(client, eventId)
          .then(() => nhs.toggleAdminEventsCreated(client, eventId, adminId))
          .then(() => reply.redirect('/'))
      }
    }
  })

  return next()
}

exports.register.attributes = {
  name: 'delete event'
}

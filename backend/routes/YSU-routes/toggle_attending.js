exports.register = (server, options, next) => {

  const client = server.app.client
  const events = server.app.events

  server.route({
    path: '/toggleattending',
    method: 'POST',
    handler: (request, reply) => {
      const userId = request.payload.userId
      const eventId = request.payload.eventId
      events.toggleEventAttendingList(client, eventId, userId)
        .then((res) => reply(res))
    }
  })

  return next()
}

exports.register.attributes = {
  name: 'update attending list'
}

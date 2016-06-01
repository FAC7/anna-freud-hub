exports.register = (server, options, next) => {
  server.route([ {
    path: '/editevent/{eventId}', //how to send up eventId?
    method: 'GET',
    config: {
      description: 'nhs wants to edit an existing event',
      auth: 'nhs',
      handler: (request, reply) => {
        console.log(request.params.eventId, 'request params event id')
        reply()
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'nhs edit event'
}

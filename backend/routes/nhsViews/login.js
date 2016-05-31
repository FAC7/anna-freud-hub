exports.register = (server, options, next) => {

  server.route([ {
    path: '/login',
    method: 'GET',
    config: {
      description: 'nhs login view',
      handler: (request, reply) => {
        reply.view('login')
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'nhs login routes'
}

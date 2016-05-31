exports.register = (server, options, next) => {

  server.route([ {
    path: '/register',
    method: 'GET',
    config: {
      description: 'register user view',
      // auth: 'admin',
      handler: (request, reply) => {
        reply.view('register')
      }
    }
  }, {
    path: '/register',
    method: 'POST',
    config: {
      description: 'register a new nhs user',
      // auth: 'admin',
      handler: (request, reply) => {
        reply(request.payload)
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'register user view'
}

exports.register = (server, options, next) => {
  server.route = {
    path: '/logout',
    method: 'GET',
    config: {
      auth: 'nhs',
      handler: (request, reply) => {
        console.log('in logoug')
        request.cookieAuth.clear()
        reply.redirect('/')
      }
    }
  }
  return next()
}

exports.register.attributes = {
  name: 'logout user'
}

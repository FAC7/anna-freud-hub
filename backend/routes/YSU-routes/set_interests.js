exports.register = (server, options, next) => {
  const ysu = server.app.ysu
  const client = server.app.client
  server.route({
    path: '/setinterests/{userId}',
    method: 'GET',
    handler: (request, reply) => {
      const newInterests = JSON.parse(request.payload)
      const userId = request.params.userId

      ysu.updateInterests(client, userId, newInterests)
        .then(() => reply('interests set'))
        .catch((err) => reply(err))
    }
  })
  return next()
}

exports.register.attributes = {
  name: 'set interests'
}

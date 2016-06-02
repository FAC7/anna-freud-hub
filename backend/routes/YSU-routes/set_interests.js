exports.register = (server, options, next) => {
  const ysu = server.app.ysu
  const client = server.app.client
  server.route({
    path: '/setinterests',
    method: 'POST',
    handler: (request, reply) => {
      const payload = JSON.parse(request.payload)
      const interests = payload.interests
      const userId = payload.userId

      ysu.updateInterests(client, userId, interests)
        .then(() => reply('interests set'))
        .catch((err) => reply(err))
    }
  })
  return next()
}

exports.register.attributes = {
  name: 'set interests'
}

// This route should add a user to the database with all the details from the
// sign up form

exports.register = (server, options, next) => {

  const client = server.app.client
  const ysu = server.app.ysu

  server.route({
    path: '/adduser',
    method: 'POST',
    config: {
      description: 'adds a young service user to the db',
      handler: (request, reply) => {
        const userDetails = JSON.parse(request.payload)
        const missingDetails = {
          userId: 'ysu:' + userDetails.email,
          interests: [],
          eventsAttending: []
        }
        const userObj = Object.assign({}, userDetails, missingDetails)
        ysu.addUser(client, userObj)
          .then(() => reply('done'))
      }
    }
  })

  return next()
}

exports.register.attributes = {
  name: 'add young service user'
}

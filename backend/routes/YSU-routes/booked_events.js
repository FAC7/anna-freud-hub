// This route should fetch all the events that an user is attending

module.exports = {
  path: '/events/booked/{userId}',
  method: 'GET',
  handler: (request, reply) => {
    const userId = request.params.userId
    reply('My events for ' + userId)
  }
}

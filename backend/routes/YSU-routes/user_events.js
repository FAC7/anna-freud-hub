// This route should fetch all the events for a particular userId
// (the ones that match his interests)

module.exports = {
  path: '/events/{userId}',
  method: 'GET',
  handler: (request, reply) => {
    const userId = request.params.userId
    reply('Events for' + userId)
  }
}

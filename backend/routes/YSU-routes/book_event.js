// This route should book an user into an event

module.exports = {
  path: '/events/book/{userId}/{eventId}',
  method: 'POST',
  handler: (request, reply) => {
    const userId = request.params.userId
    const eventId = request.params.eventId
    reply('Book event ' + userId + eventId)
  }
}

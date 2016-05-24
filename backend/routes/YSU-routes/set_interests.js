// This route should fetch all the events for a particular userId
// (the ones that match his interests)

module.exports = {
  path: '/interests/{userId}',
  method: 'POST',
  handler: (request, reply) => {
    const userId = request.params.userId
    reply('Interests for' + userId)
  }
}

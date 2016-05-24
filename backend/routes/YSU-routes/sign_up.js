// This route should add a user to the database with all the details from the
// sign up form

module.exports = {
  path: '/signUp',
  method: 'POST',
  handler: (request, reply) => {
    reply('Sign Up')
  }
}

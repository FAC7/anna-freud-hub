// Test route

const addMockUser = require('../../db/redisFunctions.js').addMockUser

const dummyData = {
  firstName: 'Ivan',
  lastName: 'Gonzalez',
  email: 'ivan@fac.com',
  DOB: '23-03-89',
  postCode: 'SW9  ',
  interests: [ 'Music', 'Yoga' ],
  eventsAttending: [ 'Football', 'Basketball' ]
}

module.exports = {
  path: '/addMockUser',
  method: 'GET',
  handler: (request, reply) => {
    addMockUser(dummyData)
    .then((data) => {
      console.log('data---->', data)
      reply('Mock user added')
    })
    .catch((err) => {
      console.log('error---->', err)
      reply('Error')
    })
  }
}

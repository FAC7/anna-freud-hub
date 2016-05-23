const tape = require('tape')
const db = require('../../backend/db/redisFunctions.js')
const client = require('../../backend/db/client.js')({ env: 'TEST' })

const mockUser = {
  firstName: 'Ivan',
  lastName: 'Gonzalez',
  email: 'ivan@fac.com',
  DOB: '23-03-89',
  postCode: 'SW9  ',
  interests: [ 'Music', 'Yoga' ],
  eventsAttending: [ 'Football', 'Basketball' ]
}

tape('testing adding a new YSU', (t) => {
  const actual = db.addUser(client, mockUser)
  const expected = 'OK'
  t.equal(actual, expected, 'assert adduser to the database')
  t.end()
})


// module.exports= {
//   addMockUser,
//   getUser,
//   addUser,
//   addEvents
// }

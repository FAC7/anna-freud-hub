const tape = require('tape')
const db = require('../../backend/db/redisFunctions.js')
const client = require('../../backend/db/client.js')({ env: 'TEST' })

const mockUser = {
  userId: 'user:12345',
  firstName: 'Ivan',
  lastName: 'Gonzalez',
  email: 'ivan@fac.com',
  DOB: '23-03-89',
  postCode: 'SW9  ',
  interests: [ 'Music', 'Yoga' ],
  eventsAttending: [ 'Football', 'Basketball' ]
}

tape('testing adding a new YSU', (t) => {
  t.plan(1)
  db.addUser(client, mockUser)
    .then(data => {
      const actual = data
      const expected = 'OK'
      t.equal(actual, expected, 'assert adduser to the database')
    })
})

tape('teardown', (t) => {
  client.FLUSHDB()
  client.QUIT()
  t.end()
})


// module.exports= {
//   addMockUser,
//   getUser,
//   addUser,
//   addEvents
// }

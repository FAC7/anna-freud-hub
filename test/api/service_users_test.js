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

tape('getUser function returns the current user with correct arguments', (t) => {
  t.plan(4)
  db.getUser(client, 'user:12345')
    .then(data => {
      let actual = Object.keys(data).length
      let expected = 8
      t.equal(actual, expected, 'getUser returns correct number of arguments')

      t.equal(data.userId, 'user:12345', 'returns correct Id')
      t.equal(data.email, 'ivan@fac.com', 'returns correct email')
      t.deepEqual(data.interests, [ 'Music', 'Yoga' ], 'returns interests in correct format')
    })
})

tape('teardown', (t) => {
  // client.FLUSHDB() // eslint-disable-line
  client.QUIT() // eslint-disable-line
  t.end()
})


// module.exports= {
//   addMockUser,
//   getUser,
//   addUser,
//   addEvents
// }

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

const mockEvent = {
  eventId: 'event:12345',
  title: 'Codingforeveryone',
  description: 'FAC Mondays!',
  address: '14 palmers road',
  postCode: 'E2',
  time: '5345',
  imageUrl: 'jfdsfjk',
  attending: [ 'user:12345', 'user:67890' ],
  categories: [ 'Coding', 'Fun' ]
}

tape('testing adding a new YSU', (t) => {
  t.plan(1)
  db.addUser(client, mockUser)
    .then(response => {
      const actual = response
      const expected = 'OK'
      t.equal(actual, expected, 'assert adduser to the database')
    })
})

tape('getUser function returns the current user with correct arguments', (t) => {
  t.plan(5)
  db.getUser(client, 'user:12345')
    .then(data => {
      const actual = Object.keys(data).length
      const expected = 8
      t.equal(actual, expected, 'getUser returns correct number of arguments')

      t.equal(data.userId, 'user:12345', 'returns correct Id')
      t.equal(data.email, 'ivan@fac.com', 'returns correct email')
      t.deepEqual(data.interests, [ 'Music', 'Yoga' ], 'returns interests in correct format')
      t.deepEqual(
        data.eventsAttending,
        [ 'Football', 'Basketball' ],
        'returns eventsAttending in correct format'
      )
    })
})

tape('addEvents adds an event', (t) => {
  t.plan(1)
  db.addEvent(client, mockEvent)
    .then((response) => {
      const actual = response
      const expected = 'OK'
      t.equal(actual, expected, 'assert addEvent to db')
    })
})

tape('getEvent succesfully fetches event with right info', (t) => {
  t.plan(1)
  db.getEvent(client, 'event:12345')
    .then((data) => {
      let actual = Object.keys(data).length
      let expected = 7
      t.equal(actual, expected, 'getEvent gets event with correct number of keys')
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

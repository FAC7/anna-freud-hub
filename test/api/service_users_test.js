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

const mockEvent2 = {
  eventId: 'event:67890',
  title: 'Codingforwomen',
  description: 'FAC Tuesdays!',
  address: '14 palmers road',
  postCode: 'E2 0SY',
  time: '5346',
  imageUrl: 'KJSDFKDJSFH',
  attending: [ 'user:12345', 'user:67890', 'user:56789' ],
  categories: [ 'Javascript', 'Functions' ]
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

      t.equal(data.userId, mockUser.userId, 'returns correct Id')
      t.equal(data.email, mockUser.email, 'returns correct email')
      t.deepEqual(data.interests, mockUser.interests, 'returns interests in correct format')
      t.deepEqual(
        data.eventsAttending,
        mockUser.eventsAttending,
        'returns eventsAttending in correct format'
      )
    })
})

tape('addEvents adds an event', (t) => {
  t.plan(1)
  db.addEvent(client, mockEvent)
    .then((response) => {
      const actual = response
      const expected = 1
      t.equal(actual, expected, 'assert addEvent to db')
    })
})

tape('getEvent succesfully fetches event with right info', (t) => {
  t.plan(5)
  db.getEvent(client, 'event:12345')
    .then((data) => {
      let actual = Object.keys(data).length
      let expected = 9
      t.equal(actual, expected, 'getEvent gets event with correct number of keys')

      const { eventId, title, attending, categories } = data
      actual = eventId
      expected = mockEvent.eventId
      t.equal(actual, expected, 'getEvent returns the correct eventId')

      actual = title
      expected = mockEvent.title
      t.equal(actual, expected, 'getEvent returns the correct event title')

      actual = attending
      expected = mockEvent.attending
      t.deepEquals(actual, expected, 'getEvent returns parsed array of users attending event')

      actual = categories
      expected = mockEvent.categories
      t.deepEquals(actual, expected, 'getEvent returns parsed array of event categories')
    })
})

tape('getEventIds', (t) => {
  t.plan(1)
  db.getEventIds(client)
    .then((data) => {
      const actual = data[0]
      const expected = 'event:12345'
      t.equal(actual, expected, 'returns an array of eventIds')
    })
})

tape('getEvents', (t) => {
  t.plan(3)
  db.addEvent(client, mockEvent2)
    .then(() => db.getEventIds(client))
    .then((data) => db.getEvents(client, data))
    .then((data) => {
      let actual = data.length
      let expected = 2
      t.equal(actual, expected, 'getEvents returns correct number of events')

      actual = data[1].eventId
      expected = mockEvent.eventId
      t.equal(actual, expected, 'getEvents returns correct eventIds')

      actual = data[0].attending
      expected = mockEvent2.attending
      t.deepEquals(actual, expected, 'getEvents returns correct array of attendees')
    })
})

tape('teardown', (t) => {
  client.FLUSHDBAsync() // eslint-disable-line
    .then(() => client.QUITAsync()) // eslint-disable-line
    .then(() => t.end())

})

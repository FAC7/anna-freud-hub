const tape = require('tape')
const client = require('../../backend/db/client.js')({ env: 'TEST' })
const { mockUser, mockEvent, mockEvent2 } = require('./mock_data.js')

const eventsDB = require('../../backend/db/db_events.js')
const ysuDB = require('../../backend/db/db_ysu.js')

tape('flush database before tests run', (t) => {
  t.plan(1)
  client.FLUSHDBAsync()
    .then(() => {
      t.ok(true, 'db has been flushed')
    })
})

tape('testing adding a new YSU', (t) => {
  t.plan(1)
  ysuDB.addUser(client, mockUser)
    .then(response => {
      const actual = response
      const expected = 'OK'
      t.equal(actual, expected, 'assert adduser to the database')
    })
})

tape('getUser function returns the current user with correct arguments', (t) => {
  t.plan(5)
  ysuDB.getUser(client, 'user:12345')
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
  eventsDB.addEvent(client, mockEvent)
    .then((response) => {
      const actual = response
      const expected = 1
      t.equal(actual, expected, 'assert addEvent to db')
    })
})

tape('getEvent succesfully fetches event with right info', (t) => {
  t.plan(5)
  eventsDB.getEvent(client, 'event:12345')
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
  eventsDB.getEventIds(client)
    .then((data) => {
      const actual = data[0]
      const expected = 'event:12345'
      t.equal(actual, expected, 'returns an array of eventIds')
    })
})

tape('getEvents', (t) => {
  t.plan(3)
  eventsDB.addEvent(client, mockEvent2)
    .then(() => eventsDB.getEventIds(client))
    .then((data) => eventsDB.getEvents(client, data))
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

tape('updateAttending should change the users attending events', (t) => {
  t.plan(3)
  ysuDB.toggleUserAttending(client, 'user:12345', 'event:12345')
    .then((response) => {
      const actual = response
      const expected = 'OK'
      t.equal(actual, expected, 'response ok from redis server')
    })
    .then(() => ysuDB.getUser(client, 'user:12345'))
    .then((updatedUser) => {
      const actual = updatedUser.eventsAttending.indexOf('event:12345') > -1
      const expected = false
      t.equal(actual, expected, 'eventsAttending has removed event')
    })
    .then(() => ysuDB.toggleUserAttending(client, 'user:12345', 'event:12345'))
    .then(() => ysuDB.getUser(client, 'user:12345'))
    .then((updatedUser) => {
      const actual = updatedUser.eventsAttending.indexOf('event:12345') > -1
      const expected = true
      t.equal(actual, expected, 'eventsAttending has re added event')
    })
})

tape('toggleEventAttendingList', (t) => {
  t.plan(3)
  eventsDB.toggleEventAttendingList(client, 'event:12345', 'user:44444')
    .then((response) => {
      const actual = response
      const expected = 'OK'
      t.equal(actual, expected, 'response ok from redis')
    })
    .then(() => eventsDB.getEvent(client, 'event:12345'))
    .then((updatedEvent) => {
      const actual = updatedEvent.attending.indexOf('user:44444') > -1
      const expected = true
      t.equal(actual, expected, 'user has been added to event attending list')
    })
    .then(() => eventsDB.toggleEventAttendingList(client, 'event:12345', 'user:44444'))
    .then(() => eventsDB.getEvent(client, 'event:12345'))
    .then((updatedEvent) => {
      const actual = updatedEvent.attending.indexOf('user:44444') > -1
      const expected = false
      t.equal(actual, expected, 'user has been removed from event attending list')
    })
})

tape('teardown', (t) => {
  client.FLUSHDBAsync() // eslint-disable-line
    .then(() => client.QUITAsync()) // eslint-disable-line
    .then(() => t.end())
})

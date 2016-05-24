const tape = require('tape')
const client = require('../../backend/db/client.js')({ env: 'TEST' })
const { mockUser, mockEvent, mockEvent2, mockEvent3 } = require('./mock_data.js')

const eventsDB = require('../../backend/db/db_events.js')
const ysuDB = require('../../backend/db/db_ysu.js')

tape('flush database before tests run', (t) => {
  t.plan(1)
  client.FLUSHDBAsync()
    .then(() => {
      t.ok(true, 'db has been flushed')
    })
})

tape('deleteEvent removes from eventsList and removes the event hash', (t) => {
  t.plan(1)
  eventsDB.addEvent(client, mockEvent)
    .then(() => eventsDB.deleteEvent(client, mockEvent.eventId))
    .then((response) => {
      const actual = response
      const expected = 1
      t.equal(actual, expected, 'response from redis is aaaalright')
    })
})

tape('teardown', (t) => {
  client.FLUSHDBAsync() // eslint-disable-line
    .then(() => client.QUITAsync()) // eslint-disable-line
    .then(() => t.end())
})

const tape = require('tape')
const client = require('../../backend/db/client.js')({ env: 'TEST' })
const { mockEvent } = require('./mock_data.js')

const eventsDB = require('../../backend/db/db_events.js')

tape('flush database before tests run', (t) => {
  t.plan(1)
  client.FLUSHDBAsync()
    .then(() => {
      t.ok(true, 'db has been flushed')
    })
})

tape('deleteEvent removes from eventsList and removes the event hash', (t) => {
  t.plan(3)
  eventsDB.addEvent(client, mockEvent)
    .then(() => eventsDB.deleteEvent(client, mockEvent.eventId))
    .then((response) => {
      const actual = response
      const expected = 1
      t.equal(actual, expected, 'response from redis is aaaalright')
    })
    .then(() => eventsDB.getEvent(client, mockEvent.eventId))
    .then((data) => {
      const actual = data
      const expected = null
      t.equal(actual, expected, 'key has been deleted')
    })
    .then(() => eventsDB.getEventIds(client))
    .then((data) => {
      const actual = data.indexOf(mockEvent.eventId) === -1
      const expected = true
      t.equal(actual, expected, 'key has been deteded from eventsList')
    })
})

tape('editEvent edits an existing event', (t) => {
  const updatedDetails = {
    title: 'A new title for the event',
    description: 'an updated description for the event'
  }

  t.plan(5)
  eventsDB.addEvent(client, mockEvent)
    .then(() => eventsDB.editEvent(client, mockEvent.eventId, updatedDetails))
    .then((res) => {
      const actual = res
      const expected = 'OK'
      t.equal(actual, expected, 'redis response OK')
    })
    .then(() => eventsDB.getEvent(client, mockEvent.eventId))
    .then((data) => {
      const { title, description, date, categories } = data
      t.equal(title, updatedDetails.title, 'tile has been updated correctly')
      t.equal(description, updatedDetails.description, 'description has been updated correctly')
      t.equal(date, mockEvent.date, 'date field has been left alone correctly')
      t.deepEquals(categories, mockEvent.categories, 'categories have been left alone correctly')
    })
})

tape('teardown', (t) => {
  client.FLUSHDBAsync() // eslint-disable-line
    .then(() => client.QUITAsync()) // eslint-disable-line
    .then(() => t.end())
})

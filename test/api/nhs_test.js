const tape = require('tape')
const client = require('../../backend/db/client.js')({ env: 'TEST' })
const { mockUser, mockEvent, mockEvent2, mockEvent3, mockAdmin } = require('./mock_data.js')

const nhsDB = require('../../backend/db/db_nhs.js')

tape('flush db', (t) => {
  t.plan(1)
  client.FLUSHDBAsync()
    .then(() => t.ok(true, 'db has been flushed'))
})

tape('test add new admin', (t) => {
  t.plan(2)
  nhsDB.addAdmin(client, mockAdmin)
    .then((response) => {
      const actual = response
      const expected = 'OK'
      t.equal(actual, expected, 'got ok response from redis')
    })
    .then(() => client.HGETALLAsync(mockAdmin.adminId))
    .then((data) => {
      const actual = data.adminId
      const expected = mockAdmin.adminId
      t.equal(actual, expected, 'new nhs admin has been added')
    })
})

tape('getAdmin gets parsed admin object back', (t) => {
  t.plan(1)
  nhsDB.getAdmin(client, mockAdmin.adminId)
    .then((data) => {
      const actual = data
      const expected = mockAdmin
      t.deepEquals(actual, expected, 'correct admin retrieved')
    })
})

tape('toggleAdminEventsCreated updates the list of events admin has created', (t) => {
  t.plan(2)
  nhsDB.toggleAdminEventsCreated(client, mockEvent3.eventId, mockAdmin.adminId)
    .then((response) => {
      const actual = response
      const expected = 0
      t.equal(actual, expected, 'response from redis 0')
    })
    .then(() => nhsDB.getAdmin(client, mockAdmin.adminId))
    .then((data) => {
      const actual = data.eventsCreated.indexOf(mockEvent3.eventId) > -1
      t.ok(actual, 'event has been added to the nhs admin object')
    })
})

tape('toggleAdminEventsCreated removes an event id if it already exists', (t) => {
  t.plan(1)
  nhsDB.toggleAdminEventsCreated(client, mockEvent3.eventId, mockAdmin.adminId)
    .then(() => nhsDB.getAdmin(client, mockAdmin.adminId))
    .then((data) => {
      const actual = data.eventsCreated.indexOf(mockEvent3.eventId) === -1
      t.ok(actual, 'event has been deleted from nhs admin object')
    })
})



tape('teardown', (t) => {
  client.FLUSHDBAsync()
    .then(() => client.QUITAsync())
    .then(() => t.end())
})

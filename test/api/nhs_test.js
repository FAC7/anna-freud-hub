const tape = require('tape')
const client = require('../../backend/db/client.js')({ env: 'TEST' })
const { mockUser, mockEvent, mockEvent2, mockAdmin } = require('./mock_data.js')

const nhsDB = require('../../backend/db/db_nhs.js')

tape('flush db', (t) => {
  t.plan(1)
  client.FLUSHDBAsync()
    .then(() => t.ok(true, 'db has been flushed'))
})

tape('test add new admin', (t) => {
  t.plan(1)
  nhsDB.addAdmin(client, mockAdmin)
    .then((response) => {
      const actual = response
      const expected = 'OK'
      t.equal(actual, expected, 'new nhs admin has been added')
    })
})


tape('teardown', (t) => {
  client.FLUSHDBAsync()
    .then(() => client.QUITAsync())
    .then(() => t.end())
})

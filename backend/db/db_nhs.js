const helpers = require('./redis_helpers.js')

const db = {}

db.addAdmin = (client, adminObj) => {
  return client.HMSETAsync(adminObj.adminId,
    'adminId', adminObj.adminId,
    'firstName', adminObj.firstName,
    'lastName', adminObj.lastName,
    'email', adminObj.email,
    'password', adminObj.password,
    'eventsCreated', JSON.stringify(adminObj.eventsCreated)
  )
}

db.getAdmin = (client, adminId) => {
  return client.HGETALLAsync(adminId)
    .then((data) => helpers.parseArrayKeys([ 'eventsCreated' ], data))
}

db.updateAdminEventsCreated = (client, eventId, adminId) => {
  return client.HGETAsync(adminId, 'eventsCreated')
    .then(data => {
      const updatedEventList = JSON.parse(data).concat([ eventId ])
      return client.HSETAsync(adminId, 'eventsCreated', JSON.stringify(updatedEventList))
    })
}

module.exports = db

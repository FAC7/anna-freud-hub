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
    .catch((res) => {
      console.log(res, 'res from catch')
      return null
    })
}

db.toggleAdminEventsCreated = (client, eventId, adminId) => {
  return client.HGETAsync(adminId, 'eventsCreated')
    .then(data => {
      const eventList = JSON.parse(data)
      const eventIndex = eventList.indexOf(eventId)
      if (eventIndex > -1) {
        const updatedEventList = eventList
                                 .slice(0, eventIndex)
                                 .concat(eventList.slice(eventIndex + 1))
        return client.HSETAsync(adminId, 'eventsCreated', JSON.stringify(updatedEventList))
      } else {
        const addedEventList = eventList.concat([ eventId ])
        return client.HSETAsync(adminId, 'eventsCreated', JSON.stringify(addedEventList))
      }
    })
}

module.exports = db

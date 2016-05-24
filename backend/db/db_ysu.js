const helpers = require('./redis_helpers.js')

const db = {}

// adds a user object to the DB
db.addUser = (client, userObj) => {
  return client.HMSETAsync(userObj.userId,  //eslint-disable-line
    'userId', userObj.userId,
    'firstName', userObj.firstName,
    'lastName', userObj.lastName,
    'email', userObj.email,
    'DOB', userObj.DOB,
    'postCode', userObj.postCode,
    'interests', JSON.stringify(userObj.interests),
    'eventsAttending', JSON.stringify(userObj.eventsAttending)
  )
}

// gets a single user object from a userId
db.getUser = (client, userId) => {
  return client.HGETALLAsync(userId) //eslint-disable-line
    .then((data) => helpers.parseArrayKeys([ 'interests', 'eventsAttending' ], data))
}

// updates a single users's list of events attending
// if the user is already attending the event passed ---- it removes it
// is the user is not attending the event passed     ---- it adds it
db.toggleUserAttending = (client, userId, eventId) => {
  return db.getUser(client, userId)
    .then((data) => helpers.updateArrayKey('eventsAttending', eventId, data))
    .then((updatedData) => db.addUser(client, updatedData))
}

module.exports = db

const helpers = require('./redis_helpers.js')
const db = {} = module.exports

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

// adds an event object to the DB
db.addEvent = (client, eventObj) => {
  return client.HMSETAsync(eventObj.eventId,  //eslint-disable-line
    'eventId', eventObj.eventId,
    'title', eventObj.title,
    'description', eventObj.description,
    'address', eventObj.address,
    'time', eventObj.time,
    'postCode', eventObj.postCode,
    'imageUrl', eventObj.imageUrl,
    'attending', JSON.stringify(eventObj.attending),
    'categories', JSON.stringify(eventObj.categories)
  )
  .then(() => client.LRANGEAsync('eventsList', 0, -1))
  .then((events) => helpers.updateEventsList(client, events, eventObj.eventId))
}

// gets a single user object from a userId
db.getUser = (client, userId) => {
  return client.HGETALLAsync(userId) //eslint-disable-line
    .then((data) => helpers.parseArrayKeys([ 'interests', 'eventsAttending' ], data))
}

// get a single event object from an eventId
db.getEvent = (client, eventId) => {
  return client.HGETALLAsync(eventId) // eslint-disable-line
    .then((data) => helpers.parseArrayKeys([ 'attending', 'categories' ], data))
}

// gets an array of all the eventIds in the DB
db.getEventIds = (client) => client.LRANGEAsync('eventsList', 0, -1)

// getEvents gets a custom list of events (from an array of eventIds)
db.getEvents = (client, eventIds) => {
  const events = eventIds.map(id => db.getEvent(client, id))
  return Promise.all(events)
}

// updates a single users's list of events attending
// if the user is already attending the event passed ---- it removes it
// is the user is not attending the event passed     ---- it adds it
db.toggleUserAttending = (client, userId, eventId) => {
  return db.getUser(client, userId)
    .then((data) => helpers.updateArrayKey('eventsAttending', eventId, data))
    .then((updatedData) => db.addUser(client, updatedData))
}

// updates and event's list of users attending
// if a user is already attending -------- user is removed from list
// if the user is not already attending -- user is added to the list
db.toggleEventAttendingList = (client, eventId, userId) => {
  return db.getEvent(client, eventId)
    .then((data) => helpers.updateArrayKey('attending', userId, data))
    .then((updatedData) => db.addEvent(client, updatedData))
}

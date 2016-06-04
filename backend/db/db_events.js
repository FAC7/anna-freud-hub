const helpers = require('./redis_helpers.js')

const db = {}

// adds an event object to the DB
db.addEvent = (client, eventObj) => {
  return client.HMSETAsync(eventObj.eventId,  //eslint-disable-line
    'eventId', eventObj.eventId,
    'title', eventObj.title,
    'description', eventObj.description,
    'address', eventObj.address,
    'date', eventObj.date,
    'time', eventObj.time,
    'postCode', eventObj.postCode,
    'geoLocation', JSON.stringify(eventObj.geoLocation),
    'imageUrl', eventObj.imageUrl,
    'creatorId', eventObj.creatorId,
    'creatorFirstName', eventObj.creatorFirstName,
    'creatorLastName', eventObj.creatorLastName,
    'creatorEmail', eventObj.creatorEmail,
    'attending', JSON.stringify(eventObj.attending),
    'categories', JSON.stringify(eventObj.categories)
  )
  .then(() => client.LRANGEAsync('eventsList', 0, -1))
  .then((events) => helpers.updateEventsList(client, events, eventObj.eventId))
}

// get a single event object from an eventId
db.getEvent = (client, eventId) => {
  return client.HGETALLAsync(eventId) // eslint-disable-line
    .then((data) => helpers.parseArrayKeys([ 'attending', 'categories', 'geoLocation' ], data))
}

db.editEvent = (client, eventId, updatedDetails) => {
  return db.getEvent(client, eventId)
    .then((data) => Object.assign({}, data, updatedDetails))
    .then((updated) => db.addEvent(client, updated))
}

// delete event hash and id from eventslist
db.deleteEvent = (client, eventId) => {
  return client.DELAsync(eventId)
    .then(() => db.getEventIds(client))
    .then(() => client.LREMAsync('eventsList', 0, eventId))
}

// gets an array of all the eventIds in the DB
db.getEventIds = (client) => client.LRANGEAsync('eventsList', 0, -1)

// getEvents gets a custom list of events (from an array of eventIds)
db.getEvents = (client, eventIds) => {
  const events = eventIds.map(id => db.getEvent(client, id))
  return Promise.all(events)
}

// updates and event's list of users attending
// if a user is already attending -------- user is removed from list
// if the user is not already attending -- user is added to the list
db.toggleEventAttendingList = (client, eventId, userId) => {
  return db.getEvent(client, eventId)
    .then((data) => helpers.updateArrayKey('attending', userId, data))
    .then((updatedData) => db.addEvent(client, updatedData))
}

module.exports = db

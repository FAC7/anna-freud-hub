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
  .then(() => client.LPUSHAsync('eventsList', eventObj.eventId))
}

// gets a single user object from a userId
db.getUser = (client, userId) => {
  return client.HGETALLAsync(userId) //eslint-disable-line
    .then((data) => Object.assign(
        // parses stringified arrays from redis
        // returns in a fresh object
        {},
        data,
        { interests: JSON.parse(data.interests),
          eventsAttending: JSON.parse(data.eventsAttending)
        })
    )
}

// get a single event object from an eventId
db.getEvent = (client, eventId) => {
  return client.HGETALLAsync(eventId) // eslint-disable-line
    .then((data) => Object.assign(
        // parses stringified arrays from redis
        // returns in a fresh object
        {},
        data,
        { attending: JSON.parse(data.attending),
          categories: JSON.parse(data.categories)
        })
    )
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
    .then((data) => {
      const eventIndex = data.eventsAttending.indexOf(eventId)
      if (eventIndex > -1) {
        const updatedArr = data.eventsAttending.slice(0, eventIndex)
          .concat(data.eventsAttending.slice(eventIndex + 1))
        return Object.assign({}, data, { eventsAttending: updatedArr })
      } else {
        const updatedArr = data.eventsAttending.concat([ eventId ])
        return Object.assign({}, data, { eventsAttending: updatedArr })
      }
    })
    .then((updatedData) => db.addUser(client, updatedData))
}

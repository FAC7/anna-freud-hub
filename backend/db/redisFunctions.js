// const createClient = require('./client.js')
// const client = createClient()
// const Bluebird = require('bluebird')

const db = {} = module.exports

db.addMockUser = (user) => {
  return client.HMSETAsync(user.firstName,  //eslint-disable-line
    'firstName', user.firstName,
    'lastName', user.lastName,
    'email', user.email
  )
}

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

db.getEventIds = (client) => client.LRANGEAsync('eventsList', 0, -1)

db.getEvents = (client, eventIds) => {
  const events = eventIds.map(id => db.getEvent(client, id))
  return Promise.all(events)
}

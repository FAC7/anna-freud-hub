// const createClient = require('./client.js')
// const client = createClient()

const addMockUser = (user) => {
  return client.HMSETAsync(user.firstName,  //eslint-disable-line
    'firstName', user.firstName,
    'lastName', user.lastName,
    'email', user.email
  )
}

const addUser = (client, userObj) => {
  return client.HMSETAsync(userObj.userId,  //eslint-disable-line
    'firstName', userObj.firstName,
    'lastName', userObj.lastName,
    'email', userObj.email,
    'DOB', userObj.DOB,
    'postCode', userObj.postCode,
    'interests', JSON.stringify(userObj.interests),
    'eventsAttending', JSON.stringify(userObj.eventsAttending)
  )
}

const addEvents = (eventObj) => {
  return client.HMSETAsync(eventObj.eventId,  //eslint-disable-line
    'title', eventObj.title,
    'description', eventObj.description,
    'address', eventObj.address,
    'time', eventObj.time,
    'postCode', eventObj.postCode,
    'imageUrl', eventObj.imageUrl,
    'attending', JSON.stringify(eventObj.attending),
    'categories', JSON.stringify(eventObj.categories)
  )
}

const getUser = (userId) => {
  return client.HGETALLAsync(userId)  //eslint-disable-line
}

module.exports= {
  addMockUser,
  getUser,
  addUser,
  addEvents
}

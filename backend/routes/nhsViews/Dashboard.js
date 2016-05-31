//TODO get suitable events from db


const eventsArray = [ {
  title: 'My first event',
  description: 'This is a descrption of my first event',
  address: '21 Facster avenue, Bethnal Green, London',
  postCode: 'N10 3BE',
  geoLocation: [ 'string', 'string' ],
  date: '31/05/2016',
  time: '20:30',
  imageUrl: 'http://www.fillmurray.com/200/300',
  creatorId: '898989',
  creatorFirstName: 'Jack',
  creatorLastName: 'Murray',
  creatorEmail: 'Jack@Murray.com',
  attending: [ '1212', '4545' ], // userIds
  categories: [ 'Cooking', 'Cooking', 'Art', 'Educational' ],
  eventId: 'My first event:93435345'
}, {
  title: 'My second event',
  description: 'This is a descrption of my first event',
  address: '21 Facster avenue, Bethnal Green, London',
  postCode: 'N10 3BE',
  geoLocation: [ 'string', 'string' ],
  date: '31/05/2016',
  time: '20:30',
  imageUrl: 'http://www.fillmurray.com/200/300',
  creatorId: '898989',
  creatorFirstName: 'Jack',
  creatorLastName: 'Murray',
  creatorEmail: 'Jack@Murray.com',
  attending: [ '1212', '4545' ], // userIds
  categories: [ 'Cooking', 'Cooking', 'Art', 'Educational' ],
  eventId: 'My first event:999995'
} ]

exports.register = (server, options, next) => {
  server.route([ {
    path: '/',
    method: 'GET',
    config: {
      handler: (request, reply) => {
        // get all events by this userEvents -> adminsDB[adminId]eventsCreated
        // can access email (adminId) from cookie
        reply.view('dashboard', { events: eventsArray })
      }
    }
  } ])

  return next()
}

exports.register.attributes = {
  name: 'nhs events dashboard'
}

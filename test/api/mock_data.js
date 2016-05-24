const mock = {} = module.exports

mock.mockUser = {
  userId: 'user:12345',
  firstName: 'Ivan',
  lastName: 'Gonzalez',
  email: 'ivan@fac.com',
  DOB: '23-03-89',
  postCode: 'SW9  ',
  interests: [ 'Music', 'Yoga' ],
  eventsAttending: [ 'event:12345', 'event:67890' ]
}

mock.mockEvent = {
  eventId: 'event:12345',
  title: 'Codingforeveryone',
  description: 'FAC Mondays!',
  address: '14 palmers road',
  postCode: 'E2',
  time: '5345',
  imageUrl: 'jfdsfjk',
  creatorId: 'admin:12345',
  creatorFirstName: 'Jane',
  creatorLastName: 'Doe',
  creatorEmail: 'Jane@hotmail.com',
  attending: [ 'user:12345', 'user:67890' ],
  categories: [ 'Coding', 'Fun' ]
}

mock.mockEvent2 = {
  eventId: 'event:67890',
  title: 'Codingforwomen',
  description: 'FAC Tuesdays!',
  address: '14 palmers road',
  postCode: 'E2 0SY',
  time: '5346',
  imageUrl: 'KJSDFKDJSFH',
  creatorId: 'admin:12345',
  creatorFirstName: 'Jane',
  creatorLastName: 'Doe',
  creatorEmail: 'Jane@hotmail.com',
  attending: [ 'user:12345', 'user:67890', 'user:56789' ],
  categories: [ 'Javascript', 'Functions' ]
}

mock.mockEvent3 = {
  eventId: 'event:90876',
  title: 'FP with Andre',
  description: 'Functional Tuesdays!',
  address: '14 palmers road',
  postCode: 'E2 0SY',
  time: '9874',
  imageUrl: 'JKHJKHJAKSKA',
  creatorId: 'admin:12345',
  creatorFirstName: 'Jane',
  creatorLastName: 'Doe',
  creatorEmail: 'Jane@hotmail.com',
  attending: [ 'user:12345', 'user:67890' ],
  categories: [ 'FP' ]
}

mock.mockAdmin = {
  adminId: 'admin:12345',
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'Jane@hotmail.com',
  password: '1234',
  eventsCreated: [ 'event:12345', 'event:67890' ]
}

import { ACTIVE_EVENT } from '../Actions/actions_index.js'
// const initialState = {
//   address: '17 Hillmarton Road',
//   attending: [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3 ],
//   categories: [ 'Wellness', 'Physical Health' ],
//   creatorEmail: 'admin@walthamforest.gov.uk',
//   creatorFirstName: 'Mr',
//   creatorId: 'admin@walthamforest.gov.uk',
//   creatorLastName: 'Admin',
//   date: '14-08-16',
//   description: 'Come and meditate guys!',
//   eventId: 'Let\'s Meditate!:58698',
//   imageUrl: 'http://www.cfshealth.com/wp-content/uploads/2015/10/meditate-girl.jpg',
//   postCode: 'E2 0SY',
//   time: '19:00',
//   title: 'Let\'s Meditate!'
// }

export default (state = '', action) => {
  switch (action.type) {
  case ACTIVE_EVENT:
    return action.payload
  default:
    return state
  }
}

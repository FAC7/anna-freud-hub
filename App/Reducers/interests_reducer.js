export default (state = [], action) => {
  console.log('reducer called')
  switch (action.type) {
  case 'SET_INTERESTS':
    return action.payload
  default:
    return state
  }
}

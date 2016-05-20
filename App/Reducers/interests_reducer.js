export default (state = [], action) => {
  switch (action.type) {
  case 'SET_INTERESTS':
    return action.payload
  default:
    console.log('reducer called')
    return state
  }
}

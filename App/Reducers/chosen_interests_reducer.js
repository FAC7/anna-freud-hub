module.exports = (state = [], action) => {
  switch (action.type) {
  case 'SET_INTERESTS':
    const interestIndex = state.indexOf(action.payload)
    if (interestIndex > -1) {
      return [
        ...state.slice(0, interestIndex),
        ...state.slice(interestIndex + 1)
      ]
    } else {
      return [ ...state, action.payload ]
    }
  default:
    return state
  }
}

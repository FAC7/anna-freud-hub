const tape = require('tape')

const interestsReducer = require('../../App/Reducers/chosen_interests_reducer.js')

tape('interest reducer returns [] as default', (t) => {
  const expected = []
  const actual = interestsReducer([], {})
  t.deepEqual(actual, expected, 'interest reducer returns correct default state ')
  t.end()
})

tape('SET_INTERESTS action adds payload to state', (t) => {
  const expected = [ 'Music' ]
  const actual = interestsReducer([], { type: 'SET_INTERESTS', payload: 'Music' })
  t.deepEqual(actual, expected, 'state is updated')
  t.end()
})

tape('SET_INTERESTS action adds second interest to state', (t) => {
  const expected = [ 'Music', 'Fine Arts' ]
  const actual = interestsReducer([ 'Music' ], { type: 'SET_INTERESTS', payload: 'Fine Arts' })
  t.deepEqual(actual, expected, 'state is correctly updated')
  t.end()
})

tape('SET_INTERESTS action toggles existing interest', (t) => {
  const initialState = [ 'Music', 'Fine Arts' ]
  const action = { type: 'SET_INTERESTS', payload: 'Fine Arts' }

  const expected = [ 'Music' ]
  const actual = interestsReducer(initialState, action)
  t.deepEqual(actual, expected, 'state is correctly updated')
  t.end()
})

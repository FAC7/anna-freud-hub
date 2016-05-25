import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore)
import reducers from './App/Reducers/root_reducer.js'

import Router from './App/Containers/Router.js'

class AnnaFreudHub extends Component {
  render () {
    return (
      <Provider store={createStoreWithMiddleWare(reducers)}>
        <Router />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  navBar: {
    backgroundColor: '#96CEFF',
    alignSelf: 'flex-end'
  }
})

AppRegistry.registerComponent('AnnaFreudHub', () => AnnaFreudHub)

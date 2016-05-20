import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import renderScene from './App/Views/renderScene.js'
import reducers from './App/Reducers/root_reducer.js'

class AnnaFreudHub extends Component {

  render () {
    return (
      <Provider store={createStore(reducers)}>
        <Navigator
          initialRoute={{ name: 'interests', index: 0 }}
          renderScene={renderScene}
        />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('AnnaFreudHub', () => AnnaFreudHub)

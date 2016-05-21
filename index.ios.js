import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import renderScene from './App/Views/renderScene.js'
import NavigationBarRouteMapper from './App/Components/NavigationBarRouteMapper.js'

import NavigationBar from './App/Components/NavigationBar.js'

import reducers from './App/Reducers/root_reducer.js'

class AnnaFreudHub extends Component {

  render () {
    return (
      <Provider store={createStore(reducers)}>
        <Navigator
          initialRoute={{ name: 'HUB', index: 0 }}
          renderScene={renderScene}
          style={styles.nav}
          navigationBar={
            <NavigationBar
              style={styles.navBar}
              routeMapper={NavigationBarRouteMapper}
            />
          }
        />
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

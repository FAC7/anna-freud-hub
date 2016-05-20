import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native'

import renderScene from './App/Views/renderScene.js'

class AnnaFreudHub extends Component {

  render () {
    return (
      <Navigator
        initialRoute={{ name: 'interests', index: 0 }}
        renderScene={renderScene}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('AnnaFreudHub', () => AnnaFreudHub)

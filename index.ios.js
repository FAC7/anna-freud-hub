import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native'

import Login from './App/Views/Login.js'
import Interests from './App/Views/Interests.js'


class AnnaFreudHub extends Component {

  renderScene (route, nav) {
    switch (route.name) {
    case 'login':
      return <Login navigator={nav} />
    case 'interests':
      return <Interests navigator={nav} />
    default:
      return <Text> Default </ Text>
    }
  }
  render () {
    return (
      <Navigator
        initialRoute={{ name: 'login', index: 0 }}
        renderScene={this.renderScene.bind(this)}
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

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Navigator,
} from 'react-native'


import renderScene from './App/Views/renderScene.js'
import NavigationBarRouteMapper from './App/Components/NavigationBarRouteMapper.js'

class AnnaFreudHub extends Component {

  render () {
    return (
      <Navigator
        initialRoute={{ name: 'dashboard', index: 0 }} //change back to 'login'
        renderScene={renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.nav}
          />
        }
      />
    )
  }
}


const styles = StyleSheet.create({
  nav: {
    height: 60,
    backgroundColor: '#96CEFF',
    marginTop: 675
  }
})

AppRegistry.registerComponent('AnnaFreudHub', () => AnnaFreudHub)

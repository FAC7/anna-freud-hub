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

import renderScene from './App/Views/renderScene.js'
import NavigationBarRouteMapper from './App/Components/NavigationBarRouteMapper.js'
import NavigationBar from './App/Components/NavigationBar.js'
import reducers from './App/Reducers/root_reducer.js'
import Router from './App/alternative_router.js'

// class AnnaFreudHub extends Component {
//   render () {
//     return (
//       <Provider store={createStoreWithMiddleWare(reducers)}>
//         <Navigator
//           initialRoute={{ name: 'Interests', index: 0 }}
//           configureScene={() => Navigator.SceneConfigs.HorizontalSwipeJump}
//           renderScene={renderScene}
//           style={styles.nav}
//           navigationBar={
//             <NavigationBar
//               style={styles.navBar}
//               routeMapper={NavigationBarRouteMapper}
//             />
//           }
//         />
//       </Provider>
//     )
//   }
// }

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

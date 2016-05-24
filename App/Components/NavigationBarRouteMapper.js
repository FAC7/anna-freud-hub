import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import routes from '../Views/routes.js'

// Returns the Key for the next route based on
// the current route.name and position that we want (left/centre/right)
const getRouteKey = (currentRouteName, position) => {
  if (!currentRouteName) {return null}
  return navRoutes[currentRouteName][position]
}

/*eslint-disable */
// if array length is 2, the second custom string will be displayed
const navRoutes = {
  'Login':      { left: [null], 			         centre: [null], 			               right: [null] },
  'Interests':  { left: [null], 			         centre: ['DASHBOARD', 'Submit'],    right: [null] },
  'HUB':        { left: ['INTERESTS'],	       centre: ['DASHBOARD'], 	           right: ['MY_EVENTS'] },
  'Event Info': { left: ['DASHBOARD', 'Back'], centre: [null], 				             right: [null] },
  'My Events':  { left: ['INTERESTS'],         centre: ['DASHBOARD'], 	           right: ['MY_EVENTS'] }
}
/*eslint-enable */

// Returns a nav button
// routes[routeKey] = routeValue
// routes['INTERESTS'] = Interests
const navButton = (routeKey, navigator, position, customStyles) => {
  const onPress = () => {
    navigator.push({ name: routes[routeKey[0]] })
  }
  // debugger

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles['navBar' + position + 'Button']}
    >
      <Text style={[ styles.navBarText, styles.navBarButtonText, customStyles ]} >
        {routeKey.length === 2 ? routeKey[1] : routes[routeKey[0]]}
      </Text>
    </TouchableOpacity>
  )
}

// This object is required by Navigator.NavigationBar
// functions LeftButton, RightButton & Title are required
const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    const nextRouteKey = getRouteKey(route.name, 'left')
    return navButton(nextRouteKey, navigator, 'Left')
  },

  RightButton: (route, navigator, index, navState) => {
    const nextRouteKey = getRouteKey(route.name, 'right')
    return navButton(nextRouteKey, navigator, 'Right')
  },

  Title: (route, navigator, index, navState) => {
    const nextRouteKey = getRouteKey(route.name, 'centre')
    return navButton(nextRouteKey, navigator, 'Centre', styles.navBarTitleText)
  },

}

const styles = StyleSheet.create({
  navBarText: {
    fontSize: 18,
  },
  navBarTitleText: {
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 2,
    fontFamily: 'Helvetica',
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarCentreButton: {
  },
  navBarButtonText: {
    color: '#00498F',
  }
})

export default NavigationBarRouteMapper

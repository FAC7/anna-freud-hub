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
const navRoutes = {
  'Login':      { left: null, 			  centre: null, 			     right: null },
  'Interests':  { left: null, 			  centre: 'DASHBOARD', 		 right: null },
  'HUB':        { left: 'INTERESTS',	centre: 'DASHBOARD', 	   right: 'MY_EVENTS' },
  'Event Info': { left: 'BACK',       centre: null, 				   right: null },
  'My Events':  { left: 'INTERESTS',  centre: 'DASHBOARD', 	   right: 'MY_EVENTS' }
}
/*eslint-enable */

// Returns a nav button
// routes[routeKey] = routeValue
// routes[INTERESTS] = Interests
const navButton = (routeKey, navigator, position) => {
  const onPress = () => {
    if (routeKey === 'BACK') {navigator.pop()}
    else {
      navigator.push({ name: routes[routeKey] })
    }
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles['navBar' + position + 'Button']}
    >
      <Text style={[ styles.navBarText, styles.navBarButtonText ]} >
        {routeKey === 'BACK' ? 'BACK' : routes[routeKey]}
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
    return navButton(nextRouteKey, navigator, 'Centre')
  },

}

const styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
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
    color: '#5890FF',
  }
})

export default NavigationBarRouteMapper

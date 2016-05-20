import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import routes from '../Views/routes.js'

const getNavRoute = (current, position) => {
  if (!current) {return null}
  return navRoutes[current][position]
}

/*eslint-disable */
const navRoutes = {
  'log in':     { left: null, 			  title: null, 			     right: null },
  'interests':  { left: null, 			  title: 'Submit', 			 right: null },
  'dashboard':  { left: 'interests',	title: 'dashboard', 	 right: 'myEvents' },
  'events': 	  { left: 'Back',       title: null, 				   right: null },
  'my events':  { left: 'interests',  title: 'dashboard', 	 right: 'myEvents' }
}
/*eslint-enable */

const navButton = (routeTitle, navigator, position) => {
  return (
    <TouchableOpacity
      onPress={() => navigator.push({ name: routes[routeTitle] })}
      style={styles['navBar' + position + 'Button']}
    >
      <Text style={[ styles.navBarText, styles.navBarButtonText ]} >
        {routes[routeTitle]}
      </Text>
    </TouchableOpacity>
  )
}

const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    const nextRouteName = getNavRoute(route.name, 'left')
    return navButton(nextRouteName, navigator, 'Left')
  },

  RightButton: (route, navigator, index, navState) => {
    const nextRouteName = getNavRoute(route.name, 'right')
    return navButton(nextRouteName, navigator, 'Right')
  },

  Title: (route, navigator, index, navState) => {
    return (
      <TouchableOpacity
        onPress={() => navigator.push({ name: 'dashboard' })}
        style={styles.navBarRightButton}
      >
        <Text style={[ styles.navBarText, styles.navBarTitleText ]} >
          HUB {index}
        </Text>
      </TouchableOpacity>
    )
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
  navBarButtonText: {
    color: '#5890FF',
  }
})

export default NavigationBarRouteMapper

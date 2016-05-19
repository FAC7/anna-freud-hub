import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'


const NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    if (index === 0) {
      return null
    }
    var previousRoute = navState.routeStack[index - 1]
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}
      >
        <Text style={[ styles.navBarText, styles.navBarButtonText ]} >
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    )
  },

  RightButton: (route, navigator, index, navState) => {
    return (
      <TouchableOpacity
        onPress={() => navigator.push({ name: 'my events' })}
        style={styles.navBarRightButton}
      >
        <Text style={[ styles.navBarText, styles.navBarButtonText ]} >
          My Events
        </Text>
      </TouchableOpacity>
    )
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

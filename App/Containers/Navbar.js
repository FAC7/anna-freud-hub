import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native'

import settingsIcon from '../Assets/Icons/settings.png'
import hubIcon from '../Assets/Icons/hub.png'
import myEventsIcon from '../Assets/Icons/myEvents.png'

import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

class Navbar extends Component {

  highlightIcon (route, currentRoute) {
    return route === currentRoute ? { tintColor: '#fff' } : {}
  }

  setRoute (route) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.props.newRoute(route)
  }

  render () {
    return (
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => this.setRoute(routes.INTERESTS)}
        >
          <Image
            style={[ styles.icon, this.highlightIcon(routes.INTERESTS, this.props.router.name) ]}
            source={settingsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setRoute(routes.HUB)}
        >
          <Image
            style={[ styles.icon, this.highlightIcon(routes.HUB, this.props.router.name) ]}
            source={hubIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setRoute(routes.MY_EVENTS)}
        >
          <Image
            style={[ styles.icon, this.highlightIcon(routes.MY_EVENTS, this.props.router.name) ]}
            source={myEventsIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { newRoute })(Navbar)

const styles = StyleSheet.create({
  menu: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: 'rgb(186, 214, 255)'
  },
  icon: {
    width: 25,
    height: 25
  }
})

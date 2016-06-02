import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
  LayoutAnimation,
  AsyncStorage,
  Text
} from 'react-native'

import { connect } from 'react-redux'
import routes from '../Utils/routes.js'
import { newRoute } from '../Actions/actions_routing.js'
import InterestsList from '../Components/InterestsList.js'

class Interests extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <InterestsList />
        <TouchableHighlight
          style={styles.menu}
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
            AsyncStorage.setItem('interests', JSON.stringify(this.props.chosenInterests))
            // TODO need to send data off to server
            this.props.newRoute(routes.HUB)
          }}
        >
          <Text style={styles.menuItem}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps, { newRoute })(Interests)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  menu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: 'rgb(186, 214, 255)'
  },
  menuItem: {
    color: 'rgb(42, 123, 231)',
    textAlign: 'center',
    fontSize: 15,
    flex: 1
  }
})

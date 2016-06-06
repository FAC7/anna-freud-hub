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
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'

import InterestsList from '../Components/InterestsList.js'
// TODO send log out down as a prop function

class Interests extends Component {

  componentWillUnmount () {
    this.setInterests()
  }

  setInterests () {
    const chosenInterests = this.props.chosenInterests
    //set to async storage
    AsyncStorage.setItem('interests', JSON.stringify(chosenInterests))
    //send data to db
    const interestObj = {
      userId: 'ysu:' + this.props.userDetails.email,
      interests: chosenInterests
    }
    // const url = 'http://annafreudhub.herokuapp.com/setinterests'
    const url = 'http://localhost:4000/setinterests'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(interestObj)
    })
    //change route
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <TouchableHighlight
          onPress={() => {
            AsyncStorage.clear()
            this.props.newRoute(routes.SIGNUP)
          }}
        >
          <Text>LogOut</Text>
        </TouchableHighlight>
        <InterestsList />
        <TouchableHighlight
          style={styles.menu}
          onPress={() => this.props.newRoute(routes.HUB)}
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
    flex: 1
  },
  menu: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 60,
    height: 60,
    backgroundColor: '#031f39'
  },
  menuItem: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    flex: 1
  }
})

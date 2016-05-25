import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  LayoutAnimation
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'

import Tile from '../Components/Tile.js'

class Hub extends Component {
  setRoute (route) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.props.newRoute(route)
  }

  render () {
    console.log(this.props.allEvents)
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Events Near You</Text>
        <ScrollView>
          <Tile
            title={'Band Camp'}
            imageSource={'http://www.fillmurray.com/g/200/300'}
            attending={33}
            distance={10}
            linkRoute={() => {this.setRoute('Event Info')}}
          />

          <Tile
            title={'Bowling'}
            imageSource={'http://www.fillmurray.com/g/200/300'}
            attending={43}
            distance={15}
          />

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allEvents: state.allEvents
  }
}

export default connect(mapStateToProps, { newRoute })(Hub)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#6076C0'
  }
})

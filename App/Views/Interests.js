import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'

import { connect } from 'react-redux'

import Row from '../Components/InterestsRow.js'

import { setInterest } from '../Actions/actions_index.js'

class Interests extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'HUB'
    })
  }

  renderInterests () {

    const interestArr = [ 'Music', 'Art', 'Cooking', 'Yoga', 'Meditation' ]

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {interestArr.map((interest, index) => {
          console.log(this.props.interests)
          return (
            <Row
              key={index}
              interest={interest}
              active={this.props.interests}
              setInterest={this.props.setInterest.bind(this)}
            />)}
          )
        }
      </ScrollView>
    )
  }

  render () {
    console.log(this.props)
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Choose Your Interests</Text>
        {this.renderInterests()}
      </View>
    )
  }
}

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
  },
  container: {
    backgroundColor: '#257AC4',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 30
  }
})

const mapStateToProps = (state) => {
  return {
    interests: state.interests
  }
}

export default connect(mapStateToProps, { setInterest })(Interests)

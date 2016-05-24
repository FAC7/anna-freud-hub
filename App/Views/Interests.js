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
import ListViewTest from '../Components/ListViewTest.js'

class Interests extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'HUB'
    })
  }

  // renderInterests () {
  //   return (
  //     <ScrollView contentContainerStyle={styles.container}>
  //       {this.props.interestsOptions.map((interestPair, index) => {
  //         return (
  //           <Row
  //             key={index}
  //             interestPair={interestPair}
  //             active={this.props.chosenInterests}
  //             setInterest={this.props.setInterest.bind(this)}
  //           />)}
  //         )
  //       }
  //     </ScrollView>
  //   )
  // }

  // render () {
  //   console.log(this.props)
  //   return (
  //     <View style={styles.mainContainer}>
  //       <Text style={styles.title}>Choose Your Interests</Text>
  //       {this.renderInterests()}
  //     </View>
  //   )
  // }

  render () {
    return (
      <ListViewTest />
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
    chosenInterests: state.chosenInterests,
    interestsOptions: state.interestsOptions
  }
}

export default connect(mapStateToProps, { setInterest })(Interests)

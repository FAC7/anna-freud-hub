import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'
import introText from '../Data/IntroText.js'
import arrow from '../Assets/Icons/arrow.png'

class Intro extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HUB</Text>
        <Text style={styles.subTitle}>{introText.p1}</Text>
        <Image
          source={arrow}
          style={styles.arrow}
        />
        <TouchableOpacity
          onPress={() => this.props.newRoute(routes.SIGNUP)}
        >
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps, { newRoute })(Intro)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#257AC4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 50,
    marginTop: -100,
    marginBottom: 50,
    letterSpacing: 4
  },
  subTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 50,
    textAlign: 'center'
  },
  arrow: {
    width: 50,
    height: 50
  },
  text: {
    marginTop: 10,
    color: '#fff'
  }
})

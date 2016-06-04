import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Animated,
  Easing
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'
import routes from '../Utils/routes.js'
import introText from '../Data/IntroText.js'
import arrow from '../Assets/Icons/arrow.png'

class Intro extends Component {

  constructor () {
    super()
    this.state = {
      bounce: [
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
      ]
    }
  }

  componentDidMount () {
    Animated.stagger(500,
      this.state.bounce.map((val) => Animated.timing(val, {
        toValue: 1,
        easing: Easing.elastic(2),
        duration: 3000
      }))).start()
  }

  render () {
    const bounce1 = { opacity: this.state.bounce[0] }
    const bounce2 = { opacity: this.state.bounce[1] }
    const bounce3 = { opacity: this.state.bounce[2] }
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
        />
        <Animated.Text style={[ styles.title, bounce1 ]}>HUB</Animated.Text>
        <Animated.View style={bounce2}>
          <Text style={styles.subTitle}>{introText.p1}</Text>
        </Animated.View>
        <TouchableOpacity
          onPress={() => this.props.newRoute(routes.SIGNUP)}
        >
          <Animated.View style={bounce3}>
            <Image
              source={arrow}
              style={styles.arrow}
            />
          </Animated.View>
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
  }
})

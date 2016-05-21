import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class Login extends Component {

  navTester () {
    this.props.navigator.push({
      name: 'Interests'
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HUB</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>name</Text>
            <TextInput style={styles.input} placeholder='enter name' />
          </View>
          <TextInput style={styles.input} placeholder='*******' />
        </View>
        <TouchableHighlight onPress={this.navTester.bind(this)}>
          <Text style={styles.arrow}> ></Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2378C1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    letterSpacing: 7,
    marginTop: -120,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    margin: 60,
    color: '#fff'
  },
  arrow: {
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 'bold'
  },
  inputContainer: {
    backgroundColor: '#fff'
  },
  label: {
    color: '#122664',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    fontSize: 10,
    padding: 20,
    height: 50,
    width: 150
  }
})

import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Dimensions,
  DatePickerIOS
} from 'react-native'

const { width } = Dimensions.get('window')

export default class SignUp extends React.Component {
  render () {
    console.log(this.props.signup)
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Signup to browse all the events in your local area.</Text>
        </View>
        <View style={styles.twoInputContainer}>
          <TextInput
            style={[ styles.inputText, styles.twoInput, { marginRight: 10 } ]}
            placeholder='First Name'
            autoCorrect={false}
            onChangeText={text => this.props.updateInput('firstName', text)}
          />
          <TextInput
            style={[ styles.inputText, styles.twoInput ]}
            placeholder='Last Name'
            autoCorrect={false}
            onChangeText={text => this.props.updateInput('lastName', text)}
          />
        </View>
        <TextInput
          style={styles.inputText}
          placeholder='Email'
          autoCorrect={false}
          autoCapitalize={'none'}
          onChangeText={text => this.props.updateInput('email', text)}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Password'
          autoCorrect={false}
          autoCapitalize={'none'}
          onChangeText={text => this.props.updateInput('password', text)}
          secureTextEntry
        />
        <TextInput
          style={styles.inputText}
          placeholder='Postcode'
          autoCorrect={false}
          autoCapitalize={'characters'}
          onChangeText={text => this.props.updateInput('postCode', text)}
        />
        <TextInput
          style={styles.inputText}
          placeholder='Date of Birth'
          autoCorrect={false}
          onChangeText={text => this.props.updateInput('dateOfBirth', text)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    width: width - 20,
    marginBottom: 20
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: width - 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white'
  },
  twoInputContainer: {
    flexDirection: 'row'
  },
  twoInput: {
    flex: 1,
    width: ((width - 20) / 2) - 5,  //eslint-disable-line
  }
})

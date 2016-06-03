import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation,
  StyleSheet,
  Image
} from 'react-native'

import { connect } from 'react-redux'

// const this.props.activeEvent = {
//   address: '17 Hillmarton Road',
//   attending: [ 1, 2, 3 ],
//   categories: [ 'Wellness', 'Physical Health' ],
//   creatorEmail: 'admin@walthamforest.gov.uk',
//   creatorFirstName: 'Mr',
//   creatorId: 'admin@walthamforest.gov.uk',
//   creatorLastName: 'Admin',
//   date: '14-08-16',
//   description: 'Come and meditate guys!',
//   eventId: 'Let\'s Meditate!:58698',
//   imageUrl: 'http://www.cfshealth.com/wp-content/uploads/2015/10/meditate-girl.jpg',
//   postCode: 'E2 0SY',
//   time: '19:00',
//   title: 'Let\'s Meditate!'
// }

class EventInfo extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={{ uri: this.props.activeEvent.imageUrl }}
        />
        <View>
          <View>
            <Text>
              {this.props.activeEvent.address}
            </Text>
            <Text>
              {this.props.activeEvent.attending.length}
            </Text>
          </View>
        </View>
        <View>
          <Text>{this.props.activeEvent.creatorEmail}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeEvent: state.activeEvent
  }
}

export default connect(mapStateToProps)(EventInfo)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  image: {
    height: 250,
  }
})

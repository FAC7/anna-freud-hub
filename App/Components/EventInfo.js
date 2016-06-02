import React from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  LayoutAnimation,
  StyleSheet,
  Image
} from 'react-native'

const event = {
  address: '17 Hillmarton Road',
  attending: [ 1, 2, 3 ],
  categories: [ 'Wellness', 'Physical Health' ],
  creatorEmail: 'admin@walthamforest.gov.uk',
  creatorFirstName: 'Mr',
  creatorId: 'admin@walthamforest.gov.uk',
  creatorLastName: 'Admin',
  date: '14-08-16',
  description: 'Come and meditate guys!',
  eventId: 'Let\'s Meditate!:58698',
  imageUrl: 'http://www.cfshealth.com/wp-content/uploads/2015/10/meditate-girl.jpg',
  postCode: 'E2 0SY',
  time: '19:00',
  title: 'Let\'s Meditate!'
}

export default () => {
  return (
    <View style={styles.mainContainer}>

      <Image
        style={styles.image}
        source={{ uri: event.imageUrl }}
      />

      <View>
        <View>
          <Text>
            {event.address}
          </Text>
          <Text>
            {event.attending.length}
          </Text>
        </View>
      </View>

      <View>
        <Text>{event.creatorEmail}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  image: {
    height: 250,
  }
})

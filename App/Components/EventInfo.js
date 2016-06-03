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

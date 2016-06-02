import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  ListView,
  LayoutAnimation
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'

import Tile from '../Components/Tile.js'
import myEventsData from '../Data/test_myEvents_data.js'

class MyEvents extends Component {

  constructor () {
    super()
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: this.ds.cloneWithRows(myEventsData)
    }
  }

  setRoute (route) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.props.newRoute(route)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <ListView
            renderFooter={() => <View style={styles.footer} />}
            contentContainerStyle={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              return (
                <Tile
                  event={rowData}
                  linkRoute={() => this.setRoute('Event Info')}
                />
              )
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

export default connect(null, { newRoute })(MyEvents)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  footer: {
    height: 90,
    width: 500
  }
})

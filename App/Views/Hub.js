import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  ListView
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'

import Tile from '../Components/Tile.js'
import eventData from '../Data/test_events_data.js'

class Hub extends Component {

  constructor () {
    super()
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: this.ds.cloneWithRows(eventData)
    }
  }

  setRoute (route) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.props.newRoute(route)
  }

  // TODO make each event go to correct event info with setRoute()

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Events Near You</Text>
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

export default connect(null, { newRoute })(Hub)

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
    flex: 1
  },
  footer: {
    height: 90,
    width: 500
  }
})

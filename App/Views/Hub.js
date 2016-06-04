import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  ListView,
  Text
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'
import { activeEvent } from '../Actions/actions_index.js'

import Tile from '../Components/Tile.js'

class Hub extends Component {

  updateDataSource () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return ds.cloneWithRows(this.props.allEvents)
  }

  setRoute (route, event) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.props.activeEvent(event)
    this.props.newRoute(route)
  }

  // TODO make each event go to correct event info with setRoute()

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          {this.props.allEvents.length > 0 ?
            <ListView
              renderFooter={() => <View style={styles.footer} />}
              contentContainerStyle={styles.container}
              dataSource={this.updateDataSource()}
              renderRow={(rowData) => {
                return (
                  <Tile
                    event={rowData}
                    linkRoute={() => this.setRoute('Event Info', rowData)}
                  />
                )
              }}
            /> : <Text>Loading</Text>}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allEvents: state.allEvents
  }
}

export default connect(mapStateToProps, { newRoute, activeEvent })(Hub)

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  container: {
    flex: 1
  },
  footer: {
    height: 90,
    width: 500
  }
})

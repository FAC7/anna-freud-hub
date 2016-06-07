import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native'

import { connect } from 'react-redux'
import { newRoute } from '../Actions/actions_routing.js'
import { activeEvent } from '../Actions/actions_index.js'

import Tile from '../Components/Tile.js'
// import myEventsData from '../Data/test_myEvents_data.js'

class MyEvents extends Component {

  myEvents () {
    return this.props.allEvents.filter((event) => {
      return event.attending.indexOf('ysu:' + this.props.userDetails.email) > -1
    })
  }

  updateDataSource () {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return ds.cloneWithRows(this.myEvents())
  }

  setRoute (route, event) {
    this.props.activeEvent(event)
    this.props.newRoute(route)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        {this.myEvents().length > 0 ? <ScrollView>
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
          />
        </ScrollView> : <View />}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({ ...state })

export default connect(mapStateToProps, { newRoute, activeEvent })(MyEvents)

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

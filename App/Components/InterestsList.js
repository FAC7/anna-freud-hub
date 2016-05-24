import React from 'react'
import {
  View,
  ListView,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { setInterest } from '../Actions/actions_index.js'

import Tile from './InterestsTile.js'
import interests from '../Data/interests.js'


class InterestsList extends React.Component {
  constructor () {
    super()
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: this.ds.cloneWithRows(interests)
    }
  }
  render () {
    return (
      <ListView
        renderFooter={() => <View style={styles.footer} />}
        contentContainerStyle={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
            <Tile
              interest={rowData}
              chosenInterests={this.props.chosenInterests}
              setInterest={this.props.setInterest}
            />
          )
        }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chosenInterests: state.chosenInterests
  }
}

export default connect(mapStateToProps, { setInterest })(InterestsList)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  footer: {
    height: 90,
    width: 500
  }
})
import React from 'react'
import {
  View,
  ListView,
  Text,
  StyleSheet
} from 'react-native'


const interests = [ 'music', 'bowling', 'art', 'coding', 'music', 'bowling', 'art', 'coding', 'music', 'bowling', 'art', 'coding' ]

export default class ListViewTest extends React.Component {
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
        renderRow={(rowData) => <Text style={styles.row}>{rowData}</Text>}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 65
  },
  row: {
    width: 180,
    textAlign: 'center',
    margin: 5,
    height: 180,
    backgroundColor: 'rgb(169, 104, 235)'
  },
  footer: {
    height: 90,
    width: 500
  }
})

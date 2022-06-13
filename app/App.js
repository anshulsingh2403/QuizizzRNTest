import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';

import Column from './Column';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          id: "col_1"
        }
      ]
    }
    this.addColumn  = this.addColumn.bind(this);
  }
  addColumn() {
    let count = this.state.columns.length;
    let columns = [...this.state.columns];
    columns.push({
      id: "col_" + (count+1)
    });
    this.setState({
      columns
    })
  }
	render() {
		return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
            {
              this.state.columns?.length ?
              this.state.columns?.map(() => {
                return (
                  <Column
                    rows={
                      [{id: 1}]
                    }
                  />
                )
              })
              :
              null
            }
        </ScrollView>
        <TouchableOpacity style={styles.addBtn} onPress={this.addColumn}>
          <Text style={styles.addBtnText}>Add Column</Text>
        </TouchableOpacity>
      </SafeAreaView>
		);
	}
}

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#f2f2f2',
		padding: 8,
		paddingTop: 20,
		flexDirection: 'row'
	},
  addBtn: {
    height: 50,
    backgroundColor: '#412243',
    marginTop: 12,
    position: 'absolute',
    bottom: 100,
    justifyContent: 'center',
    borderRadius: 8
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
} );
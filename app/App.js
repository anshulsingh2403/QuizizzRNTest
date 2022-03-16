import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import _ from 'lodash';

import Card from './Card';

export default class App extends Component {
	render() {
		return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.column}>
            <View style={styles.columnContent}>
              <Card num={1} />

              <Card num={2} />

              <Card num={3} />
            </View>

            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <View style={styles.columnContent}>
              <Card num={1} />

              <Card num={2} />
            </View>

            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
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

	column: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: '#FFF',
		padding: 8,
		margin: 8
	},
	columnContent: {
		flex: 1,
  },
  addBtn: {
    height: 50,
    backgroundColor: '#412243',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  addBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  }
} );
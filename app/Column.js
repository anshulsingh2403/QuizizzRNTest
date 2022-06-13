import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Column extends React.PureComponent {
	static propTypes = {
		rows: PropTypes.array
	}
    constructor(props) {
        super(props);
        this.state = {
          rows: this.props.rows,
          disableAdd: false
        }
        this.addRow  = this.addRow.bind(this);
        this.onContentSizeChange  = this.onContentSizeChange.bind(this);
      }
      addRow() {
        let count = this.state.rows.length;
        let rows = [...this.state.rows];
        rows.push({
          id: count+1
        });
        this.setState({
          rows
        })
      }
      onContentSizeChange(width, height) {
        // alert(w + ' & ' + h)
        let screenHeight = Dimensions.get('window').height;
        if (height > screenHeight - 200) {
            this.setState({
                disableAdd: true
            })
        }
      }
	render () {
		return (
            <View style={styles.column}>
                <ScrollView style={styles.columnContent} onContentSizeChange={this.onContentSizeChange}>
                    {
                    this.state.rows?.length ?
                        this.state.rows?.map(item => {
                            return (
                                <Card key={item.id} num={item.id} />
                            )
                        })
                        :
                        null
                    }
                </ScrollView>
                <TouchableOpacity disabled={this.state.disableAdd} style={[styles.addBtn, this.state.disableAdd ? styles.disableButton : {}]} onPress={this.addRow}>
                    <Text style={styles.addBtnText}>Add Row</Text>
                </TouchableOpacity>
          </View>
		)
	}
}

const styles = StyleSheet.create( {
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
    disableButton: {
        backgroundColor: '#aaa',
    },
    addBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    }
} );


import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
let count = 0;

export default class Card extends React.Component {
	static propTypes = {
		num: PropTypes.number
	}
	constructor(props) {
		super(props);
		this.state = {
		  colors: ['#aaa', 'lightcoral', '#a21', '#000','#a0f', 'transparent'],
		  selectedColor: 'red'
		}
		this.toggleColor  = this.toggleColor.bind(this);
	  }
	  toggleColor() {
		let random = 0;
		if (count + 1 > this.state.colors.length - 1) {
			random = 0
			count = 0
		} else {
			random = count + 1;
			count = count + 1
		}
		if (this.state.colors[random]) {
			this.setState({
				selectedColor: this.state.colors[random]
			})
		}
	  }
	render () {
		return (
			<TouchableOpacity style={styles.container} onPress={this.toggleColor}>
				<Text>{this.props.num}</Text>
				<View style={[styles.label, { 
						backgroundColor: this.state.selectedColor
					}
				]}
				/>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create( {
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#d8d8d8',
		padding: 8,
		marginVertical: 8,
		height: 64,
		borderRadius: 8
	},
	label: {
		width: 32,
		height: 8,
		borderRadius: 4,
		position: 'absolute',
		top: 5,
		right: 5
	}
} );
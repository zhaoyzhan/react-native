import React from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class CarChildren extends React.Component {
	render() {
		return (
			<View style={styles.ccMain}>
				<Text>123456</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ccMain: {
		flex: 1,
		backgroundColor: 'red'
	}
})
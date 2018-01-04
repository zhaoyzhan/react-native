import React from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class HomeChild extends React.Component {
	render() {
		return (
			<View style={styles.hcLink}>
				<Text>{this.props.type+'1234'}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	hcLink: {
		flex: 1,
		backgroundColor: '#ccc',
	}
});
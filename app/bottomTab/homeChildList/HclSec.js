import React from 'react';

import {
	Text,
	View,
	Button,
	StyleSheet
} from 'react-native';

export default class HclSec extends React.Component {
	static navigationOptions = {
		title: '第二页',
	};
	render() {
		return (
			<View style={styles.hcMain}>
				<Text>Second</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	hcMain: {
		flex: 1,
		backgroundColor: '#ccc',
	}
});
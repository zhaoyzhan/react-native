import React from 'react';

import {
	Text,
	View,
	Button,
	StyleSheet
} from 'react-native';

export default class HclFirst extends React.Component {
	static navigationOptions = {
		title: '第一页',
	};
	render() {
		return (
			<View style={styles.hcMain}>
				<Text>first</Text>
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
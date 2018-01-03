import React from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class ListScroll extends React.Component {
	static navigationOptions = {
		title: '列表页',
	};
	render() {
		return (
			<View style={styles.crollBar}>
				<Text>List</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	crollBar: {
		flex: 1,
		backgroundColor: '#ccc'
	}
});
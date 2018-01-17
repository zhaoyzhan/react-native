import React from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

import ListNews from './ListNews'

export default class ListScroll extends React.Component {
	static navigationOptions = {
		title: '列表页',
	};
	render() {
		return (
			<View style={styles.crollBar}>
				<ListNews/>
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
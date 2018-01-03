import React from 'react';

import {
	View,
	Button,
	Text,
	StyleSheet,
	ToastAndroid
} from 'react-native';

export default class Headers extends React.Component {
	buttonOnClick() {
		console.log(12345)
	}
	render() {
		return (
			<View>
				12345666
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainCon: {
		height: 40,
		lineHeight: 30,
		backgroundColor: '#ccc'
	},
	btn: {
		width: 40,
	}
});
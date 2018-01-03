import React from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class MyScroll extends React.Component {
	static navigationOptions = {
		title: '个人中心',
	};
	render() {
		return (
			<View style={styles.crollBar}>
				<Text>My</Text>
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

export default MyScroll
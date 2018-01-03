import React from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class CarScroll extends React.Component {
	static navigationOptions = {
		title: '购物车',
	};
	render() {
		return (
			<View style={styles.crollBar}>
				<Text>Car</Text>
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

export default CarScroll
import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	Image,
	FlatList,
	VirtualizedList,
	TouchableOpacity,
	ToastAndroid
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

import CarMain from './carDemo/CarMain'

class CarScroll extends React.Component {
	static navigationOptions = {
		title: '购物车',
	};
	render() {
		return (
			<View style={styles.crollBar}>
				{/*<FlatList
					data={this.state.carList}
					renderItem={this._renderItem}
					keyExtractor={item => item.id}
					numColumns={2}
					></FlatList>*/}
				<CarMain/>
			</View>
		)
	};
}

const styles = StyleSheet.create({
	crollBar: {
		flex: 1,
		backgroundColor: '#ccc'
	},
});

export default CarScroll
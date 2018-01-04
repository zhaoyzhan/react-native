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

import CCSun from './CCSun'
import CarMain from './carDemo/CarMain'

// import {
// 	observable,
// 	runInAction,
// 	autorun
// } from 'mobx';

// import {
// 	observer
// } from 'mobx-react/native';

// @observer
class CarScroll extends React.Component {
	// @observable
	// newData = 'zhangsan';

	// constructor(props) {
	// 	super(props);
	// 	const {
	// 		navigate
	// 	} = this.props.navigation;
	// 	this.state = {
	// 		carList: [{
	// 			'path': require('../../../img/p0.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 0,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p1.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 1,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p2.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 2,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p3.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 3,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p4.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 4,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p5.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 5,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p6.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 6,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p7.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 7,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p8.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 8,
	// 			// 'navigate': navigate
	// 		}, {
	// 			'path': require('../../../img/p9.jpg'),
	// 			'title': '凯迪拉克',
	// 			'id': 9,
	// 			// 'navigate': navigate
	// 		}],
	// 	};
	// };
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
	// _renderItem = (item) => {
	// 	const {
	// 		navigate
	// 	} = this.props.navigation;
	// 	return (
	// 		<CCSun navigate={navigate} item={item}/>
	// 	)
	// }
}

const styles = StyleSheet.create({
	crollBar: {
		flex: 1,
		backgroundColor: '#ccc'
	},
});

export default CarScroll
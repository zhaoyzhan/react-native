import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ToastAndroid,
	FlatList,
	TouchableOpacity,
	TouchableWithoutFeedback,
	TouchableHighlight,
	TouchableNativeFeedback,
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

import CarList from './CarList'
import CarSec from './CarSec';
// import Headers from './public/Header';

class CarMain extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			carList: [{
				'path': require('../../../../img/p0.jpg'),
				'title': '凯迪拉克00',
				'id': 0,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p1.jpg'),
				'title': '凯迪拉克01',
				'id': 1,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p2.jpg'),
				'title': '凯迪拉克02',
				'id': 2,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p3.jpg'),
				'title': '凯迪拉克03',
				'id': 3,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p4.jpg'),
				'title': '凯迪拉克04',
				'id': 4,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p5.jpg'),
				'title': '凯迪拉克05',
				'id': 5,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p6.jpg'),
				'title': '凯迪拉克06',
				'id': 6,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p7.jpg'),
				'title': '凯迪拉克07',
				'id': 7,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p8.jpg'),
				'title': '凯迪拉克08',
				'id': 8,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p9.jpg'),
				'title': '凯迪拉克09',
				'id': 9,
				// 'navigate': navigate
			}],
		};
	}
	static navigationOptions = {
		title: '查看购物车',
	};
	buttonOnClick() {
		console.log("1")
	};
	render() {
		return (
			<View style={styles.contain}>
				<FlatList
					data={this.state.carList}
					renderItem={this._nativeR}
					keyExtractor={item => item.id}
					numColumns={2}
				></FlatList>
			</View>
		)
	};
	_nativeR = (item) => {
		const {
			navigate
		} = this.props.navigation;
		const detailNews = item.item;
		return (
			<View>
				<TouchableOpacity 
					onPress={()=>navigate(
						'Chat', 
						{
							news:[{
								id: detailNews.id, 
								path: detailNews.path, 
								title: detailNews.title
							}]
						})
					}
				>
					<Image style={styles.imgL} source={item.item.path}/>
				</TouchableOpacity>
				<Text style={styles.title}>{item.item.title}</Text>
			</View>
		)
	}
}

const SimpleApp = StackNavigator({
	Home: {
		screen: CarMain
	},
	Chat: {
		screen: CarSec
	}
});

export default SimpleApp;

// const HomeScreen = () => (
// 	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home Screen</Text>
//   </View>
// );

// const DetailsScreen = () => (
// 	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Details Screen</Text>
//   </View>
// );

// const RootNavigator = StackNavigator({
// 	Home: {
// 		screen: HomeScreen,
// 		navigationOptions: {
// 			headerTitle: 'Home',
// 		}
// 	},
// 	Details: {
// 		screen: DetailsScreen,
// 	},
// });

// export default RootNavigator;

const styles = StyleSheet.create({
	contain: {
		flex: 1,
	},
	tab: {
		width: 100,
		height: 200,
		display: 'flex',
		flexWrap: 'nowrap'
	},
	left: {
		flex: 1,
		height: 20
	},
	center: {
		flex: 2
	},
	right: {
		flex: 1
	},
	btn: {
		fontSize: 14
	},
	imgL: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		width: 150,
		height: 150,
	},
	title: {
		lineHeight: 40,
		fontSize: 16
	}
})
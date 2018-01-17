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

import CCSun from './CCSun';
// import Headers from './public/Header';

class CarChildren extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			carList: [{
				'path': require('../../../img/p0.jpg'),
				'title': '凯迪拉克',
				'id': 0,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p1.jpg'),
				'title': '凯迪拉克',
				'id': 1,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p2.jpg'),
				'title': '凯迪拉克',
				'id': 2,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p3.jpg'),
				'title': '凯迪拉克',
				'id': 3,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p4.jpg'),
				'title': '凯迪拉克',
				'id': 4,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p5.jpg'),
				'title': '凯迪拉克',
				'id': 5,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p6.jpg'),
				'title': '凯迪拉克',
				'id': 6,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p7.jpg'),
				'title': '凯迪拉克',
				'id': 7,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p8.jpg'),
				'title': '凯迪拉克',
				'id': 8,
				// 'navigate': navigate
			}, {
				'path': require('../../../../img/p9.jpg'),
				'title': '凯迪拉克',
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
				{/*<Button onPress={this.buttonOnClick} style={styles.btn} title='第一页'></Button>
				<Button onPress={()=>ToastAndroid.show("被点击了", ToastAndroid.SHORT)} style={styles.btn} title='第二页'></Button>
				<Button onPress={()=>navigate('Chat', {user: 'zhangsan!!!'})} style={styles.btn} title='第三页'></Button>
				<Button onPress={()=>ToastAndroid.show("被点击了", ToastAndroid.SHORT)} style={styles.btn} title='第四页'></Button>
				<TouchableHighlight 
					activeOpacity={0.5} 
					onPress={()=>navigate('Chat', {user: 'zhangsan1234'})}
					style={{}}
					>
					<Text style={{fontSize:23, color:'blue', backgroundColor:'white', width:20}}>点击</Text>
				</TouchableHighlight>*/}
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
		return (
			<View>
				<TouchableOpacity onPress={()=>navigate('Chat', {user: 'wangwu'})}>
					<Image style={styles.imgL} source={item.item.path}/>
				</TouchableOpacity>
				<Text style={styles.title}>{item.item.title}</Text>
			</View>
		)
	}
}

const SimpleApp = StackNavigator({
	Home: {
		screen: CarChildren
	},
	Chat: {
		screen: CCSun
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
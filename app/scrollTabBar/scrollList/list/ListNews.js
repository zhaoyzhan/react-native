import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ToastAndroid,
	TouchableOpacity
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

import Detail from './Detail'

class ListNews extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newsData: [{
				id: '1',
				title: '商品1',
				price: "$255"
			}, {
				id: '2',
				title: '商品2',
				price: "$255"
			}, {
				id: '3',
				title: '商品3',
				price: "$255"
			}, {
				id: '4',
				title: '商品4',
				price: "$255"
			}, {
				id: '5',
				title: '商品5',
				price: "$255"
			}, {
				id: '6',
				title: '商品6',
				price: "$255"
			}, {
				id: '7',
				title: '商品7',
				price: "$255"
			}, {
				id: '8',
				title: '商品8',
				price: "$255"
			}, {
				id: '9',
				title: '商品9',
				price: "$255"
			}, {
				id: '10',
				title: '商品10',
				price: "$255"
			}, {
				id: '11',
				title: '商品11',
				price: "$255"
			}, {
				id: '12',
				title: '商品12',
				price: "$255"
			}, {
				id: '13',
				title: '商品13',
				price: "$255"
			}]
		};
	};
	static navigationOptions = {
		title: '列表信息',
	};
	render() {
		return (
			<View style={styles.newsBar}>
				<FlatList
					data={this.state.newsData}
					renderItem={this._renderItem}
					keyExtractor={item => item.id}
				>
				</FlatList>
			</View>
		);
	};
	_renderItem = (item) => {
		const {
			navigate
		} = this.props.navigation;
		return (
			<TouchableOpacity onPress={()=>navigate('Detail',{news:[{title:item.item.title, id: item.item.id, price: item.item.price}]})}>
				<View style={ styles.newsList }>
					<Text style={styles.title}>title: {item.item.title}</Text>
					<Text style={styles.price}>price: {item.item.price}</Text>
				</View>
			</TouchableOpacity>
		)
	};
	Btnclick() {
		console.log("1234")
	}
}

const ListNewsTitle = StackNavigator({
	Home: {
		screen: ListNews,
	},
	Detail: {
		screen: Detail
	}
});

export default ListNewsTitle

const styles = StyleSheet.create({
	newsBar: {
		flex: 1,
		backgroundColor: '#ccc'
	},
	newsList: {
		height: 100,
		backgroundColor: '#fff',
		marginBottom: 10,
		paddingLeft: 20
	},
	title: {
		lineHeight: 40
	},
	price: {
		lineHeight: 40
	}
});
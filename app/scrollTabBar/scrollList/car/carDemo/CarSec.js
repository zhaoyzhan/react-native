import React, {
	Component
} from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ListView,
	FlatList
} from "react-native";

export default class CarSec extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataList: [{
				path: require('../../../../img/p5.jpg'),
				id: '1'
			}, {
				path: require('../../../../img/p5.jpg'),
				id: '2'
			}, {
				path: require('../../../../img/p5.jpg'),
				id: '3'
			}]
		};
	}
	static navigationOptions = ({
		navigation
	}) => ({
		title: navigation.state.params.news[0].title,
	});
	render() {
		const {
			params
		} = this.props.navigation.state;
		console.log(params.news)
		return (
			<FlatList
				data={params.news}
				renderItem={this._renderItem}
				keyExtractor={item => item.id}
			></FlatList>
		)
	};
	_renderItem = (item) => {
		return (
			<View>
				<Image source={item.item.path} style={styles.detailImg} />
                <Text>{item.item.id}</Text>
            </View>
		)
	}
}

const styles = StyleSheet.create({
	detailImg: {
		marginLeft: 30,
		marginTop: 20,
		marginBottom: 30,
		width: 300,
		height: 600
	}
})
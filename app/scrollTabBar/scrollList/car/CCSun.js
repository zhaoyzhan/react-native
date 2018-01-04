import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ToastAndroid
} from 'react-native';

import {
	StackNavigator
} from 'react-navigation';

import CarChildren from './CarChildren'

class CCSun extends React.Component {
	static navigationOptions = {
		title: '',
	};
	render() {
		const {
			navigate,
			item
		} = this.props;
		return (
			<View>
				<TouchableOpacity onPress={()=>ToastAndroid.show("图片被点击了", ToastAndroid.SHORT)}>
					<Image onPress={()=>ToastAndroid.show("被点击了", ToastAndroid.SHORT)} style={styles.imgL} source={this.props.item.item.path}/>
				</TouchableOpacity>
				<Text style={styles.title}>{this.props.item.item.title}</Text>
			</View>
		)
	}
}

const CCSunMain = StackNavigator({
	Home: {
		screen: CCSun
	},
	Detail: {
		screen: CarChildren
	}
});

export default CCSun

const styles = StyleSheet.create({
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
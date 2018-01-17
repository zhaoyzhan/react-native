import React, {
	Component
} from "react";
import {
	StyleSheet,
	View,
	Text
} from "react-native";

export default class Detail extends React.Component {
	static navigationOptions = ({
		navigation
	}) => ({
		title: navigation.state.params.news[0].title,
	});
	render() {
		const {
			params
		} = this.props.navigation.state;
		return (
			<View>
                <Text>{params.news[0].title}</Text>
                <Text>{params.news[0].price}</Text>
            </View>
		);
	}
}
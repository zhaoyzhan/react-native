import React from 'react';

import {
	AppRegistry,
	Text,
	View,
	Button,
} from 'react-native';

import {
	TabNavigator
} from "react-navigation";

import SecondScreen from './SecondScreen'

class TabMainScreen extends React.Component {
	render() {
		return (
			<Text>Hello Mr</Text>
		)
	}
}

const TabMainScreenNavigator = TabNavigator({
	Main: {
		screen: TabMainScreen
	},
	Second: {
		screen: SecondScreen
	}
})

export default TabMainScreenNavigator
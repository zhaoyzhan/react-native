import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import {
	observable,
	runInAction,
	autorun
} from 'mobx';

import {
	StackNavigator
} from 'react-navigation';

import {
	observer
} from 'mobx-react/native';

@observer
export default class MainMobx extends Component {
	@observable
	num = 0;
	constructor(props) {
		super(props);

		this.state = {
			flag: 0
		};
	}
	static navigationOptions = {
		title: '第一页',
	};
	show = () => {
		this.num++
	}
	render() {
		return (
			<View style={styles.com}>
				<Text onPress={this.show}>1234{this.state.num}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	com: {
		flex: 1,
		backgroundColor: '#ccc'
	}
})
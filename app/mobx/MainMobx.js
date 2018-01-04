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
	show = (nu) => {
		console.log(nu)
	}
	render() {
		return (
			<View style={styles.com}>
				<Text onPress={this.show(7)}>{this.state.flag}</Text>
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
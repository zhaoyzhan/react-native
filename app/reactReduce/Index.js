import React from 'react-native';

import {
	Provider
} from 'react-redux';

import configureStore from './store/index';

let store = configureStore();

import Root from './Root';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			store: configureStore(() => {
				this.setState({
					isLoading: false
				})
			})
		};
	}
	render() {
		if (this.state.isLoading) {
			console.log('loading app');
			return null;
		}
		return (
			<Provider store={this.state.store}>
				<Root/>
			</Provider>
		)
	}
}
import React, {
	Component,
	Navigator
} from 'react-native';

import {
	connect
} from 'react-redux';

import Router from './configs/router';

import {
	skipLogin,
	asyncSkipLogin
} from './action/User';

import LoginPage from './page/Login';

import MainPage from './page/Main';

let initialRoute = {
	name: 'login-page',
	page: LoginPage
}

class Root extends React.Component {
	constructor(props) {
		super(props);

		if (props.isLoggedIn) {
			initialRoute = {
				name: 'main-page',
				page: MainPage
			}
		}
	};
	renderScene({
		page,
		name,
		id,
		index,
		props
	}, navigator) {
		this.router = this.router || new Router(navigator);
		if (page) {
			return React.createElement(page, {
				...props,
				ref: view => this[index] = biew,
				router: this.router,
				name,
				route: {
					name,
					id,
					index
				}
			})
		}
	}

	configureScene(route) {
		if (route.sceneConfig) {
			return route.sceneConfig;
		}
		return Navigator.SceneConfigs.FloatFromRight;
	}

	render() {
		return (
			<Navigator
				ref={view=> this.navigator = view}
				initialRoute={initialRoute}
				configureScene={this.configureScene.bind(this)}
				renderScene={this.renderScene.bind(this)}
			>	
			</Navigator>
		)
	}
}

function select(store) {
	return (
		isLoggedIn: store.userStore.isLoggedIn
	)
}